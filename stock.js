class producto {
  constructor(id, nombre, descripcion, cantidad, precio, img) {
    (this.id = id),
    (this.nombre = nombre),
    (this.descripcion = descripcion),
    (this.cantidad = cantidad),
    (this.precio = precio),
    (this.img = img);
  }
}

let stock = [];

stock.push(
  new producto(
    1,
    "Desktop Oficina",
    "PC de escritorio para trabajo de oficina",
    7,
    80000,
    "assets/img/PC ECO.jpg"
  )
);
stock.push(
  new producto(
    2,
    "PC Gama Media",
    "PC para juegos, de gama media",
    10,
    150000,
    "assets/img/PC GAMA MEDIA.jpg"
  )
);
stock.push(
  new producto(
    3,
    "PC Gama Alta",
    "PC para juegos, de gama alta",
    3,
    300000,
    "assets/img/PC GAMA ALTA.jpg"
  )
);

console.log(stock);
