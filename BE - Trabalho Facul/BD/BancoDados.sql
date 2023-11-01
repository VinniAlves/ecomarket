create database bd_facul;

create table produtos(
idProduto INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
NomeProduto varchar(150),
Valor varchar(10),
Tipo varchar(40),
ProdutorNome varchar(80),
idProdutor integer,
DescricaoProd varchar(400),
PontuacaoProd integer,
ImagemNome varchar(150),
ImagemURL varchar(2000)
);



INSERT INTO produtos (NomeProduto,Valor,Tipo,ProdutorNome,DescricaoProd,PontuacaoProd,ImagemNome,ImagemURL) VALUES ('Batata 15kg','23,23','Batata em saco','Rogerio Almeida','Batatas Fresquinhas e gostaas','4.3','Batata.png','../Batatas.png')