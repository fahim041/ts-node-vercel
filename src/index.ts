import express, { Request, Response, Express } from 'express';
import 'dotenv/config';
const app: Express = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Home');
});

app.get('/secret', (req: Request, res: Response) => {
  res.send(`Secret: ${process.env.SECRET}`);
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
