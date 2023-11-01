const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs')
const path = require('path')

const ProdutoController = require('../Controllers/produto-controller')


const storegePost = multer.diskStorage({
    destination:function(req,file,cb){
        const ArquiveName =req.body.NomeProduto;
        const destination = `Image/${ArquiveName}/`;

        fs.mkdir(destination, (err)=>{
            if(err&& err.code !== 'EEXIST'){
                return cb(err);
            }
            cb(null,destination);
        }) 
    },

    filename: function(req,file,cb){
        //new Date() para informar uma data junto com o nome
        let data = new Date().toISOString().replace(/:/g, '-') + '-'
        cb(null, data + file.originalname);
    }

})

const fileFilter = (req,file,cb)=>{
    //so aceitar um tipo de arquivo
    if(file.mimetype === 'image/jpeg'|| file.mimetype ==='image/png'){
        cb(null,true);
    }else{
        cb(null,false);
    }
    
   
}

const storagePatch = multer.diskStorage({

    destination:function(req,file,cb){
        const ArquiveName =req.body.NomeProduto;
        const destination = `Image/${ArquiveName}/`;
    
      
            fs.readdir(destination,(err,files)=>{
                if(err){
                    console.log("Erro ao listar todos os arquivos na pasta",err);
                    return;
                }
                    files.forEach((file)=>{
    
                        const filePath = path.join(destination,file);
    
                        fs.unlink(filePath,(err)=>{
                            if(err){
                                console.error("Error ao excluir o arquivo", err);
    
                            }else{
                                console.log("Arquivo excluido");
                            }
                        })
                    })   
            })
        
    
    
        fs.mkdir(destination, (err)=>{
            if(err&& err.code !== 'EEXIST'){
                return cb(err);
            }
            cb(null,destination);
        })
    
    
    },
    
        filename: function(req,file,cb){
            //new Date() para informar uma data junto com o nome
            let data = new Date().toISOString().replace(/:/g, '-') + '-'
            cb(null, data + file.originalname);
        }
    })


const uploadPost = multer({
    storage: storegePost,
    limits:{
        //Declara em bits
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})

const uploadPatch = multer({
    storage: storagePatch,
    limits:{
        //Declara em bits
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})


router.post('/',uploadPost.single('produtoImagem'),ProdutoController.postProduto)

router.get('/',ProdutoController.getProduto);

router.patch('/',uploadPatch.single('produtoImagem'),ProdutoController.patchProdutos)

router.delete('/',ProdutoController.deleteProduto)

module.exports = router;