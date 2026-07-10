import express from 'express';
import { PORT } from './config.js';
import { cardsRouter } from './routers/cards.router.js';

const app = express();



app.get('/', (req, res) => {
  res.send('All is good');
});

app.use('/cards', cardsRouter); //Это значит, что все запросы, которые начинаются с /cards, сервер будет перенаправлять в файл cards.router.ts.





app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
