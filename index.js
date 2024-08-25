import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('나가주세요 껄껄');
});

const port = process.env.PORT ?? 4000;
app.listen(port, () => console.log(`server is listening on port : ${port}`));
