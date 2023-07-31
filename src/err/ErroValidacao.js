import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta{
  constructor(erro){
    const mensagensErro = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");
      
    super(`Os seguintes erros foram captados: ${mensagensErro}`);
  }
}

export default ErroValidacao;