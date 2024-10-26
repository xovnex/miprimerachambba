const categoryfilter = document.getElementById("categoryFilter");
const pieRows = document.querySelectorAll(".pieRow");

categoryfilter.addEventListener("change", filtarCategorias);

function filtarCategorias() {
  const categoriaSeleccionada = categoryfilter.value;
  pieRows.forEach((pie) => {
    const categoria = pie.getAttribute("data-category");
    if (
      categoriaSeleccionada === "all" ||
      categoria === categoriaSeleccionada
    ) {
      pie.style.display = "block";
    } else {
      pie.style.display = "none";
    }
  });
}
