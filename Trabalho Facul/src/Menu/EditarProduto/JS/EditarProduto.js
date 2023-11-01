import MenuLateral from "../../Components/MenuLateral"
import styles from '../module/EditarProduto.module.css'
import ItensEdt from "./ItensEdt"
import { useState, useEffect } from 'react'
function EditarProduto(){

    const [urlGet, setUrlGet] = useState('http://localhost:8080/produtos')
    const [data , setData] = useState([])
    const [UsuarioId, setUsuarioId] = useState(1);

    useEffect(()=>{
    
        fetch(urlGet)
        .then((resp)=>resp.json())
            
        .then((ResponseJson)=>{
            setData(ResponseJson.response.Produto)
            console.log(ResponseJson.response.Produto)
        })
        .catch((err)=> console.log(err));

   },[])

    return(
    <>
        <MenuLateral NomeMenu={"Editar Produto"}/>

        <div className={styles.ContainerTela}>

            {  
              data.filter(dados => dados.idProdutor == UsuarioId).map((dados)=>
              (
                <>
                    <ItensEdt NomeProd={dados.Produto} Imagem={dados.ImagemURL} ValorProd={dados.Preco} idprod={dados.IdProduto}/>
                </>

              )
                
              )

        }
            
        </div>
    </>
    )

}

export default EditarProduto