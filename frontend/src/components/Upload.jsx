import { useState } from "react";
import { uploadDocuments } from "../services/api";

function Upload({ setDocuments }) {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const files = Array.from(e.target.files);

    if (!files.length) return;

    try {
      setLoading(true);

      const data = await uploadDocuments(files);

      setDocuments(data.uploaded_files);

      alert("Documents uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="file"
        multiple
        accept=".pdf"
        onChange={handleUpload}
      />

      {loading && <p>Uploading...</p>}
    </div>
  );
}

export default Upload;