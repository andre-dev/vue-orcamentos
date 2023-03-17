const express = require("express");
const userModel = require("../src/models/user.model");

const app = express();
app.use(express.json());

//Fala pro express utilizar como view engine o ejs
//app.set("view engine", "ejs");

//Aponta para o express e ejs onde estão as views
//app.set("views", "src/views");

//Middleware na prática: Funções que são executadas antes de qualquer requisição.
app.use((req, res, next) =>{
  console.log(req.body);

  next();
});

const port = 8080;

//Endpoint Buscando todos os usuários criados
app.get("/users", async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//Endpoint Buscando usuário pelo id
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await userModel.findById(id);
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//Criando um usuário
app.post("/users", async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
})

//Atualizando um ou mais campos do usuário
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findByIdAndUpdate(id, req.body, {new: true}); //new: true força o retorno do registro atualizado do banco.
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
})

//Deletando usuário
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
})

app.get("/views/users", async (req, res) =>{
  const users = await userModel.find({});
  res.render("index", {users});
})

app.listen(port, () => console.log(`Rodando com express na porta: ${port}`));
