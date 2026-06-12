import { ConfirmandoAtendimentoState } from "./ConfirmandoAtendimento.js";

export class AbertoState {
  getNome() {
    return "Aberto";
  }

  avancar(chamado) {
    chamado.setEstado(
      new ConfirmandoAtendimentoState()
    );

    chamado.adicionarHistorico(
      "Status alterado para Confirmando Atendimento"
    );
  }
}