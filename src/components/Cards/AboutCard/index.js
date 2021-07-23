import * as Icons from "react-icons/all";
import "./About.css";

export default function AboutCard() {
  return (
    <div className="about-container">
      <div className="about-card">
        <p className="about-title">Sobre el puesto que busca AndrewJs:</p>
        <div className="about-description">
          <div>
            <Icons.GoLocation /> Barcelona, spain
          </div>
          <div>
            <Icons.IoBusinessOutline /> Startup
          </div>
          <div>
            <Icons.FaHandHoldingUsd /> 40.0000 a 45.0000 € / a
          </div>
        </div>
        <hr className="line" />
        <div className="about-info">
          <div>
            <Icons.BiWorld /> disponible para viajar
          </div>
          <div>
            <Icons.VscRemoteExplorer /> Disponibilidad para trabajar en remoto
          </div>
          <div>
            <Icons.IoCalendarOutline /> Incorporacion inmediata
          </div>
        </div>
      </div>
    </div>
  );
}
