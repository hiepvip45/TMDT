import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Đang gọi API...");

  useEffect(() => {
    fetch("http://localhost:8080")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Không kết nối được backend 😢"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🔥 React + Spring Boot 🚀</h1>

      <p>{message}</p>

      <button
        onClick={() => alert("Frontend hoạt động OK!")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Test Button
      </button>
    </div>
  );
}

export default App;