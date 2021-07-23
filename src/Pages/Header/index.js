import { useState } from "react";
import * as Icons from "react-icons/all";
import ProfileCard from "components/Cards/ProfileCard";
import AboutCard from "components/Cards/AboutCard";
import Modal from "components/Modal";
import "./Header.css";

export default function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const closeModal = () => setIsOpenModal(false);

  return (
    <div className="header-container">
      <Icons.FiSettings
        className="edit-cards"
        onClick={() => setIsOpenModal(true)}
      />
      {isOpenModal && <Modal isOpen={isOpenModal} isClose={closeModal} />}
      <div className="item-1">
        <ProfileCard />
      </div>
      <div className="item-2">
        <AboutCard />
      </div>
    </div>
  );
}
