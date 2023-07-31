import express from "express";
import db from "./config/dbconect.js";
import routes from "./routes/index.js";
import manipuladordeErros from "./middlewares/manipuladordeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () =>{
  console.log("conexao com o banco feita com sucesso");
});

const app = express();

app.use(express.json());
routes(app);

app.use(manipulador404);
app.use(manipuladordeErros);


export default app;
 
 

// //const livros = [
//     {id:1, "titulo": "Senhor dos Anéis"},
//     {id:2, "titulo":"O hobbit"}
// ]

  


// app.get('/livros', (req,res) =>{
//     livros.find((err, livros) =>{
//         res.status(200).json(livros)
//     })
   
// })

// app.get('/livros/:id', (req,res) =>{
//     let index = buscaLivros(req.params.id);
//     res.json(livros[index]);
// })



// app.put('/livros/:id', (req,res) =>{
//     let index = buscaLivros(req.params.id);
//     livros[index].titulo = req.body.titulo;
//     res.json(livros);
// })

// app.delete('/livros/:id', (req,res) =>{
//     let {id} = req.params;
//     let index = buscaLivros(id);
//     livros.splice(index, 1)
//     res.send(`Livro ${id} removido com sucesso`);
// })



