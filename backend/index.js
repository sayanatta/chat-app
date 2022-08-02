import express from 'express';
import cors from 'cors';
import {dbConnect} from '../backend/lib/db.js';

const app = express();
app.use(cors());

dbConnect();

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`);
});