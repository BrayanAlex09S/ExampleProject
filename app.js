const mongo =require('mongoose')
const url_db = 'mongodb://localhost:27017'

mongo.connect(url_db)
.then(() => {
    console.log('conexion exitosa')
})
.catch ((err) =>{
    console.log('Fallo la conexion a la base de datos')
})

const alumnos_esquemas = new mongo.Schema(
    {
        name:{
            type:String
        },
        apepat:{
            type:String
        },
        numerotel:{
            type:Number
        }
    }
)

const alumnos = new mongo.model('tabla de registro de alumnos', alumnos_esquemas)

alumnos.create(
    {
        name:'jesus',
        apepat:'Salazar',
        numerotel:4491328676
    }
)            