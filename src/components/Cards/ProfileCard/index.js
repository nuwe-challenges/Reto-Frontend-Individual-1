import React from "react";
import "./Profile.css";
import * as Icons from "react-icons/all";
import js from "assets/javascript.svg";
import css from "assets/css-3.svg";
import next from "assets/nextjs-icon.svg";
import rjs from "assets/react.svg";
import vue from "assets/vue.svg";
import Avatar from "assets/Avatar.png";
import tp from "assets/typescript-icon.svg";

export default function ProfileCard() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="upper-container">
          <div className="image-container">
            <img src={Avatar} alt="Avatar" className="avatar" />
          </div>
        </div>
        <div className="lower-container">
          <div>
            <h3>AndrewJs</h3>
            <h4>mail | +34 666 666 666</h4>
          </div>
          <p className="profile-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus et minus asperiores illo unde delectus ut dolores
            sint laudantium quod.
          </p>
          <div className="profile-content">
            <div>
              <Icons.AiOutlineLinkedin className="social" />
              <Icons.FaGithub className="social" />
            </div>
            <div>
              <Icons.GoLocation className="location" />
              <span style={{ fontSize: "11px" }}>Venezuela, Punto Fijo</span>
            </div>
            <div>
              <span className="connection-time">
                Ultima conexion: hace 2hrs
              </span>
            </div>
          </div>
          <h3 className="looking_work">
            Buscando trabajo como fullstack developer
          </h3>
          <div className="user-stack">
            <h5>Stack indicado por el usuario</h5>
            <div className="stack-image">
              <img src={js} alt="stack" className="img-stack" />
              <img src={css} alt="stack" className="img-stack" />
              <img src={next} alt="stack" className="img-stack" />
              <img src={rjs} alt="stack" className="img-stack" />
              <img src={vue} alt="stack" className="img-stack" />
              <img src={tp} alt="stack" className="img-stack" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
