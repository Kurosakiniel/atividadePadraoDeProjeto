import { AbertoState } from "../states/AbertoState.js";

export class Chamado {
  constructor(id, titulo, descricao, prioridade) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.prioridade = prioridade;

    this.historico = [];

    this.estado = new AbertoState();

    this.adicionarHistorico(
      `Chamado criado com status ${this.estado.getNome()}`
    );
  }

  setEstado(novoEstado) {
    this.estado = novoEstado;
  }

  avancarEstado() {
    this.estado.avancar(this);
  }

  getStatus() {
    return this.estado.getNome();
  }

  adicionarHistorico(mensagem) {
    this.historico.push({
      data: new Date().toLocaleString(),
      mensagem
    });
  }
}