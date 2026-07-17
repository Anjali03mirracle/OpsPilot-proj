function Sidebar({ documents }) {
  return (
    <div
      style={{
        width: "250px",
        background: "#fff",
        padding: "20px",
      }}
    >
      <h3>Loaded Documents</h3>

      {documents.length === 0 ? (
        <p>No documents uploaded.</p>
      ) : (
        documents.map((doc, index) => (
          <p key={index}>{doc}</p>
        ))
      )}
    </div>
  );
}

export default Sidebar;