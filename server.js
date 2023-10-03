const express= require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Halo dari Aplikasi RevEx")
})

app.listen(PORT, () => {
    console.log(`Aplikasi sudah berjalan pada http://localhost:${PORT}`)
})