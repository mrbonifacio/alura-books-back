const {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  deletaLivroPorId,
} = require("../servicos/livro");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const livro = getLivroPorId(id);
      res.send(livro);
    } else {
      res.status(422);
      res.send("ID invalido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    if (req.bodt.nome) {
      insereLivro(livroNovo);
      res.status(201);
      res.send("Livro inserido com sucesso");
    } else {
        res.status(422)
        res.send("O campo nome é obrigatorio")
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchLivro(req, res) {
  try {
    if (id && Number(id)) {
      const id = req.params.id;
      const body = req.body;
      modificaLivro(body, id);
      res.send("Item modificado com sucesso");
    } else {
      res.status(422);
      res.send("ID invalido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteLivro(req, res) {
  try {
    if (id && Number(id)) {
      const id = req.params.id;
      deletaLivroPorId(id);
      res.send("Item deletado com sucesso");
    } else {
      res.status(422);
      res.send("ID invalido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};