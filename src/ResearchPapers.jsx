import React from "react";

export default function ResearchPapers() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>My Research Papers</h1>

      <a
        href="/paper/Ghouse_Research_Paper_1.pdf"
        download="Ghouse_Research_Paper_1.pdf"
        style={{
          display: "inline-block",
          margin: "10px",
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          textDecoration: "none",
          borderRadius: "6px",
        }}
      >
        📥 Download Research Paper 1
      </a>
    </div>
  );
}
