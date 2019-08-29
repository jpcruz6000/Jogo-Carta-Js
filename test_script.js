var pontos = 0;
var derrotas = 0;

function jogar(atual, nova, natual, nnova) { // jogador tem a carta nova e o computador tem a atual
	var elem = document.getElementById("msg");
	var elem1 = document.getElementById("msg1");
	if (typeof atual === "undefined"){ //Previne o jogo de começar com o objeto: atual indefindio
		elem.innerHTML = "Inicio do Jogo!";
		elem1.innerHTML = "CPU 0 X 0 Jogador";
	}else{
		console.log("CPU:"+atual+"/"+natual+"jogador:"+nova+"/"+nnova); //testar valores no console apert f12
		elem1.innerHTML = "CPU "+atual+" X "+nova+" Jogador"+" Total de pontos:"+pontos+" Total de derrotas:"+derrotas;
		
		if (atual > nova) {
			elem.innerHTML = "Sua carta é fraca! Perdeu!";
			this.derrotas += 1;
		} else if (atual == nova) {
			if (natual > nnova){
				elem.innerHTML = "Sua carta é fraca! Perdeu!";
				this.derrotas += 1;
			}else if ( natual == nnova ){
				elem.innerHTML = "Deu Empate! Empatou!";
			}else {
				this.pontos += 1;
				elem.innerHTML = "Sua carta é forte! Você Ganhou!";
			}
		} else {
			elem.innerHTML = "Sua carta é forte! Você Ganhou!";
			this.pontos += 1;
		}
	}
	
};
function myMove() {
  var elem = document.getElementById("carta");
  var elem1 = document.getElementById("carta2");
  var pos = 0;
  var pos2 = 65;
  var id = setInterval(frame, 8);
  var nFig = newFigura();
  function frame() {
    if (pos == 40) {
      clearInterval(id);
    } else {
      pos++; 
	  pos2--;
      elem.style.top = pos + "%"; 
      elem.style.left = pos + "%";
	  elem1.style.top = pos2 + "%";
	  elem1.style.left = pos2 + "%";
    }
  }
};
function newFigura(){
	var str = ["&#9830 ", "&#9824 ", "&#9829 ", "&#9827 "];// 0,1,2,3 diamond,spade,heart,club
	var cor = ["#ff0000", "#3c3c3c", "#ff0000", "#3c3c3c"];// vermelho,v,preto,p
	var elem1 =  document.getElementById("figura"); // figura
	var elem2 =  document.getElementById("naipebotton"); //naipebotton
	var elem3 =  document.getElementById("naipe"); //naipe
	
	var elem12 = document.getElementById("figura2"); // figura cpu
	var elem22 = document.getElementById("naipebotton2"); //naipebotton cpu
	var elem32 = document.getElementById("naipe2");
	
	this.cartamesa = this.nfigura; //carta da mesa recebe o valor do ultima carta jogada figura
	this.naipemesa = this.resultado; //carta da mesa recebe o valor do ultima carta jogada naipe		
	
	this.nfigura = Math.floor(Math.random() * 6) + 1; //nova carta aleatoria
	this.resultado = Math.floor(Math.random() * 4);
   
	var jogo = jogar(this.cartamesa, this.nfigura, this.naipemesa, this.resultado); //parametros do jogo. atual e nova.	
	
	elem12.innerHTML = elem1.innerHTML;
	elem12.style.fontSize = elem1.style.fontSize;
	elem12.style.color = elem1.style.color;
	elem22.innerHTML = elem2.innerHTML;
	elem22.style.color = elem2.style.color;
	elem32.innerHTML = elem3.innerHTML;
	elem32.style.color = elem3.style.color;	
	
	if (this.nfigura == 1){
		elem1.innerHTML = str[resultado].repeat(1);		
		elem1.style.fontSize = "200px";
		elem1.style.color = cor[resultado];
		elem2.style.color = cor[resultado];
		elem3.style.color = cor[resultado];
		elem2.innerHTML = "A "+str[resultado];	
		elem3.innerHTML = "A "+str[resultado];
	} else if (this.nfigura == 2){
		elem1.innerHTML = str[resultado].repeat(2);
		elem1.style.fontSize = "80px";
		elem1.style.color = cor[resultado];
		elem2.style.color = cor[resultado];
		elem3.style.color = cor[resultado];
		elem2.innerHTML = "2 "+str[resultado];
		elem3.innerHTML = "2 "+str[resultado];
	} else if (this.nfigura == 3){
		elem1.innerHTML = str[resultado].repeat(3);
		elem1.style.fontSize = "80px";
		elem1.style.color = cor[resultado];
		elem2.style.color = cor[resultado];
		elem3.style.color = cor[resultado];
		elem2.innerHTML = "3 "+str[resultado];
		elem3.innerHTML = "3 "+str[resultado];
	} else if (this.nfigura == 4){
		elem1.innerHTML = str[resultado].repeat(4);
		elem1.style.fontSize = "80px";
		elem1.style.color = cor[resultado];
		elem2.style.color = cor[resultado];
		elem3.style.color = cor[resultado];
		elem2.innerHTML = "4 "+str[resultado];
		elem3.innerHTML = "4 "+str[resultado];
	} else if (this.nfigura == 5){
		elem1.innerHTML = str[resultado].repeat(5);
		elem1.style.fontSize = "80px";
		elem1.style.color = cor[resultado];
		elem2.style.color = cor[resultado];
		elem3.style.color = cor[resultado];
		elem2.innerHTML = "5 "+str[resultado];
		elem3.innerHTML = "5 "+str[resultado];
	} else if (this.nfigura == 6){
		elem1.innerHTML = str[resultado].repeat(6);
		elem1.style.fontSize = "80px";
		elem1.style.color = cor[resultado];
		elem2.style.color = cor[resultado];
		elem3.style.color = cor[resultado];
		elem2.innerHTML = "6 "+str[resultado];
		elem3.innerHTML = "6 "+str[resultado];
	}
	
}