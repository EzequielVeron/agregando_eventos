class Producto {
	constructor(id, nombre, marca, precio, stock) {
		this.id = id;
		this.nombre = nombre;
		this.marca = marca;
		this.precio = precio;
		this.stock = stock;
	}
}

const producto1 = new Producto(1, "barra de chocolate", "Chocolatory", ["400"], "50");
const producto2 = new Producto(2, "bocadito dulce de leche", "woow", ["200"], "120");
const producto3 = new Producto(3, "tableta de chocolate", "Chocolatory", ["600"], "100");
const producto4 = new Producto(4, "chocolate de leche", "Chocolatory", ["400"], "75");

/////////////////////////////////////////////////////////////////////////////
const Productos = []

const arrayProductos = [producto1, producto2, producto3, producto4];

///////////////////////////////////////////////////////////////




const form = document.getElementById("idForm").value
const divproducts = document.getElementById("divProducts").value
const botonProducts= document.getElementById("botonProducts").value

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let Producto = document.getElementById('idProducto').value 
    let marca = document.getElementById('idEmail').value  
    let precio = document.getElementById('idPassword').value 

    const product = new product(Producto, marca, precio)
    product.push(product)
    console.log(Productos)

    form.reset()
})

botonProducts.addEventListener("click", () => {
    products.forEach(product => {
        divproducts.innerHTML += `
        <div class="card" style="width: 18rem; margin:3px;">
            <div class="card-body">
                <h3 class="card-title">${product.Producto}</h3>
                <p class="card-text">${product.Marca}</p>
                <p class="card-text">${product.precio}</p>
            </div>
        </div>
        
        `
    })
})


