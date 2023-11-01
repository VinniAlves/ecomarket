import styles from "../module/registrar.module.css"
import fundoImg from '../../Image/imagem_Fundo.png'

import {AiOutlineUser} from  'react-icons/ai'
import { IconContext } from 'react-icons';
import {MdEmail} from 'react-icons/md'
import {AiFillLock} from 'react-icons/ai'


function Registrar(){

    return(
        <>
           <div className={styles.Container}>
                <div className={styles.ContainerLeft}>
                    <div className={styles.BackgroundLeft}>
                    </div>
                </div>
                <div className={styles.ContainerRight}>
                    <div className={styles.ContainerMenu}>
                        <h1>Crie sua conta</h1>
                   
                        <AiOutlineUser className={styles.IconUser}/>
                        <input placeholder="Nome"  ></input>
                        <MdEmail className={styles.IconEmail}/>
                        <input placeholder="E-mail" ></input>
                        <AiFillLock className={styles.IconLock}/>
                        <input placeholder="Senha"></input>
                        <button className={styles.ButtonContainer}> Registrar-se</button>
                    </div>
                </div>
           </div>
        </>
    )

}

export default Registrar