import express from 'express';
import LivrosController from '../controllers/livrosController.js';

const livros = express.Router();

livros
  .get('/livros', LivrosController.listarLivros)
  .get('/livros/:id', LivrosController.listarLivroPorId)
  .post('/livros', LivrosController.cadastrarLivro)
  .put('/livros/:id', LivrosController.atualizarLivro)
  .delete('/livros/:id', LivrosController.excluirLivro);

export default livros;
