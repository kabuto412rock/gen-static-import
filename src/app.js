import express from "express";
import { modelSync, models } from "./models/index.js";
const User = models.user;
const app = express()
const PORT = 3000;

modelSync();

app.use(express.urlencoded({ extended: true }));

app.get('/user/create', async (req, res) => {
    const { name, birth } = req.body;
    if (!(name && birth)) return res.json({ msg: '失敗' })

    const data = await User.create({
        username: name,
        birthday: birth
    })
    res.json({
        msg: '/user/create',
        data
    })
});
app.get('/user/', async (req, res) => {
    const data = await User.findAndCountAll();
    res.json({
        msg: '/user/',
        data
    })
});

app.listen(PORT, () => {
    console.log(`The app is listening on port:${PORT}`);
})
