import { useState } from "react";
import { askQuestion } from "../services/api";

function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    try {
      setLoading(true);

      // Temporary session id
      const data = await askQuestion(question);

      setAnswer(data.answer);

      setQuestion("");
    } catch (error) {
      console.error(error);
      alert("Failed to get response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <h2>Chat</h2>

      <textarea
        rows={4}
        placeholder="Ask anything about your uploaded documents..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={handleAsk} disabled={loading}>
        {loading ? "Thinking..." : "Send"}
      </button>

      {answer && (
        <div
          style={{
            padding: "15px",
            background: "#ffffff",
            border: "1px solid #ddd",
          }}
        >
          <strong>OpsPilot:</strong>

          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Chat;