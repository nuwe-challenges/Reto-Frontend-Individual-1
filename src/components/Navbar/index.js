import React, { useState } from "react";
import * as Icons from "react-icons/all";
import "./Navbar.css";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const sidebarStyle = sidebar ? "sidebar active" : "sidebar";

  return (
    <div className={sidebarStyle}>
      <div className="logo_content">
        <div className="logo">
          <Icons.FaReact className="icon" />
          <div className="logo_name">Nuwe</div>
        </div>
        <Icons.AiOutlineMenu className="btn" onClick={showSidebar} />
      </div>
      <ul className="nav_list">
        <li>
          <a href="//#endregion">
            <Icons.BsHouseDoor className="icon_text" />
            <span className="links_name">Panel</span>
          </a>
          <span className="tooltip">Panel</span>
        </li>
        <li>
          <a href="//#endregion">
            <Icons.IoBusinessOutline className="icon_text" />
            <span className="links_name">Empresas</span>
          </a>
          <span className="tooltip">Empresas</span>
        </li>
        <li>
          <a href="//#endregion">
            <Icons.AiOutlineUser className="icon_text" />
            <span className="links_name">Perfil</span>
          </a>
          <span className="tooltip">Perfil</span>
        </li>
        <li>
          <a href="//#endregion">
            <Icons.AiOutlineInfoCircle className="icon_text" />
            <span className="links_name">Contacto</span>
          </a>
          <span className="tooltip">Contacto</span>
        </li>
      </ul>
    </div>
  );
}
