import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { TitleController } from './controllers/TitleController';

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK' });
});

const titleController = new TitleController();

app.get('/api/titles', (req, res) => {
  const titles = titleController.getTitles();
  res.json(titles);
});

// Start server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default app; 