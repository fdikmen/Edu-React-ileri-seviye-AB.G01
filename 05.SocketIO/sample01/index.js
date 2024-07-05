import express from "express";
import { createServer } from "http";
import { fileURLToPath } from "url"; // abc/def/ghi => file:///abc/def/ghi
import { dirname, join } from "path";
import { Server } from "socket.io";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const db = await open({
  filename: "chat.db",
  driver: sqlite3.Database,
});

await db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_offset TEXT UNIQUE,
    content TEXT
);`);

const myApp = express();
const myHttpServer = createServer(myApp);
const socketIOServer = new Server(myHttpServer, {
  connectionStateRecovery: {},
});

const _dirname = dirname(fileURLToPath(import.meta.url));

myApp.get("/", (req, res) => {
  // res.send("<h1>Hello World</h1>");
  res.sendFile(join(_dirname, "index.html"));
});

//socketIOServer.emit("hello", "Hello World");
//socket.broadcast.emit("hi");

socketIOServer.on("connection", (socket) => {
  console.log("A user/client connected. ClientID : ", socket.id);

  socket.on("chat message", async (msg, client_offset) => {
    console.log("Chat message received: ", msg);
    let result;

    try {
      result = await db.run(
        "INSERT INTO messages (content,client_offset) VALUES (?,?)",
        msg,
        client_offset
      );
    } catch (error) {
      return;
    }

    if (!socket.recovered) {
      await db.each(
        "SELECT id,content From messages Where id > ?",
        [socket.handshake.auth.serverOffset || 0],
        (err, row) => {
          socket.emit("chat message", row.content, row.id);
        }
      );
    }
    socketIOServer.emit("chat message", msg, result.lastID);
  });

  socket.on("disconnect", () => {
    console.log("A user/client disconnected");
  });
});

myHttpServer.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
