const exp = require('constants');
const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool

const fs = require('fs');
const fsextra= require('fs-extra')
const fsPath = require('path')
  

exports.getProduto = (req,res, next)=>{
    mysql.getConnection((error,conn)=>{
        if(error){return res.status(500).send({error:error})}
            conn.query(
                'SELECT * FROM produtos',
                    (error,resultado,fields)=>{
                        if(error){return res.status(500).send({error:error})}

                        const response={
                            Quantidade: resultado.length,
                            Produto: resultado.map(prod=>{
                                return{
                                    IdProduto: prod.idProduto,
                                    Produto: prod.NomeProduto,
                                    Preco: prod.Valor,
                                    Item: prod.Tipo,
                                    Produtor: prod.ProdutorNome,
                                    idProdutor: prod.idProdutor,
                                    Descricao: prod.DescricaoProd,
                                    Pontuacao: prod.PontuacaoProd,
                                    Imagem: prod.ImagemNome,
                                    ImagemURL: prod.ImagemURL
                                }
                            })
                        }
                        return res.status(200).send({response})
                    }
            

            )

    })  
} 
 
exports.postProduto = (req,res,next)=>{
    fs.mkdir(fsPath.join('../BE - Trabalho Facul/Image/',`${req.body.NomeProduto}`),(erro)=>{
        if(erro){
            return console.log("erro:", erro)
        }
    
        console.log("Pasta criada com sucesso")
    })

    mysql.getConnection((error,conn)=>{
        if(error){return res.status(500).send({error:error})}    
            conn.query(
                "INSERT INTO produtos (NomeProduto,Valor,Tipo,ProdutorNome,idProdutor,DescricaoProd,PontuacaoProd,ImagemNome,ImagemURL) VALUES (?,?,?,?,?,?,?,?,?)",
                [
                    req.body.NomeProduto,
                    req.body.Valor,
                    req.body.Tipo,
                    req.body.ProdutorNome,
                    req.body.idProdutor,
                    req.body.DescricaoProd,
                    req.body.PontuacaoProd,
                    req.body.ImagemNome,
                    req.file.path
                ],  
                (error,resultado,fields)=>{
                    conn.release();
    
                    if(error){return res.status(500).send({error:error})}
    
                    return res.status(201).send({
                        message: "Produto inserida com sucesso",
                        id_Produto: resultado.insertId,
                    })
    
                }
            )
    })

}

exports.patchProdutos = (req,res,next)=>{
    mysql.getConnection((error,conn)=>{
        if(error){return res.status(500).send({error:error})}

        conn.query(
            "UPDATE produtos SET NomeProduto=?,Valor=? ,Tipo=? ,ProdutorNome=?, idProdutor=? ,DescricaoProd=? ,PontuacaoProd=? ,ImagemNome=? ,ImagemURL=? WHERE idProduto=?",
            [
                    req.body.NomeProduto,
                    req.body.Valor,
                    req.body.Tipo,
                    req.body.ProdutorNome,
                    req.body.idProdutor,
                    req.body.DescricaoProd,
                    req.body.PontuacaoProd,
                    req.body.ImagemNome,
                    req.file.path,
                    req.body.idProduto
            ],
            (error, resultado,fields)=>{
                conn.release();
                if(error){return res.status(500).send({error:error})} 

                return res.status(202).send({
                    mensagem: "Produto atualizado com Sucesso"
                })
            }
        )

    })


}

exports.deleteProduto= (req,res,next)=>{
    mysql.getConnection((error,conn)=>{
        if(error){return res.status(500).send({error:error})} 
        conn.query(
            "SELECT * FROM produtos WHERE idProduto=?",
                [req.body.idProduto],
                
                (error,resultado,fields)=>{
                    if(error){return res.status(500).send({error:error})} 
                    const response={
                        Quantidade: resultado.length,
                        Produto: resultado.map(prod=>{
                            return{
                                IdProduto: prod.idProduto,
                                NomeProduto: prod.NomeProduto
                                
                            }
                        }),
                      
                    }  
                    const pastName = response.Produto[0].NomeProduto
                   
                    const pastPatch = `../BE - Trabalho Facul/Image/${pastName}/`
                    
                        if (fsextra.existsSync(pastPatch)) {
                            fsextra.remove(pastPatch,err=>{
                                console.error(err) 
                            }, 

                                conn.query(
                                    "DELETE FROM produtos WHERE idProduto=?",
                                    [req.body.idProduto],
                                    (error,resultado,fields)=>{
                                        conn.release();
                                        if(error){return res.status(500).send({error:error})} 

                                        if(resultado.length==0){
                                            return res.status(404).send({
                                                mensage: "Não foi encontrado o ID"
                                            })
                                        }

                                        return res.status(202).send({
                                            mensagem: 'Peça removido com sucesso'
                                        })

                                    }
                                ),

                            )
                        }else{
                            conn.release();
                            return res.status(404).send({
                                message: "Diretorio dos arquivos não encontrados"
                            });
                        }
                    }
        )

    })
}