function calcularPontuacao() {
   let pontos = 0;
 
   // Pergunta 1
   const p1 = document.querySelector('input[name="pergunta1"]:checked');
   if (p1 && p1.value === "14 de abril de 1912") {
     pontos++;
   }
                                                                                                     
   // Pergunta 2
   const p2 = document.getElementById("p2").value.trim().toLowerCase();
   if (p2 === "pedro álvares cabral" || p2 === "pedro alvares cabral") {
     pontos++;
   }
 
   // Pergunta 3
   const p3 = document.getElementById("p3").value.trim().toLowerCase();
   if (p3 === "7 de setembro" || p3 === "07 de setembro") {
     pontos++;
   }
 
   // Pergunta 4
   const p4c = document.getElementById("p4c").checked;
   if (p4c) {
     pontos++;
   }
 
   // Pergunta 5
   const p5 = document.getElementById("p5").value;
   if (p5 === "15 de novembro de 1889") {
     pontos++;
   }
 
   // Pergunta 6
   const p6a = document.getElementById("p6a").checked;
   if (p6a) {
     pontos++;
   }
 
   // Pergunta 7
   const p7 = document.getElementById("p7").value.trim().toLowerCase();
   if (p7 === "java" || p7 === "Java") {
     pontos++;
   }
 
   // Pergunta 8
   const p8 = document.getElementById("p8").value.trim().toLowerCase();
   if (p8 === "tiktok" || p8 === "tik tok") {
     pontos++;
   }
 
   // Pergunta 9
   const p9b = document.getElementById("p9b").checked;
   if (p9b) {
     pontos++;
   }
 
   // Mostrar resultado
   document.getElementById("resultado").innerText = pontos;

  
   if (pontos <= 3) {
   let mensagem = document.getElementById("mensagem");
   mensagem.innerText = "Sua pontuação está baixa!";  // Define a mensagem
   } 
   else if(pontos <= 6) {
    mensagem.innerText = "Está com uma pontuação razoavel!";  // Define a mensagem
   }
   else {
    mensagem.innerText = "Você é muito inteligente!";  // Define a mensagem
   }
   mensagem.style.display = "block";  // Faz a mensagem aparecer

 }