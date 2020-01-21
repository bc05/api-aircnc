import Router from "express";

const router = Router();

router.get('/', (req, res) => res.send("Rota inicial"));

export default router;
