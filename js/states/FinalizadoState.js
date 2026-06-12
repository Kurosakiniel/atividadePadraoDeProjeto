export class FinalizadoState {
  getNome() {
    return "Finalizado";
  }

  avancar(chamado) {
    chamado.adicionarHistorico(
      "O chamado já está finalizado."
    );

    alert("Este chamado já foi finalizado.");
  }
}