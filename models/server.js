const express = require ('express')
const dbConnection = require('../database/config')
const { getExportData, postExportData} = require('../controllers/exportDataController')

class Server{
    constructor(){
    this.app = express()
    this.listen()
    this.dbConnection()
    this.pathExportData = "/api/exportData"
    this.route()
    
    }

    route (){
        this.app.use(express.json())
        this.app.get(this.pathExportData, getExportData)
        this.app.post(this.pathExportData, postExportData)

    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running`)
        })
    }

    async dbConnection(){ // call connet to database
        await dbConnection()
    }
}

module.exports = Server