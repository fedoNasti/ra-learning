import express from 'express';
import cors from 'cors';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(cors());

function getNewNews() {
  const count = faker.number.int({ min: 3, max: 7 });
  return Array.from({ length: count }).map(() => ({
    id: uuidv4(),
    content: faker.lorem.sentence(),
    createdAt: new Date().toISOString(),
  }));
}

app.get('/news/latest', (req, res) => {
  res.json(getNewNews());
});

const PORT = process.env.PORT || 7070;
app.listen(PORT, () => {
  console.log(`News server listening on http://localhost:${PORT}`);
});