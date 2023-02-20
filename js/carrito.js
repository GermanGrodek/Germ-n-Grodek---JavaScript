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
      saveCarrito();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `${prod.nombre} fue agregado al carrito`,
        showConfirmButton: false,
        timer: 1500
      })
    });
  });
  

///CREACIÓN DE CARRITO DE COMPRAS BASADO EN EL ARRAY "CARRITO"
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const pintarCarrito = () => {
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
  });

  modalHeader.append(modalCerrarCarrito);

  carrito.forEach((c) => {
    const modalContent = document.createElement("div");
    modalContent.className = "modal__card";
    modalContent.innerHTML = `
      <img src="${c.img}" alt="${c.descripcion}" class="modal__card__img">
      <h3 class="modal__card__nombreProd">${c.nombre}</h3>
      <p class="modal__card__precio">$${c.precio}</p>
      `;
    modalCarrito.append(modalContent);

    const btnEliminarProducto = document.createElement("span");
    btnEliminarProducto.className = "btnEliminarProducto";
    btnEliminarProducto.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    btnEliminarProducto.addEventListener("click", eliminarProducto)

    modalContent.append(btnEliminarProducto);
  });

  const totalCarrito = carrito.reduce(
    (acumulador, elemento) => acumulador + elemento.precio,
    0
  );

  const modalFooter = document.createElement("div");
  modalFooter.className = "modal__footer";
  modalFooter.innerHTML = `<h4 id="totalCarrito">El total es de: $${totalCarrito}</h4>`;

  modalCarrito.append(modalFooter);

  const vaciarCarrito = document.createElement("button");
  vaciarCarrito.className = "btnVaciarCarrito";
  vaciarCarrito.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

  vaciarCarrito.addEventListener("click", () => {
    carrito = [];
    pintarCarrito();
    saveCarrito();
  });

  modalFooter.append(vaciarCarrito);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
  const buscarId = carrito.find((e) => e.id);

  carrito = carrito.filter((idC) => {
    return idC !== buscarId;
  });

  pintarCarrito ();
  saveCarrito();
};


///Agregar carrito en LocalStorage
const saveCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
