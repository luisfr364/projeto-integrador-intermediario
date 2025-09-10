import React from "react";
import "./carrossel.css";

function Carrossel() {
  return (
    <div className="carrossel">
      <section className="hero">
        <div className="" style={{ maxWidth: 900, margin: "0 auto" }}>
          <img
            src="/images/masculinos/perfume1.png"
            alt="Destaque AromaUP"
            style={{ width: "100%", borderRadius: 12, objectFit: "cover" }}
          />
        </div>
      </section>
    </div>
  );
}

export default Carrossel