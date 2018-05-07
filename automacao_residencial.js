function AlteraRele1(){
    var estado = document.getElementById("estado").innerHTML;
    if(estado === "0"){
        document.getElementById("estado").innerHTML="1";
        document.getElementById("rele").innerHTML="<div class='botao_ligado'></div>";
		document.getElementById("botao").innerHTML="<a href='/?desligar' class='botao'>Ilumina&ccedil&atildeo</a>";
		
    } else {
        document.getElementById("estado").innerHTML="0";
        document.getElementById("rele").innerHTML="<div class='botao'></div>";
        document.getElementById("botao").innerHTML="<a href='/?ligar' class='botao'>Ilumina&ccedil&atildeo</a>";
    }
}

function AlteraRele2(){
    var estado_2 = document.getElementById("estado_2").innerHTML;
    if(estado_2 === "0"){
        document.getElementById("estado_2").innerHTML="1";
        document.getElementById("rele_2").innerHTML="<div class='botao2_ligado'></div>";
		document.getElementById("botao_2").innerHTML="<a href='/?2_desligar' class='botao_2'>Climatiza&ccedil&atildeo</a>";
		
    } else {
        document.getElementById("estado_2").innerHTML="0";
        document.getElementById("rele_2").innerHTML="<div class='botao_2'></div>";
        document.getElementById("botao_2").innerHTML="<a href='/?2_ligar' class='botao_2'>Climatiza&ccedil&atildeo</a>";
    }
}
 
 function AlteraRele3(){
    var estado_3 = document.getElementById("estado_3").innerHTML;
    if(estado_3 === "0"){
        document.getElementById("estado_3").innerHTML="1";
        document.getElementById("rele_3").innerHTML="<div class='botao3_ligado'></div>";
		document.getElementById("botao_3").innerHTML="<a href='/?3_desligar' class='botao_3'>Home Theater</a>";
    } else {
        document.getElementById("estado_3").innerHTML="0";
        document.getElementById("rele_3").innerHTML="<div class='botao_3'></div>";
        document.getElementById("botao_3").innerHTML="<a href='/?3_ligar' class='botao_3'>Home Theater</a>";
    }
}

 function AlteraRele4(){
    var estado_4 = document.getElementById("estado_4").innerHTML;
    if(estado_4 === "0"){
        document.getElementById("estado_4").innerHTML="1";
        document.getElementById("rele_4").innerHTML="<div class='botao4_ligado'></div>";
		document.getElementById("botao_4").innerHTML="<a href='/?4_desligar' class='botao_4'>Irriga&ccedil&atildeo</a>";
    } else {
        document.getElementById("estado_4").innerHTML="0";
        document.getElementById("rele_4").innerHTML="<div class='botao_4'></div>";
        document.getElementById("botao_4").innerHTML="<a href='/?4_ligar' class='botao_4'>Irriga&ccedil&atildeo</a>";
    }
}
