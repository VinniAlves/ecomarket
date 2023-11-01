import styles from '../module/Itens.module.css'
import img  from '../../../Image/batata.jpeg'
function Itens({Imagem,Valor,Item,Produtor,Avaliacao}){
    return(
        <>
            <div className={styles.Container}>
                <div className={styles.ContainerImagem}>
                     <img src={`http://localhost:8080/${Imagem}`}></img> 
                </div>
                <div className={styles.ContainerDesc}>

                    <div className={styles.ContainerValor}>
                        <p>Valor:</p>
                        <div className={styles.ContainerVl}>
                            <p className={styles.ContainerPVL}>R$ {Valor}</p>
                        </div>
                    </div>

                    <div className={styles.ContainerItem}>
                        <p>Item:</p>
                        <div className={styles.ContainerItm}>
                            <p className={styles.ContainerPItm}>{Item}</p>
                        </div>
                    </div>

                    <div className={styles.ContainerProdutor}>
                        <p>Produtor:</p>
                        <div className={styles.ContainerPrd}>
                            <p className={styles.ContainerPPrd}>{Produtor}</p>
                        </div>
                    </div>
                    <div className={styles.ContainerValiacao}>

                    </div>
                </div>
            </div>

        </>

    )

}

export default Itens