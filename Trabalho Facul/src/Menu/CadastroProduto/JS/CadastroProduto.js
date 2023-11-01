import styles from '../module/CadastroProduto.module.css'
import {AiOutlineMenu,AiOutlineCloseSquare} from 'react-icons/ai'
import logo from '../../../Image/Logo_Ecomarket.png'
import { useState, useRef } from 'react';
import {BiImages} from 'react-icons/bi'
import MenuLateral from '../../Components/MenuLateral';


function CadastroProduto(){

    const [response, setResponse] = useState(null);
    const [NomeProduto, setNomeProduto] = useState('');
    const [Valor, setValor] = useState('');
    const [Tipo, setTipo] = useState('');
    const [ProdutorNome, setProdutorNome] = useState('null');
    const [DescricaoProd, setDescricaoProd] = useState('');
    const [PontuacaoProd, setPontuacaoProd] = useState(0);
    const [ImagemNome, setImagemNome] = useState('');
    const [produtoImagem, setProdutoImagem] = useState(null);
    const [menuNome , setMenuNome] = useState('Adicionar Produto')
    const [idProdutor , setIDProdutor] = useState(1);
    
    const fileInputRef = useRef();

   
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setProdutoImagem(selectedFile);
    
        // Extrai o nome do arquivo da imagem
        if (selectedFile) {
          setImagemNome(selectedFile.name);
        }
      };
    
      
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const formData = new FormData();
      formData.append('NomeProduto', NomeProduto);
      formData.append('Valor', Valor);
      formData.append('Tipo', Tipo);
      formData.append('ProdutorNome', ProdutorNome);
      formData.append('DescricaoProd', DescricaoProd);
      formData.append('PontuacaoProd', PontuacaoProd);
      formData.append('ImagemNome', ImagemNome);
      formData.append('produtoImagem', produtoImagem);
      formData.append('idProdutor',idProdutor);
  
      fetch('http://localhost:8080/produtos', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erro na requisição');
          }
          return response.text(),
          console.log(response.text)
        })
        .then((data) => {
          setResponse(data);
          console.log(data)
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
      };

      const handleImageRemove = () => {
        setProdutoImagem(null);
        setImagemNome('');
      };

    return(
        <>
            <div className={styles.ContainerMaster}>
               <MenuLateral NomeMenu={menuNome}/>

                <div className={styles.ContainerTela}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.ContainerAddImagem}>
                            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
                    
                            {produtoImagem ? (
                                <div className={styles.ContainerRemoveImagemBackground}>
                                    <div className={styles.ContainerButtonRemove}>
                                    <button type="button" onClick={handleImageRemove} className={styles.ContainerRemoveImagem}>
                                    <AiOutlineCloseSquare/>
                                    </button>
                                    </div>
                                    <img
                                        src={URL.createObjectURL(produtoImagem)}
                                        alt="Imagem do Produto"
                                        className={styles.ImagemProduto}
                                    />
                                    
                                </div>
                            ) : (
                                <button type="button" onClick={handleButtonClick} className={styles.ContainerAddImagemBackground}>
                                    <BiImages />
                                    <p>Pressione aqui para adicionar uma imagem...</p>
                                </button>
                            )}
                        </div>

                        <div className={styles.ContainerAddText}>

                            <div className={styles.ContainerNamePrd}>
                                <p>Nome do produto: </p>
                                <input type='text' value={NomeProduto} onChange={(e)=> setNomeProduto(e.target.value)}></input>
                            </div>

                            <div className={styles.ContainerValorPrd}>
                                <p>Valor do produto: </p>
                                <input type='text' value={Valor} onChange={(e)=> setValor(e.target.value)}></input>
                            </div>

                            <div className={styles.ContainerItemPrd}>
                                <p>Item Produto: </p>
                                <input type='text' value={Tipo} onChange={(e)=> setTipo(e.target.value)}></input>
                            </div>

                            <div className={styles.ContainerDescPrd}>
                                <p>Descricao produto: </p>
                                <input type='text' value={DescricaoProd} onChange={(e)=> setDescricaoProd(e.target.value)}></input>
                            </div>
                                
                        </div>
                            <div className={styles.ContainerSubmit}>
                                <button type="submit">Publicar Produto</button>
                            </div>
                            
                            
                    </form>
                    
                </div>
                   
            </div>
            
        </>
    )
}

export default CadastroProduto

