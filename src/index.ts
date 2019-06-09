import express from 'express';
const app = express();

const PORT = process.env.NODE_ENV === 'test' ? 3333 : 5000;

// Routes

const server = app.listen(PORT, () => console.log(`Server up on ${PORT}`));

export default server;