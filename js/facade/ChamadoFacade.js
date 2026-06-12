import { Chamado } from "../models/Chamado.js";

export class ChamadoFacade {
  constructor() {
    this.chamados = [];
    this.proximoId = 1;
  }

  abrirChamado(titulo, descricao, prioridade) {
    if (!titulo || !descricao) {
      throw new Error(
        "Título e descrição são obrigatórios."
      );
    }

    const chamado = new Chamado(
      this.proximoId++,
      titulo,
      descricao,
      prioridade
    );

    this.chamados.push(chamado);

    return chamado;
  }

  listarChamados() {
    return this.chamados;
  }

  buscarChamado(id) {
    return this.chamados.find(
      chamado => chamado.id === id
    );
  }

  avancarStatus(id) {
    const chamado = this.buscarChamado(id);

    if (!chamado) {
      throw new Error(
        "Chamado não encontrado."
      );
    }

    chamado.avancarEstado();
  }

  adicionarHistorico(id, mensagem) {
    const chamado = this.buscarChamado(id);

    if (!chamado) {
      throw new Error(
        "Chamado não encontrado."
      );
    }

    chamado.adicionarHistorico(mensagem);
  }
}