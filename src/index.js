import dotenv from 'dotenv'
import express from 'express';

import routes from "./routes";

dotenv.config();

const app = express();
const port = process.env.APP_PORT;
const hostname = process.env.APP_HOST;

app.use(routes);

app.listen(port, hostname, () => {
    console.log(`Servidor ativo em: ${hostname}:${port}`)
});

