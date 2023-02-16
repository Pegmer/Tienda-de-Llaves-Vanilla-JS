const principal = document.querySelector(".contenedor")
class Llaves {
    constructor(nombre, precio, imagen){
        this.nombre = nombre
        this.precio = precio
        this.imagen = imagen
    }
    visualizar(){
        let img = `<img class="imagenes" src="${this.imagen}">`
        let nom = `<h2>Llave ${this.nombre}</h2>`
        let pre = `<p>Precio: <b>${this.precio}$</b></p>`
        return [img,nom,pre,this.precio]
    }
}

const borjas = new Llaves ("Borjas","13","Imagenes\\Llave Borjas.png")
const m6 = new Llaves ("Cisa M6","10","Imagenes\\Llave Cisa M6.png")
const sp = new Llaves ("Cisa SP","8","Imagenes\\Llave Cisa SP.png")
const universal = new Llaves ("Cisa Universal","2","Imagenes\\Llave Cisa Universal.png")
const cruz = new Llaves ("Cruciforme","15","Imagenes\\Llave Cruciforme.png")
const security = new Llaves ("de Seguridad", "25", "Imagenes\\Llave de Seguridad.png")
const sierra = new Llaves("de Sierra","1","Imagenes\\Llave de Sierra.png")
const paleta2= new Llaves("de Doble Paleta","15","Imagenes\\Llave de Paleta.png")
const dopia= new Llaves("Dopia", "7", "Imagenes\\Llave Dopia.png")
const honda = new Llaves("Honda","12","Imagenes\\Llave Honda.png")
const jako = new Llaves("Jako","3","Imagenes\\Llave Jako.png")
const maestra = new Llaves("Maestra","5","Imagenes\\Llave Maestra.png")
const magnetica = new Llaves("Magnetica","4","Imagenes\\Llave Magnetica.png")
const multi = new Llaves ("Multilock","45","Imagenes\\Llave Multilock.png")
const paleta = new Llaves ("Paleta Simple", "8", "Imagenes\\Llave Paleta Simple.png")
const pompa = new Llaves ("Pompa", "10", "Imagenes\\Llave Pompa.png")
const rara = new Llaves ("Schlage", "4", "Imagenes\\Llave Schlage.png")
const tradicion = new Llaves ("Tradicional", "13", "Imagenes\\Llave Tradicional.png")
const tubular = new Llaves("Tubular", "5", "Imagenes\\Llave Tubular.png")
const vale = new Llaves("Vale","2","Imagenes\\Llave Vale.png")

let ofertas = [borjas,m6,sp,universal,cruz,security,
    sierra,paleta2,dopia,honda,jako,maestra,magnetica,
    multi,paleta,pompa,rara,tradicion,tubular,vale]

let fragmento = document.createDocumentFragment()

for (i in ofertas){
    let j = Number(i)+1
    let llave = ofertas[i].visualizar()
    let articulo = document.createElement("article")
    articulo.classList.add(`llave`)
    articulo.setAttribute("id",`llave${j}`)
    articulo.innerHTML = llave[0]+llave[1]+llave[2]
    articulo.tabIndex=i
    let etiquetas = articulo.children
    key = etiquetas[1]
    let button = document.createElement("input")
    button.classList.add(`botones`,`boton${j}`)
    button.setAttribute("value","Comprar")
    button.setAttribute("type","submit")
    button.setAttribute("onclick",`alert("Haz realizado la compra de la ${(key.textContent)} por un precio de ${llave[3]}$, felicidades por tu compra")`)
    articulo.appendChild(button)
    fragmento.appendChild(articulo)
}

principal.appendChild(fragmento)

const texto = document.querySelector(".src")
const boton = document.querySelector(".button")

const filtrar = ()=>{
    let txt = texto.value.toLowerCase()
    let i=0
    for (let llave of ofertas){
        i++
        let n=llave.nombre.toLowerCase()
        let a="llave"
        let name = `${a} ${n}` 
        if (name === txt){
            document.location.href=`#llave${i}`
        }   else if(n.includes(txt)){
            document.location.href=`#llave${i}`
            } else if (a.includes(txt)){
                document.location.href=`#llave${1}`
            }
    }
}

texto.addEventListener("keyup", function (evento){
    if (evento.code === 'Enter' ){
        filtrar()
    }
})
boton.addEventListener('click',filtrar)

