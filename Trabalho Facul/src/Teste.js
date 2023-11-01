import React, { useState, useRef } from 'react';

function ProductUploadComponent() {
  const [response, setResponse] = useState(null);
  const [NomeProduto, setNomeProduto] = useState('');
  const [Valor, setValor] = useState('');
  const [Tipo, setTipo] = useState('');
  const [ProdutorNome, setProdutorNome] = useState('');
  const [DescricaoProd, setDescricaoProd] = useState('');
  const [PontuacaoProd, setPontuacaoProd] = useState('');
  const [ImagemNome, setImagemNome] = useState('');
  const [produtoImagem, setProdutoImagem] = useState(null);

  const fileInputRef = useRef();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setProdutoImagem(selectedFile);
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

    fetch('http://localhost:8080/produtos', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.text();
      })
      .then((data) => {
        setResponse(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Produto"
          value={NomeProduto}
          onChange={(e) => setNomeProduto(e.target.value)}
        />
        <input
          type="text"
          placeholder="Valor"
          value={Valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tipo"
          value={Tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nome do Produtor"
          value={ProdutorNome}
          onChange={(e) => setProdutorNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição do Produto"
          value={DescricaoProd}
          onChange={(e) => setDescricaoProd(e.target.value)}
        />
        <input
          type="text"
          placeholder="Pontuação do Produto"
          value={PontuacaoProd}
          onChange={(e) => setPontuacaoProd(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nome da Imagem"
          value={ImagemNome}
          onChange={(e) => setImagemNome(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <button type="button" onClick={handleButtonClick}>
          Selecione a Imagem
        </button>
        <button type="submit">Enviar Produto</button>
      </form>
      {response && <div>Resposta da API: {response}</div>}
    </div>
  );
}

export default ProductUploadComponent;
