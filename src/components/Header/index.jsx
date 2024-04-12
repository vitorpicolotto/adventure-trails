import styles from "./style.module.css";

function Header(){
    return(
        <header className={styles.header}>
            <h4>Adventure Trails</h4>
            <nav className={styles.nav}>
                <a href="#" className={styles.link}>Explorar trilhas</a>
                <a href="#" className={styles.link}>Cadastrar trilhas</a>

            </nav>
        </header>
    )
}

export default Header;
