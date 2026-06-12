import { EmAtendimentoState } from "./EmAtendimentoState.js";

export class ConfirmandoAtendimentoState {
  getNome() {
    return "Confirmando Atendimento";
  }

  avancar(chamado) {
    chamado.setEstado(
      new EmAtendimentoState()
    );

    chamado.adicionarHistorico(
      "Status alterado para Em Atendimento"
    );
  }
}