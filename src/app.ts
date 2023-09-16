import express from 'express';
import productRoute from './routes/product.route';
import orderRoute from './routes/order.route';
import loginRoute from './routes/login.route';

const app = express();

app.use(express.json());
app.use('/login', loginRoute);
app.use('/products', productRoute);
app.use('/orders', orderRoute);

export default app;
