const escola = prompt("Informe sua escola");
const notas = []; 
let somatoria = 0;
const aprovado = "Aprovado";
const reprovado = "Reprovado";
let menorQue10 = false;


for (let i = 0; i < 4; i++){
    notas[i] = parseFloat(prompt("Informe sua nota referente ao módulo" + (i + 1)));
    somatoria += notas[i];
    if (notas [i] <= 10){
        menorQue10 = true;
    }
}

switch (escola){
    case "A":
        if (somatoria > 60){
            console.log(aprovado);
        } else {
            console.log(reprovado);
        }
        break;
    case "B":
        if (somatoria > 70){
            console.log(aprovado);
        } else {
            console.log(reprovado);
        }
        break;
    case "C":
        if (somatoria > 60 && !menorQue10){
            console.log(aprovado);
        } else {
            console.log(reprovado);
        }
        break;
    default:
        console.log("Escola não encontrada");
        break;
}
console.log("Escola", escola);
console.log("notas", notas);
