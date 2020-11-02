import express from 'express'
import dotenv from 'dotenv'
import productsRoute from './routes/products.js'
import connectDB from './config/db.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
const app = express();

dotenv.config();

connectDB();

app.use(notFound);

app.use(errorHandler);

//Routes
app.use('/api/products', productsRoute);

const PORT = process.env.PORT||5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`));