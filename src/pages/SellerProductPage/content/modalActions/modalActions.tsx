import React from "react";
import classes from "./modalActions.module.scss";
import { Button} from "@mui/material";
import { Modal } from "shared/ui/Modal/Modal";
import { useLocation, useNavigate } from "react-router-dom";
import InputDropdownMenu from "shared/ui/InputDropdownMenu/InputDropdownMenu";

interface ModalProps {
  isOpened: boolean;
}

interface ChildrenModal {
  baseText: string;
  firstButtonName: string;
}

const ChildrenModal: React.FC<ChildrenModal> = ({ baseText, firstButtonName }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateBack = () => {
    navigate(location.pathname);
  };
  return (
    <div className={classes.modalBlock}>
      <p className={classes.text}>{baseText}</p>
      <div className={classes.buttonBlock}>
        <Button type="button" size="large" variant="contained">
          {firstButtonName}
        </Button>
        <Button type="button" size="large" variant="outlined" onClick={navigateBack}>
          Отмена
        </Button>
      </div>
    </div>
  );
};

export const ModalPutUpSale: React.FC<ModalProps> = ({ isOpened }) => {
  const title = "Выставить на продажу";
  const firstButtonName = "Выставить на продажи";
  const baseText = "Вы точно хотите выставить на продажу товар(ы)?";
  return (
    <Modal isOpened={isOpened} title={title}>
      <ChildrenModal baseText={baseText} firstButtonName={firstButtonName} />
    </Modal>
  );
};

export const ModalStopSale: React.FC<ModalProps> = ({ isOpened }) => {
  const title = "Снять с продажи";
  const firstButtonName = "Снять с продажи";
  const baseText = "Вы точно хотите снять с продажи товар(ы)?";
  return (
    <Modal isOpened={isOpened} title={title}>
      <ChildrenModal baseText={baseText} firstButtonName={firstButtonName} />
    </Modal>
  );
};

export const ModalDeleteProducts: React.FC<ModalProps> = ({ isOpened }) => {
  const title = "Удалить выделенные";
  const firstButtonName = "Переместить";
  const baseText = "Вы точно хотите переместить группу товаров в архив?";
  return (
    <Modal isOpened={isOpened} title={title}>
      <ChildrenModal baseText={baseText} firstButtonName={firstButtonName} />
    </Modal>
  );
};

export const ModalDeleteOneProduct: React.FC<ModalProps> = ({ isOpened }) => {
  const title = "Удаление товара";
  const firstButtonName = "Переместить";
  const baseText = "Вы точно хотите переместить товар в архив?";
  return (
    <Modal isOpened={isOpened} title={title}>
      <ChildrenModal baseText={baseText} firstButtonName={firstButtonName} />
    </Modal>
  );
};

export const ModalCreateNewProductSeller: React.FC<ModalProps> = ({ isOpened }) => {
  const title = "Создание нового товара";
  return (
    <Modal isOpened={isOpened} title={title}>
      <div>
        <InputDropdownMenu/>
      </div>
    </Modal>
  );
};
