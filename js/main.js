
// MENU SANDUÍCHE
const btnMenu = document.getElementById("btn-menu");
const navMenu = document.getElementById("nav-menu");

btnMenu.addEventListener("click", function () {
  navMenu.classList.toggle("aberto");
  btnMenu.classList.toggle("aberto");
});


// CARROSSEL
const slides = document.querySelectorAll(".slide");
let atual = 0;

function mostrarSlide(index) {
  slides.forEach(function (slide) {
    slide.classList.remove("ativo");
  });
  slides[index].classList.add("ativo");
}

document.getElementById("btn-anterior").addEventListener("click", function () {
  atual = atual === 0 ? slides.length - 1 : atual - 1;
  mostrarSlide(atual);
});

document.getElementById("btn-proximo").addEventListener("click", function () {
  atual = atual === slides.length - 1 ? 0 : atual + 1;
  mostrarSlide(atual);
});

setInterval(function () {
  atual = atual === slides.length - 1 ? 0 : atual + 1;
  mostrarSlide(atual);
}, 5000);

mostrarSlide(0);

// 3. FILTROS E BUSCA DE PRODUTOS
let categoriaAtiva = "todos";

function aplicarFiltros() {
  const termo = document.getElementById("busca").value.toLowerCase().trim();
  const produtos = document.querySelectorAll("#produtos article");

  produtos.forEach(function (produto) {
    const nome = produto.querySelector("h2").textContent.toLowerCase();
    const categoria = produto.getAttribute("data-categoria");

    const passaBusca = nome.includes(termo);
    const passaCategoria = categoriaAtiva === "todos" || categoria === categoriaAtiva;

    produto.style.display = passaBusca && passaCategoria ? "" : "none";
  });
}

// Botões de filtro por categoria
document.querySelectorAll(".filtro").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".filtro").forEach(function (b) {
      b.classList.remove("ativo");
    });
    this.classList.add("ativo");
    categoriaAtiva = this.getAttribute("data-filtro");
    aplicarFiltros();
  });
});

// Campo de busca
document.getElementById("busca").addEventListener("input", aplicarFiltros);
