import express from "express";
import models from "./models";

const app = express()
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));

app.get('/user/create', (req, res) => {
    const { name } = req.body;

    models.bank
    res.json({
        msg: '/user/create',
        name
    })
});

app.listen(PORT, () => {
    console.log(`The app is listening on port:${PORT}`);
})
