import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1670057037226-b3d65909424f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <div className={styles.profile}>
        <Avatar
          hasBorder
          src="https://avatars.githubusercontent.com/u/49591462?v=4"
        />

        <strong>Alves Bug</strong>
        <span>Desenvolvedor Frontend</span>
      </div>
      <footer>
        <a>
          <PencilLine style={{ marginRight: "0.5rem" }} size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
