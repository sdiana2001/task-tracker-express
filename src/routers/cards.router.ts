// Маршруты для карточек
import express from 'express';
import type { Request, Response } from 'express';
import type { GetCardResponse } from '../types/cards/get-card.response.js';
import type { Card } from '../types/cards/card.js';
import type { createCardRequest } from '../types/cards/get-card.request.js';
import type { IdParams } from '../types/common/id.params.js';



export const cardsRouter = express.Router();
//Ты создаешь ветку от главного дерева app(index.ts) . На этой ветке вырастут свои листья (.get, .post), 
//а потом ты эту ветку(cardsRouter) прикрутишь к главному стволу (к твоему app в index.ts) через команду app.use().

// ($$Request < Params, ResBody, ReqBody, ReqQuery > $$);


cardsRouter.get( '/', (request: Request<{}, {}>, response: Response<GetCardResponse>) => {
    // TODO: Return cards
  },
);

cardsRouter.get('/:id', (request: Request< IdParams, {}>, response: Response<Card>) => {
    // TODO: Return card
  },
);

cardsRouter.post('/', (request: Request<{}, createCardRequest>, response: Response<Card>) => {
    // TODO: Create card
  },
);

cardsRouter.put('/:id', (request: Request< IdParams, Card>, response: Response<Card>) => {
    // TODO: Update card
  },
);

cardsRouter.delete('/:id', (request: Request< IdParams>, response: Response<void>) => {
    // TODO: Delete card
  },
);