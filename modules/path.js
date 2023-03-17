const path = require("path");

//Apenas o nome do arquivo atual.
console.log(path.basename(__filename));

//Nome do diretório atual
console.log(path.dirname(__filename));

//Pegar a extensão do arquivo
console.log(path.extname(__filename));

//Criar objeto Path
console.log(path.parse(__filename));

//Permite que junte varios caminhos de arquivos
console.log(path.join(__dirname, "teste", "teste.html"));
