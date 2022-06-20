// /api

import { Router } from 'express';
import totalChocolates from '../helpers/totalChocolates.js';
import dataNoEmpty from '../middlewares/dataNoEmpty.js';
import isQueryNumbers from '../middlewares/isQueryNumbers.js';

const router = new Router()

router.use(dataNoEmpty)
router.use(isQueryNumbers)

router.get("/", (req, res) => {
  const { n, c, m } = req.query
  const resultado = totalChocolates(n, c, m);
  res.json({
    resultado
  })
})

export default router