import React, { useEffect, useState } from "react";
import io from "socket.io-client";

export default function App() {
  const serverUrl = "http://localhost:4000"; // Server URL
  const socket = io(serverUrl);

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => { setIsConnected(true); });
    socket.on("disconnect", () => {setIsConnected(false);});

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <div>
      App
      <h1>SocketIO Client</h1>
      <p>Server Url {serverUrl}</p>
      <p>{isConnected ? "Disconnect" : "Connect"}</p>
    </div>
  );
}
