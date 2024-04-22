import PostModelo from "../../componentes/PostModelo"
import fotoCapa from "../../assets/sobre_mim_capa.png"

const SobreMim = () =>{
    return (
        <PostModelo titulo={"Sobre mim"} fotoCapa={fotoCapa}>
            Conteúdo...
        </PostModelo>
    )
}

export default SobreMim