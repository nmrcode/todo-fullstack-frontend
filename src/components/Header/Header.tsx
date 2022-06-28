import { FC } from "react";
import s from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>Fullstack Todo</div>
      </div>
    </header>
  );
};

export default Header;
