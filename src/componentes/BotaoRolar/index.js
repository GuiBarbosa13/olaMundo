import Botao from '../Botao';
import styles from './BotaoRolar.module.css'

export default function BotaoRolar(){
    const subir = (() => {
        window.scrollTo(0, 0);
      });
      
    return(
        <div className={styles.rolarContainer} onClick={subir}>
            <Botao>Subir</Botao>
        </div>
    )
}