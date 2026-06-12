import { FinalizadoState } from "./FinalizadoState.js";

export class EmAtendimentoState {
  getNome() {
    return "Em Atendimento";
  }

  avancar(chamado) {
    chamado.setEstado(new FinalizadoState());

    chamado.adicionarHistorico(
      "Status alterado para Finalizado"
    );
  }
}