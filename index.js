const data = {
    "categorias": [
        {
            "id": 1,
            "nombre": "Fuerza",
            "imagen": "/fuerza.png",
            "ruta": "/tabs/tabfuerza"
        },
        {
            "id": 2,
            "nombre": "Cardio",
            "imagen": "/cardio.png",
            "ruta": "/tabs/tabcardio"
        },
        {
            "id": 3,
            "nombre": "Estiramiento",
            "imagen": "/estiramiento.png",
            "ruta": "/tabs/tabestiramiento"
        }
    ],
    "subcategorias": [
        {
            "id": 1,
            "nombre": "Brazo",
            "categorias": 1
        }
    ],
    "ejercicios": [
        {
            "id": 1,
            "nombre": "Caminata",
            "categorias": "cardio"
        },
        {
            "id": 2,
            "nombre": "Curl de biceps",
            "categorias": "fuerza"
        },
        {
            "id": 3,
            "nombre": "cagada en la taaza",
            "categorias": "pierna"
        },
        {
            "id": 4,
            "nombre": "Cardio con cupido",
            "categorias": "cardio"
        },
    ]
}

// console.log(data);

const parametroBusqueda = 'cardio'

// url dinamica
const ejeciciosDeCardio = data.ejercicios
    .filter( ejercicio => ejercicio.categorias === 'fuerza' )


//<div v-for="let item in ejerciciosDeCardix">
  ////    item.nombre
    //}
//</div>