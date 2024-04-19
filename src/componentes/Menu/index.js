import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
    return(
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.link} to='/'>Início</Link>
                <Link className='link' to = '/sobremim'>Sobre Mim</Link> {/*A tag Link me permite renderizar a página sem recarregar*/}
                {/*a tag Link não usa href e sim to*/}
            </nav>
        </header>
        
    )
}

export default Menu;