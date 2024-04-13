import styles from "./style.module.css";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className={styles.header}>
           <Link to="/" className={styles.link}><h4>Adventure Trails</h4></Link>
            <nav className={styles.nav}>
                <Link to="/lista-trilhas" className={styles.link}>Explorar trilhas</Link>
                <Link to="/cadastro-trilha" className={styles.link}>Cadastrar trilhas</Link>

            </nav>
        </header>
    )
}

export default Header;
