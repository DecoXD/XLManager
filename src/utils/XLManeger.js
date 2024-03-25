const XLSX  = require('node-xlsx')
const {join} = require('path')
const fs = require('fs')
const exceljs = require('exceljs')
class XLManager{

    constructor(fileName){
        this.filePath = join(__dirname,'..','sheets',fileName)
        this.responsePath = join(__dirname,'..','sheets','response.xlsx')
    }

    getWorksheet(){
       const data = XLSX.parse(this.filePath)[0].data
       return data
      
    }


    async createResponseFile(data){
        const sheet = XLSX.build([{name:'response',data}])
        await fs.promises.writeFile(this.responsePath,sheet)
    }



}


module.exports.createManager = function (fileName){
    return new XLManager(fileName)
}