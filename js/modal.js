/* Modal */
const pieModal = document.getElementById("pieModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const closeModal = document.getElementById("closeModal");

function openPieModal(pie) {
  modalTitle.textContent = pie.name;
  modalImage.src = pie.image;
  modalDescription.textContent = pie.description;
  modalPrice.textContent = pie.price;
  pieModal.style.display = "block";
}

const pieRows2 = document.querySelectorAll(".pieRow");
pieRows2.forEach((pieRow) => {
  pieRow.addEventListener("click", () => {
    const pie = {
      name: pieRow.querySelector(".pie-title").textContent,
      image: pieRow.querySelector(".pie-img").src,
      description: pieRow.querySelector(".pie-description").textContent,
      price: pieRow.querySelector(".pie-price").textContent,
    };
    openPieModal(pie);
  });
});

// Cerrar modal
closeModal.addEventListener("click", () => {
  pieModal.style.display = "none";
});
