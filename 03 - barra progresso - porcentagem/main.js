function getRandomColors () {
    var colors = ["blue", "pink", "purple", "black", "yellow", "Aqua", "Aquamarine"]
    var index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function createprogressbar (){
    //desafio criar com var o que foi feito abaixo 
}

var progress = document.querySelectorAll(".progress")

for (var div of progress) {
    const percentage = div.dataset.percentage //pega o valor q tá no data-percentage

    const percentageText = document.createElement("h1") //criou h1
    percentageText.textContent = percentage + "%"
    div.appendChild(percentageText)

    const progressDiv = document.createElement("div") //criou div filha
    progressDiv.style.backgroundColor = getRandomColors() 
    setTimeout(() => {
        progressDiv.style.width = percentage + "%"
    }, 100) 
    div.appendChild(progressDiv) 
}





// function vai() {
//     var 
//     var divProg = document.querySelectorAll(".progress")
//     var divProgress = document.createElement("div")
//     var divH1 = document.createElement("h1")


// }






// var divProg = document.querySelectorAll(".progress") //chama a div progress // mãe

// var divProgress = document.createElement("div") //criar a div dentro da progress // filho

// var divH1 = document.createElement("h1") //cria o h1

// var porcentagem

// var i 


// for (var i=0; i < divProgress.length; i++) {    
    
//     divProg.appendChild(divProgress) //junta o filho com a mãe e cria um loop
//     divProg.textContent = divProgress
// }


// console.log (IncludeDivs)





// divProgress.textContent = document.getElementsByClassName("progress").value //eu quero q a div nova entre na div progress


































// // cria div dentro do progress
// var divProg = document.createElement("div")

// //cria o h1
// var h1Prog = document.createElement("h1")


// // chama o container
// var containerProg = document.getElementById("container")

// // chama a div progress // depois adc o class progress



// //

// function createDivAndAddClass ("div", "progress") {
//     var elementProg = document.createElement("div")
//     if (typeof "progress" !== "undefined") { 
//        elementProg.classlist.add("progress")
//     }
//     return elementProg
//     console.log(elementProg)
// }

