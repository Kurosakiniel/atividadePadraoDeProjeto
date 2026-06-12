import { ChamadoFacade } from "./facade/ChamadoFacade.js";

const facade = new ChamadoFacade();

const btnAbrir = document.getElementById("btnAbrir");

const tituloInput = document.getElementById("titulo");
const descricaoInput = document.getElementById("descricao");
const prioridadeInput = document.getElementById("prioridade");

const listaChamados = document.getElementById("listaChamados");
const historicoContainer = document.getElementById("historico");

btnAbrir.addEventListener("click", () => {
  const titulo = tituloInput.value.trim();
  const descricao = descricaoInput.value.trim();
  const prioridade = prioridadeInput.value;

  if (!titulo || !descricao) {
    alert("Preencha todos os campos.");
    return;
  }

  facade.abrirChamado(
    titulo,
    descricao,
    prioridade
  );

  tituloInput.value = "";
  descricaoInput.value = "";

  renderizarChamados();
});

function renderizarChamados() {
  listaChamados.innerHTML = "";

  const chamados = facade.listarChamados();

  chamados.forEach((chamado) => {
    const div = document.createElement("div");

    div.classList.add("chamado");

    div.innerHTML = `
      <h3>#${chamado.id} - ${chamado.titulo}</h3>

      <p>
        <strong>Descrição:</strong>
        ${chamado.descricao}
      </p>

      <p>
        <strong>Prioridade:</strong>
        ${chamado.prioridade}
      </p>

      <p>
        <strong>Status:</strong>
        ${chamado.getStatus()}
      </p>

      <button class="btn-status">
        Avançar Status
      </button>
    `;

    const botao = div.querySelector(".btn-status");

    botao.addEventListener("click", () => {
      facade.avancarStatus(chamado.id);

      renderizarChamados();
      renderizarHistorico(chamado);
    });

    div.addEventListener("click", () => {
      renderizarHistorico(chamado);
    });

    listaChamados.appendChild(div);
  });
}

function renderizarHistorico(chamado) {
  historicoContainer.innerHTML = "";

  chamado.historico.forEach((item) => {
    const div = document.createElement("div");

    div.classList.add("historico-item");

    div.innerHTML = `
      <strong>${item.data}</strong>
      <br>
      ${item.mensagem}
    `;

    historicoContainer.appendChild(div);
  });
}

renderizarChamados();