const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', async (req, res) => {
    const data = await fetch("https://api.open-meteo.com/v1/forecast?latitude=30.02&longitude=31&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&hourly=temperature_2m,relative_humidity_2m&timezone=Africa%2FCairo");
    const data_json = await data.json();
    await console.log(data_json);
    res.status(200).send(data_json);
});

app.listen(port, (err) => {
    if (err) throw err;
    else {
        console.log(`Server started and is listening at http://localhost:${port}`);
    }
});