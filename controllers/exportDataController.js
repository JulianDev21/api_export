const ExportData = require ('../models/exportData')

//method GET
const getExportData = async(req, res) => {
    const exportDatas =await ExportData.find()
    res.json(exportDatas)
}



const postExportData = async (req, res) => {
    let msg = 'Export inserted'
    const body = req.body
    try{
        const exportData = new ExportData(body)
        await exportData.save()

    }
    catch(error){
        msg=error
    }
    res.json({msg:msg})
}


module.exports ={
    getExportData,
    postExportData
}