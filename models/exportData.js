const {model, Schema} = require('mongoose');

const exportDataSchema =  new Schema({
    nameProduct: {
        type:String, //tipo dato
        unique: true, //unico
        required :[true, 'The id is required'], // requerido
        maxlength:[20, 'Max 6 characters'], //tamaño maximo
        minlength:[2, 'Min 5 characters'] // tamaño 5 characterts
    },
    price: {
        type:Number, //tipo dato
        required :[true, 'The name is required'], // requerido
    },
    weight: {
        type: Number, // tipo de dato
        required: [true, 'The start date is required'] // requerido
    }
})




module.exports = model("ExportData", exportDataSchema, "exportData") // crear la coleccion  si no existe y 