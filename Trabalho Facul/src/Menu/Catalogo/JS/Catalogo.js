import { useEffect, useState } from "react"
import styles from '../module/Catalogo.module.css'
import logo from '../../../Image/Logo_Ecomarket.png'
import {AiOutlineMenu} from 'react-icons/ai'
import Itens from "./Itens"
import { Link } from "react-router-dom"
import MenuLateral from "../../Components/MenuLateral"


function Catalogo(){

    const [urlGet, setUrlGet] = useState('http://localhost:8080/produtos')
   const [data , setData] = useState([])
   const [Quant, setQuant] = useState();
   const [menuNome, setMenuNome] = useState('Catalogo Produto')

   useEffect(()=>{
    
        fetch(urlGet)
        .then((resp)=>resp.json())
            
        .then((ResponseJson)=>{
            setData(ResponseJson.response.Produto)
            setQuant(ResponseJson.response.Quantidade)
            console.log(ResponseJson.response)
        })
        .catch((err)=> console.log(err));

   },[])

    return(
        <>
            <div className={styles.ContainerMaster}>
                
                <MenuLateral NomeMenu={menuNome}/>
               

               

                <div className={styles.ContainerTela}>

                    {data.map((dados)=>(
                    
                        <Itens Valor={dados.Preco} Item={dados.Item} Produtor={dados.Produto}
                            Imagem={dados.ImagemURL}
                        />
                        
                    ))}
                    
                </div>
                    <div className={styles.ContainerCadastroPrd}>
                        
                            <Link to="/cadastroproduto" className={styles.ButtonComponent}>Cadastrar Produto</Link>
                            
                    </div>
            </div>
            
        </>

    )

}

export default Catalogo