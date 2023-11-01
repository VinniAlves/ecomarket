import styles from "../module/Login.module.css"
import fundoImg from '../../Image/imagem_Fundo.png'

import {AiOutlineUser} from  'react-icons/ai'
import { IconContext } from 'react-icons';
import {MdEmail} from 'react-icons/md'
import {AiFillLock} from 'react-icons/ai'
import { Link } from "react-router-dom";

function Login(){
    return(
        <>
        <div className={styles.Container}>
                <div className={styles.ContainerLeft}>
                        <div className={styles.ContainerRegistro}>
                            <p>Não tem uma conta crie uma agora mesmo gratuitamente</p>
                            <Link to='/registro'>Cadastrar</Link>
                        </div>
                </div>
                <div className={styles.ContainerRight}>
                    <div className={styles.ContainerMenu}>
                        <h1>Entre com sua conta</h1>
                        <MdEmail className={styles.IconEmail}/>
                        <input placeholder="E-mail" ></input>
                        <AiFillLock className={styles.IconLock}/>
                        <input placeholder="Senha"></input>
                        <button className={styles.ButtonContainer}> Entrar</button>
                    </div>
                </div>
           </div>
        </>
    )

}

export default Login