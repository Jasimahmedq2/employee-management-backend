import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalMiddleware from './app/middleware/globalMiddleware';
import router from './app/Router';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('yee, the server is running successfully');
});

app.use(globalMiddleware);

export default app;
