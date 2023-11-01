import { useState } from 'react'
import styles from '../module/ItensEdt.module.css'
import Editar from './Editar';



function ItensEdt({Imagem,NomeProd,ValorProd, idprod}){

    const [urlApi, setUrlApi]= useState('http://localhost:8080/produtos')
    const [IDProduto , setIDProduto] = useState('');
    const [DataUrl , setDataUrl] = useState([])

    const [Open,setOpen] = useState(false)

    const excluir = () => {
        
        const requestOption = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ idProduto: idprod}), // Enviar o ID no corpo
        };
    
        fetch(`${urlApi}`, requestOption)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Erro ao tentar excluir Produto');
            }
            return response.json();
          })
          .then((data) => {
            setDataUrl(data);
            window.location.reload()
          })
          .catch((error) => {
            console.error(error);
          });
        
      }

      const OpenClose=()=>{
        setOpen(!Open);

      }

    return(
        <>
            <div className={styles.Container}>
                <div className={styles.ContainerImg}>
                    <img src={`http://localhost:8080/${Imagem}`}></img>
                </div>
                
                <div className={styles.ContainerText}>
                    <p>Nome Produto: {NomeProd}</p>
                    <p>Valor Produto: R$: {ValorProd}</p>
                </div>

                <div className={styles.ContainerButton}>
                    <button onClick={OpenClose} className={styles.ButtonEdit}>Editar Produto</button>
                    <button onClick={excluir} className={styles.ButtonDelet}>Excluir Produto</button>
                </div>

                {Open ? <Editar RecebID={idprod} onClose={OpenClose}/> : <></>}

            </div>

        </>
    )

}

export default ItensEdt