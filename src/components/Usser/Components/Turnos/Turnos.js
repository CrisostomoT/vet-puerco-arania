import React, { useState, useEffect } from "react";
import { Tabs, Tab, Row } from "react-bootstrap";
import FormTurnos from "./FormTurnos";
import Turno from "./Turno";
import axiosInstance from "../../../util/axiosInstance";

// import FooterAdmin from "../../../../components/Admin/FooterAdmin";

import "./styleTurno.css";

const Turnos = () => {
  const [turnos, setTurnos] = useState([]);

  const listarTurnos = async () => {
    const result = await axiosInstance.get("/turnos/user");
    
    setTurnos(result.data.userAppointments || []);

    console.log(result.data);

  };

  useEffect(() => {
    listarTurnos();
  }, []);

  const titulo =
    turnos.length === 0 ? (
      <button
        className="btn btn-primary"
        onClick={() => {
          alert("clicked");
        }}
      >
        Saca tu turno
      </button>
    ) : (
      ""
    );

  return (
    <div className="contenedor-card-turnos1">
      <Tabs defaultActiveKey="datos" id="uncontrolled-tab-example">
        <Tab eventKey="datos" title="Administra tus turnos">
          <p className="tituloTurno">
            <span>{titulo}</span>
          </p>
          <Row>
            {turnos.map((turno) => (
              <Turno listarTurnos={listarTurnos} turno={turno} />
            ))}
          </Row>
        </Tab>
        <Tab eventKey="modificar" title="Solicitar Turno">
          <FormTurnos listarTurnos={listarTurnos} />
        </Tab>
      </Tabs>

    </div>
  );
};

export default Turnos;
