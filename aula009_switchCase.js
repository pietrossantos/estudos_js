let disciplina = "JavaScript";

switch (disciplina){
        case "Python":
        console.log("você é um aluno Python"); 
        break;
        case "Power BI":
        console.log("você é um aluno Power BI"); 
        break;
        case "HTML/CSS":
        console.log("você é um aluno HTML/CSS"); 
        break;
        case "C#":
        console.log("você é um aluno C#"); 
        break;
        case "JavaScript":
        console.log("você é um aluno JavaScript"); 
        break;
        default:
        console.log("você não é um aluno!");

}

function obterDiaDaSemana (numeroDia){
let nomeDia;
switch (numeroDia){
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda";
        break;
    case 3:
        nomeDia = "Terça";
        break;
    case 4:
        nomeDia = "Quarta";
        break;
    case 5:
        nomeDia = "Quinta";
        break;
    case 6: 
        nomeDia = "Sexta";
        break;
    case 7:
        nomeDia = "Sábado";
        break;
    default:
        console.log("não é uma dia válido!");
}
return nomeDia;
}

console.log(obterDiaDaSemana(3));