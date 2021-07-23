import * as Icons from "react-icons/all";
import "./Modal.css";

export default function Modal({ isOpen, isClose }) {
  const handleDialog = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal ${isOpen && "modal-open"}`} onClick={isClose}>
      <div className="modal__dialog" onClick={handleDialog}>
        <Icons.AiOutlineCloseCircle className="close-modal" onClick={isClose} />
        <div className="config-value">
          <div>
            <label htmlFor="Username" className="label-style">
              Cambia tu nombre de usuario
            </label>
            <input type="text" className="input-style" />
          </div>

          <div>
            <label htmlFor="Description" className="label-style">
              Cambia tu Descripcion
            </label>
            <textarea type="text" className="input-style" />
          </div>
          <div className="select">
            <select>
              <option value="">Elige tu stack:</option>
              <option value="opcion-1">ReactJs</option>
              <option value="opcion-2">AngularJs</option>
              <option value="opcion-2">Javascript</option>
              <option value="opcion-2">Typescript</option>
              <option value="opcion-3">Htlm5</option>
              <option value="opcion-4">Css3</option>
            </select>
          </div>
        </div>
        <button className="btn-close">Guardar Cambios</button>
      </div>
    </div>
  );
}
