import React, { useState } from "react";
import api from "../services/api";

function MutexSimulator() {
  const [isLocked, setIsLocked] = useState(false);
  const [owner, setOwner] = useState(null);
  const [message, setMessage] = useState("");

  const handleLock = async (process) => {
    try {
      const response = await api.post("/lock", { process });
      const data = response.data.data;

      setIsLocked(data.isLocked);
      setOwner(data.owner);
      setMessage(data.message);
    } catch (error) {
      setMessage("Server Error: " + error.message);
    }
  };

  const handleUnlock = async (process) => {
    try {
      const response = await api.post("/unlock", { process });
      const data = response.data.data;

      setIsLocked(data.isLocked);
      setOwner(data.owner);
      setMessage(data.message);
    } catch (error) {
      setMessage("Server Error: " + error.message);
    }
  };

  return (
    <div className="mutex-container">
      <h1>Mutex Lock Simulator</h1>

      <div className="status-box">
        <h2>Lock Status</h2>
        <p>Is Locked: {isLocked ? "True" : "False"}</p>
        <p>Owner: {owner !== null ? `Process ${owner}` : "None"}</p>
      </div>

      <div className="button-group">
        <h3>Process 0</h3>
        <button onClick={() => handleLock(0)}>Lock (P0)</button>
        <button onClick={() => handleUnlock(0)}>Unlock (P0)</button>
      </div>

      <div className="button-group">
        <h3>Process 1</h3>
        <button onClick={() => handleLock(1)}>Lock (P1)</button>
        <button onClick={() => handleUnlock(1)}>Unlock (P1)</button>
      </div>

      <div className="message-box">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default MutexSimulator;