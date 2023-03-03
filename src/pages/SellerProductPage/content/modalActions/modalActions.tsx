import React from "react";
import classes from "./modalActions.module.scss";
import { Button } from "@mui/material";
import { Modal } from "shared/ui/Modal/Modal";

interface ModalProps {
  isOpened: boolean;
  onClose: () => void;
}

interface ChildrenModal {
  baseText: string;
  firstButtonName: string;
  onClose: () => void;
}

const ChildrenModal: React.FC<ChildrenModal> = ({ baseText, onClose, firstButtonName }) => (
  <div className={classes.modalBlock}>
    <p className={classes.text}>{baseText}</p>
    <div className={classes.buttonBlock}>
      <Button type="button" size="large" variant="contained">
        {firstButtonName}
      </Button>
      <Button type="button" size="large" variant="outlined" onClick={onClose}>
        Отмена
      </Button>
    </div>
  </div>
);

export const ModalPutUpSale: React.FC<ModalProps> = ({ isOpened, onClose }) => {
  const title = "Выставить на продажу";
  const firstButtonName = "Выставить на продажи";
  const baseText = "Вы точно хотите выставить на продажу товар(ы)?";
  return (
    <Modal isOpened={isOpened} onClose={onClose} title={title}>
      <ChildrenModal baseText={baseText} onClose={onClose} firstButtonName={firstButtonName} />
    </Modal>
  );
};

export const ModalStopSale: React.FC<ModalProps> = ({ isOpened, onClose }) => {
  const title = "Снять с продажи";
  const firstButtonName = "Снять с продажи";
  const baseText = "Вы точно хотите снять с продажи товар(ы)?";
  return (
    <Modal isOpened={isOpened} onClose={onClose} title={title}>
      <ChildrenModal baseText={baseText} onClose={onClose} firstButtonName={firstButtonName} />
    </Modal>
  );
};

export const ModalDeleteProducts: React.FC<ModalProps> = ({ isOpened, onClose }) => {
  const title = "Удалить выделенные";
  const firstButtonName = "Переместить";
  const baseText = "Вы точно хотите переместить группу товаров в архив?";
  return (
    <Modal isOpened={isOpened} onClose={onClose} title={title}>
      <ChildrenModal baseText={baseText} onClose={onClose} firstButtonName={firstButtonName} />
    </Modal>
  );
};

export const ModalDeleteOneProduct: React.FC<ModalProps> = ({ isOpened, onClose }) => {
  const title = "Удаление товара";
  const firstButtonName = "Переместить";
  const baseText = "Вы точно хотите переместить товар в архив?";
  return (
    <Modal isOpened={isOpened} onClose={onClose} title={title}>
      <ChildrenModal baseText={baseText} onClose={onClose} firstButtonName={firstButtonName} />
    </Modal>
  );
};
