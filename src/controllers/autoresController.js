//import mongoose from "mongoose";
import NaoEncontrado from "../err/naoencontrado.js";
import autores from "../models/Autor.js";


class AutoresController{

  static listarAutores= async (req,res,next) => {
    try{
      const autoresResultado = await autores.find();
      res.status(200).json(autoresResultado);

    }catch(erro){
      next(erro);
    }

   
  };

  static listarAutoresPorId = async (req,res,next) =>{
  
    try{
      const id = req.params.id;
      const autoresResultado =  await autores.findById(id);
      if(autoresResultado !== null){
        res.status(200).send(autoresResultado);
      }else{
        next(new NaoEncontrado({message:" Id do autor não encontrado"}));
      }
      
    }catch (erro){
      next(erro);

    }
  

  };
  static cadastrarAutor =  async (req, res, next) =>{
  
    try {
      let autor = new autores(req.body);

      const autorResultado = await autor.save();

      if (autorResultado !== null) {
        res.status(201).send({message: "Autor enviado com sucesso"});
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }
    }catch(erro){
      next(erro);
    }
   
  };

  static atualizarAutor = async (req,res,next) =>{

    try{
      const id = req.params.id;
      const autorResultado = await autores.findByIdAndUpdate(id, {$set: req.body});

      if (autorResultado !== null) {
        res.status(200).send({message: "Autor atualizado com sucesso"});
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }
    }catch(erro){
      next(erro);
    }
    
  };

  static excluirAutor = async (req,res,next) =>{
    try {
      const id = req.params.id;

      const autorResultado = await autores.findByIdAndDelete(id);

      if (autorResultado !== null) {
        res.status(200).send({message: "Autor removido com sucesso"});
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }
    }catch (erro) {
      next(erro);
    }
  };
}


export default AutoresController;