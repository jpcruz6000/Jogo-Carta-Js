var pontos = 0;
var derrotas = 0;

function myMove() {
  var elem = document.getElementById("carta");
  var elem1 = document.getElementById("carta2");
  var pos = 0;
  var pos2 = 65;
  var id = setInterval(frame, 8);
  var nFig = newCarta();
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
function newCarta(){
	var nipes = [' ♥',' ♦',' ♣',' ♠'];
	var faces = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
	var cor = ['#ff0000', '#ff0000', '#3c3c3c', '#3c3c3c'];// vermelho,v,preto,p
	
	var elem1 = document.getElementById("figura");
	var elem2 = document.getElementById("naipebotton");
	var elem3 =  document.getElementById("naipe");
	
	var elem12 = document.getElementById("figura2"); // figura cpu
	var elem22 = document.getElementById("naipebotton2"); //naipebotton cpu
	var elem32 = document.getElementById("naipe2");
	
	this.cartamesa = this.face; //carta da mesa recebe o valor do ultima carta jogada figura
	this.naipemesa = this.nipe; //carta da mesa recebe o valor do ultima carta jogada naipe
	
	this.nipe = Math.floor(Math.random()*4);
	this.face = Math.floor(Math.random()*faces.length);
		
	var placar = document.getElementById("msg");
	var placar1 = document.getElementById("msg1");
	if (typeof faces[cartamesa] === "undefined"){ //Previne o jogo de começar com o objeto: atual indefindio
		placar.innerHTML = "Inicio do Jogo!";
		placar1.innerHTML = "CPU 0 X 0 Jogador";
	}else{
		placar1.innerHTML = "CPU "+faces[cartamesa]+" "+nipes[naipemesa]+" X "+faces[face]+" "+nipes[nipe]+" Jogador"+" Total de pontos:"+pontos+" Total de derrotas:"+derrotas;		
		if (cartamesa > face) {
			placar.innerHTML = "Sua carta é fraca! Perdeu!";
			this.derrotas += 1;
		} else if (cartamesa == face) {
			if (naipemesa > nipe){
				placar.innerHTML = "Sua carta é fraca! Perdeu!";
				this.derrotas += 1;
			}else if ( naipemesa == nipe ){
				placar.innerHTML = "Deu Empate! Empatou!";
			}else {
				this.pontos += 1;
				placar.innerHTML = "Sua carta é forte! Você Ganhou!";
			}
		} else {
			placar.innerHTML = "Sua carta é forte! Você Ganhou!";
			this.pontos += 1;
		}
	}
	
	elem12.innerHTML = elem1.innerHTML;
	elem12.style.fontSize = elem1.style.fontSize;
	elem12.style.color = elem1.style.color;
	elem22.innerHTML = elem2.innerHTML;
	elem22.style.color = elem2.style.color;
	elem32.innerHTML = elem3.innerHTML;
	elem32.style.color = elem3.style.color;
	
	elem1.style.color = cor[nipe];
	elem2.style.color = cor[nipe];
	elem3.style.color = cor[nipe];
	elem2.innerHTML = faces[face]+nipes[nipe];
	elem3.innerHTML = faces[face]+nipes[nipe];
	elem1.innerHTML = nipes[nipe].repeat(face+1);
	
	if (face <= 4 ) {
		elem1.style.fontSize = "80px";	
	} else if (face >= 5 && face <= 7){
		elem1.style.fontSize = "60px";	
	} else if (face >= 8) {
		elem1.style.fontSize = "40px";
	} 
}

