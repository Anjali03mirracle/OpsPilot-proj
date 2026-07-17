import { useState } from "react";

import Upload from "./components/Upload";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
  const [documents, setDocuments] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#f5f5f5",
      }}
    >
      <Sidebar documents={documents} />

      <div
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>🚀 OpsPilot</h1>

        <Upload setDocuments={setDocuments} />

        <Chat />
      </div>
    </div>
  );
}

export default App;