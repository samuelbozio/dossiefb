const grade = document.getElementById("grade");
const filtros = document.getElementById("filtros");
const busca = document.getElementById("busca");
const contador = document.getElementById("contador");
const vazio = document.getElementById("vazio");
const total = document.getElementById("total");
const modal = document.getElementById("modal");

let temaAtivo = "Todos";
let textoBusca = "";

const slug = (t) =>
  t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");

const esc = (t) =>
  String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function desenharFiltros() {
  const temas = ["Todos", ...new Set(REGISTROS.map((r) => r.tema))];
  filtros.innerHTML = "";
  temas.forEach((tema) => {
    const qtd = tema === "Todos" ? REGISTROS.length : REGISTROS.filter((r) => r.tema === tema).length;
    const b = document.createElement("button");
    b.className = "chip" + (tema === temaAtivo ? " ativo" : "");
    b.innerHTML = `${esc(tema)}<b>${qtd}</b>`;
    b.onclick = () => { temaAtivo = tema; desenharFiltros(); desenharCards(); };
    filtros.appendChild(b);
  });
}

function desenharCards() {
  const q = textoBusca.toLowerCase();
  const lista = REGISTROS.filter((r) => {
    const okTema = temaAtivo === "Todos" || r.tema === temaAtivo;
    const alvo = [r.titulo, r.subtitulo, r.resumo, r.tema, r.orgao].join(" ").toLowerCase();
    return okTema && alvo.includes(q);
  });

  grade.innerHTML = "";
  lista.forEach((r) => {
    const el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `
      <span class="status ${slug(r.status)}">${esc(r.status)}</span>
      <h3>${esc(r.titulo)}</h3>
      <p class="sub">${esc(r.subtitulo)}</p>
      <p class="resumo">${esc(r.resumo)}</p>
      <div class="rodape-card">
        <span>${esc(r.orgao)} · ${esc(r.data)}</span>
        <button class="ampliar">Ampliar</button>
      </div>`;
    el.querySelector(".ampliar").onclick = () => abrirModal(r);
    grade.appendChild(el);
  });

  contador.textContent = `${lista.length} registro${lista.length === 1 ? "" : "s"} disponível${lista.length === 1 ? "" : "is"}`;
  vazio.hidden = lista.length > 0;
  total.textContent = REGISTROS.length;
}

function abrirModal(r) {
  const s = document.getElementById("m-status");
  s.textContent = r.status;
  s.className = "status " + slug(r.status);
  document.getElementById("m-titulo").textContent = r.titulo;
  document.getElementById("m-data").textContent = `${r.orgao} · ${r.data}`;
  document.getElementById("m-detalhe").innerHTML = r.detalhe.map((p) => `<p>${esc(p)}</p>`).join("");
  document.getElementById("m-fontes").innerHTML = r.fontes
    .map((f) => `<li>Fonte: <a href="${esc(f.url)}" target="_blank" rel="noopener noreferrer">${esc(f.nome)}</a></li>`)
    .join("");
  modal.hidden = false;
  document.getElementById("fechar").focus();
}

function fecharModal() { modal.hidden = true; }

document.getElementById("fechar").onclick = fecharModal;
modal.addEventListener("click", (e) => { if (e.target === modal) fecharModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") fecharModal(); });
busca.addEventListener("input", (e) => { textoBusca = e.target.value; desenharCards(); });

desenharFiltros();
desenharCards();