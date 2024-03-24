import express from 'express';
import { createMiddleware } from '@mswjs/http-middleware';
import { handlers } from '@mocks/handlers';

const app = express();
const port = 9090;

app.use(express.json());
app.use(createMiddleware(...handlers));

app.listen(port, () => {
  console.log(`Mock Server running at http://localhost:${port}`);
});
