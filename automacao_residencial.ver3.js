function AlteraRele1(){
    var estado = document.getElementById("estado").innerHTML;
    if(estado === "0"){
        document.getElementById("estado").innerHTML="1";
        document.getElementById("botao").innerHTML="<div class='botao_ligado'></div>";
		document.getElementById("botao").innerHTML="<a href='/?desligar' class='botao'>Ilumina&ccedil&atildeo</a>";
		
    } else {
        document.getElementById("estado").innerHTML="0";
        document.getElementById("botao").innerHTML="<div class='botao'></div>";
        document.getElementById("botao").innerHTML="<a href='/?ligar' class='botao'>Ilumina&ccedil&atildeo</a>"; //cria o botao com nome
    }
}

function AlteraRele2(){
    var estado_2 = document.getElementById("estado_2").innerHTML;
    if(estado_2 === "0"){
        document.getElementById("estado_2").innerHTML="1";
        document.getElementById("botao_2").innerHTML="<div class='botao2_ligado'></div>";
		document.getElementById("botao_2").innerHTML="<a href='/?2_desligar' class='botao_2'>Climatiza&ccedil&atildeo</a>";
		
    } else {
        document.getElementById("estado_2").innerHTML="0";
        document.getElementById("botao_2").innerHTML="<div class='botao_2'></div>";
        document.getElementById("botao_2").innerHTML="<a href='/?2_ligar' class='botao_2'>Climatiza&ccedil&atildeo</a>";
    }
}