import styles from '../Components/module/MenuLateral.module.css'
import {AiOutlineMenu} from 'react-icons/ai'
import logo from '../../Image/Logo_Ecomarket.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function MenuLateral({NomeMenu}){

const [open, setOpen]= useState(false)


const MenuOpen=()=>{

    if(open){
        setOpen(false)
    }else{
        setOpen(true);
    }

}


    return(
        <>
                <div className={styles.ContainerHeader}>
                    <div className={styles.ContainerImgLogo}>
                        <img src={logo}></img>
                    </div>
                    <div  onClick={MenuOpen} className={styles.ContainerHeaderIcon} ><AiOutlineMenu/></div>

                    {open ? 
                    
                    <div className={styles.ContainerMenuOpen}>
                        <div className={styles.ContainerContOpen}>
                            <Link to='/catalogo'>
                                <div className={styles.hover}>
                                    <p>Catalogo Produtos</p>
                                </div>
                            </Link>
                            <div className={styles.hover}>
                                <p>Menu Usuário</p>
                            </div>
                            <Link to='/editarproduto'>
                                <div className={styles.hover}>
                                    <p>Editar Produto</p>
                                </div>
                            </Link>
                            
                        </div>
                    </div>
                     : <></>}
                </div>

                <div className={styles.ContainerHeaderMenu}>
                    <p>{NomeMenu}</p>
                </div>
        </>
    )

}

export default MenuLateral