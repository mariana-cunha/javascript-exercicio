// Escreva uma função que recebe
// um RG não formatado e retorna ele
// formatado. Exemplo: "5 5555553" -> "5.555.555-3"

// function formatRG(unformatted) {
//     let rgZoado = (\[a-zA-Z]$)
//     let rgCerto = card.replace(/\D/g, "").split("");
//     let rg = "535310547"
//     if (){

//     }
// }




// [0-9][0-9].[0-9][0-9][0-9].[0-9][0-9][0-9]-[0-9]



// resolução ale

function formatRG(unformatted) {
    let result = unformatted.replace(/\D/g,"");
    result.split("");
    if (result.lenght === 9){
        return result[0] + result[1] + "." + result[2] + result[3] + result[4] + "." + result[5] + result[6] + result[7] + "-" + result[8]; 
    } 
    else { 
        return result[0] + result[1] + "." + result[2] + result[3] + result[4] + "." + result[5] + result[6] + result[7] + "-" + "x"; 
    }
}
