


const productos = [
    { id: '1', nombre: 'CUBIERTA MICHELIN', img: 'https://res.cloudinary.com/dgl9nliyj/image/upload/v1644895874/michelin_iswgom.jpg', categoria: 'trial' , precio: '$1500', descripcion: 'Cubierta dura, perfil bajo, medidas...', stock: 4},
    { id: '2', nombre: 'CUBIERTA PIRELLI', img: 'https://res.cloudinary.com/dgl9nliyj/image/upload/v1644895874/pirelli_hn7mi7.png', categoria: 'trial' , precio: '$1700', descripcion: 'Cubierta dura, perfil bajo, medidas...', stock: 8},
    { id: '3', nombre: 'CUBIERTA BRIDGESTONE', img: 'https://res.cloudinary.com/dgl9nliyj/image/upload/v1644895873/bridgestone_jwzscs.jpg', categoria: 'asfalto' , precio: '$1100', descripcion: 'Cubierta dura, perfil bajo, medidas...', stock: 16},
    { id: '4', nombre: 'CUBIERTA FATE', img: 'https://res.cloudinary.com/dgl9nliyj/image/upload/v1644895874/fate_kasqn4.png', categoria: 'trial' , precio: '$1000', descripcion: 'Cubierta dura, perfil bajo, medidas...', stock: 4},
    { id: '5', nombre: 'CUBIERTA DUNLOP', img: 'https://res.cloudinary.com/dgl9nliyj/image/upload/v1644895873/dunlop_iy9kmr.jpg', categoria: 'asfalto' , precio: '$2000', descripcion: 'Cubierta dura, perfil bajo, medidas...', stock: 12},
    { id: '6', nombre: 'CUBIERTA MICHELIN', img: 'https://res.cloudinary.com/dgl9nliyj/image/upload/v1644896076/michelin-campo_h3tgzx.jpg', categoria: 'campo' , precio: '$1800', descripcion: 'Cubierta dura, perfil bajo, medidas...', stock: 8},
]

export const getFetch = new Promise((resolve, reject) => {
    let condicion = true
    if(condicion){
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    }else{
        reject('error')
    }
})