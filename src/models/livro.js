import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id:{type: String},
    titulo:{
      type: String, 
      required: [true,"O nome do livro precisa ser preenchido (obrigatório)"]},
    autor:{
      type: mongoose.Schema.Types.ObjectId, 
      ref:"autores", 
      required: [true,"O nome do autor precisa ser preenchido (obrigatório)"]},
    editora:{
      type: String, 
      required: [true,"O nome da editora precisa ser preenchido (obrigatório)"]},
    numeroPaginas:{type: Number}

  }
);

const livros = mongoose.model("livros", livroSchema);

export default livros;