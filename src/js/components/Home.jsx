import React, { useState, useEffect } from "react";

const Home = () => {
  const [luzActiva, setLuzActiva] = useState("rojo");

  useEffect(() => {
    const intervalo = setInterval(() => {
      setLuzActiva((colorActual) => {
        if (colorActual === "rojo") return "verde";
        if (colorActual === "verde") return "amarillo";
        if (colorActual === "amarillo") return "rojo";
      });
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="container text-center mt-5">
      <h1>Semáforo Bootstrap</h1>

      <div
        className="semaforo bg-dark p-4 mx-auto rounded d-flex flex-column align-items-center"
        style={{ width: "100px" }}
      >
        <button
          className={`btn rounded-circle mb-3 ${
            luzActiva === "rojo" ? "bg-danger" : "bg-secondary"
          }`}
          style={{ width: "60px", height: "60px" }}
        ></button>

        <button
          className={`btn rounded-circle mb-3 ${
            luzActiva === "amarillo" ? "bg-warning" : "bg-secondary"
          }`}
          style={{ width: "60px", height: "60px" }}
        ></button>

        <button
          className={`btn rounded-circle ${
            luzActiva === "verde" ? "bg-success" : "bg-secondary"
          }`}
          style={{ width: "60px", height: "60px" }}
        ></button>
      </div>

      <style>{`
        .bg-secondary {
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
};

export default Home;