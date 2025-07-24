import React from "react";
import "../css/ModalWindow.css";
import type { TimelineItem } from "../types";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: TimelineItem | null;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // モーダル外（オーバーレイ）をクリックしたら閉じる
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-window">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-content">
          <h2>{project.title}</h2>
          <p><strong>カテゴリ:</strong> {project.category}</p>
          <p><strong>期間:</strong> {project.start} ～ {project.end}</p>
          <p><strong>詳細:</strong> {project.description}</p>
          <p><strong>技術:</strong> {project.techStack?.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};
