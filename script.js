const sectionShop = document.getElementById("cardSection");
const btnAñadirCarrito = document.getElementsByTagName("boton");
const verCarrito = document.getElementById("btnCarrito");
const modalCarrito = document.getElementById("modal");

let carrito = [];

///TIENDA DE PRODUCTOS BASADA EN EL ARRAY "STOCK"

stock.forEach((prod) => {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <header class="cardhead">
        <p class="tituloCard">${prod.nombre}</p>
        <img src="${prod.img}" alt="${prod.descripcion}" class="cardImg">
    </header>
    <footer class="cardbody">
        <span class="cardPrecio">$${prod.precio}</span>
    </footer>
    `;

  sectionShop.append(card);

  let btnComprar = document.createElement("button");
  btnComprar.className = "boton";
  btnComprar.innerHTML = `Añadir al carrito <i class="fa-solid fa-cart-shopping"></i>`;
  card.append(btnComprar);

  btnComprar.addEventListener("click", () => {
    carrito.push({
      id: prod.id,
      nombre: prod.nombre,
      descripcion: prod.descripcion,
      cantidad: prod.cantidad,
      precio: prod.precio,
      img: prod.img,
    });
    console.log(carrito);
  });
});

///CREACIÓN DE CARRITO DE COMPRAS BASADO EN EL ARRAY "CARRITO"

verCarrito.addEventListener("click", () => {
  modalCarrito.innerHTML = "";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal__header";
  modalHeader.innerHTML = `
  <h2 class="modal__header__titulo">Carrito</h2>
  `;
  modalCarrito.style.display = "block";
  modalCarrito.append(modalHeader);

  const modalCerrarCarrito = document.createElement("button");
  modalCerrarCarrito.className = "btnCerrarCarrito";
  modalCerrarCarrito.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;
  modalCerrarCarrito.addEventListener("click", () => {
  modalCarrito.style.display = "none";
  })

  modalHeader.append(modalCerrarCarrito);

  carrito.forEach((c) => {
    const modalContent = document.createElement("div");
    modalContent.className = "modal__card";
    modalContent.innerHTML = `
    <img src="${c.img}" alt="${c.descripcion}" class="modal__card__img">
    <h3 class="modal__card__nombreProd">${c.nombre}</h3>
    <p class="modal__card__precio">$${c.precio}</p>
    `;
    modalCarrito.append(modalContent)
  });

  const totalCarrito = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);

  const modalFooter = document.createElement("div");
  modalFooter.className = "modal__footer";
  modalFooter.innerHTML = `<h4 id="totalCarrito">El total es de: $${totalCarrito}</h4>`;

  modalCarrito.append(modalFooter);

  const vaciarCarrito = document.createElement("button")
  vaciarCarrito.className = "btnVaciarCarrito";
  vaciarCarrito.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

  vaciarCarrito.addEventListener("click", () => {
    carrito = [];
    modalCarrito.innerHTML = "";
  })

  modalFooter.append(vaciarCarrito)

});
