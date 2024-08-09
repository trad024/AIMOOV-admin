import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './core/db';
import userRoutes from './routes/UserRoutes';
import sessionRoutes from './routes/SessionRoutes';
import programRoutes from './routes/ProgramRoutes';
import { getSession } from './controllers/SessionController';

const app = express();
//dotenv.config(); // Ajoutez cette ligne pour charger les variables d'environnement

const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/v1/users', userRoutes);
app.use('/v1/sessions', sessionRoutes);
app.use('/v1/programs', programRoutes);
app.use('/v1/session', getSession);
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
