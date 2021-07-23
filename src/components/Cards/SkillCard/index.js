import ChartSkills from "components/ChartSkills";
import { hardSkillUser, otherSkills, softSkills } from "./chartStyle";
import * as Icons from "react-icons/all";
import "./Skill.css";

export default function SkillCard() {
  return (
    <div className="skill_Card">
      <div className="skill-options">
        <p className="text-option">Perfil Nuwe</p>
        <p className="text-option">Timeline CV</p>
        <p className="text-option">Social</p>
      </div>
      <div className="skill-container">
        <div className="skill-content">
          <h4 className="skill-title">Perfil validado en nuwe de AndrewJs</h4>
          <div className="skill-point">
            <Icons.GoGraph className="graph" /> 17 / 2500u | 6000pts
          </div>
          <div className="hard-skills">
            <p>Hard skills validadas en NUWE</p>
            <div className="hard-content">
              <ChartSkills
                data={hardSkillUser}
                title="Top 5 hard skills de User 1"
              />
              <ChartSkills
                data={otherSkills}
                title="Otras hard skills validadas por NUWE"
              />
              <p style={{ textAlign: "center" }}>
                Soft skills validadas en NUWE{" "}
              </p>
              <ChartSkills
                data={softSkills}
                title="Puntuaciones obtenidas en los retos grupales"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
