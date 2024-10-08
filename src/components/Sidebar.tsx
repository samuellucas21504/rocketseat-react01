import { PencilLine } from '@phosphor-icons/react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src='https://images.unsplash.com/photo-1693341052623-c70686d937a4?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8' />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/64492946?v=4" />

                <strong>Samuel Lucas</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}