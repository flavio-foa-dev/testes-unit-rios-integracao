import express from 'express';
import livros from './livrosRoute.js';
import autores from './autoresRoute.js';
import editoras from './editoraRoute.js';

const routes = (app) => {
  app.route('/').get((_, res) => {
    res.status(200).send({ titulo: 'books OK' });
  });

  app.use(
    express.json(),
    livros,
    autores,
    editoras,
  );
};

export default routes;
