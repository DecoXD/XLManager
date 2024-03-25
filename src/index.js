//1 - let planilha current

//pegar planilha principal
//buscar na planilha main o nome da pessoa que está na planilha current , e ao achar dar push nos valores  


const { createManager } = require("./utils/XLManeger");


const currentManager = createManager('../sheets/current.xlsx')
const mainManager = createManager('../sheets/main.xlsx')

const res = currentManager.getWorksheet()

const current = currentManager.getWorksheet()
const main = mainManager.getWorksheet()


for(let i = 1; i <current.length; i++){
    const name = current[i][0]
    for(j = 1 ; j < main.length; j++){
      if(main[j][0]== name){
        const d = main[j].splice(3)
        current[i].push(...d)
      }
    }
  }



currentManager.createResponseFile(current)