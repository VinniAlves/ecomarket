import styles from '../module/ModalExcluir.module.css'
import { useState, useEffect } from 'react'

function ModalExcluir({idp}){


    const [urlApi, setUrlApi]= useState('http://localhost:8080/produtos')
    const [IDProduto , setIDProduto] = useState('');
    const [DataUrl , setDataUrl] = useState([])

    const excluir = () => {
        

        const requestOption = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ idProduto: idp}), // Enviar o ID no corpo
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




    return(
        <>
            <div className={styles.Container}>
                <div className={styles.ContainerBackground}>
                    
                </div>
            </div>
        
        </>
    )

}


export default ModalExcluir