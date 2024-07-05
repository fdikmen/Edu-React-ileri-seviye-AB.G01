import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    // methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user/client connected. ClientID : ", socket.id);

  socket.on("disconnect", () => {
    console.log("A user/client disconnected");
  });
});

httpServer.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
