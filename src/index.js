import express from "express";
import "dotenv/config";

const app = express();

const port = process.env.PORT;
const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

app.use(express.json());

app
  .route("/data/league/:id")
  .get(async (req, res) => {
    const TeamData = await fetch(
      `${apiUrl}teams?league=${req.params.id}&season=${2023}`,
      {
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "v3.football.api-sports.io",
        },
      }
    ).then((d) => d.json());

    const PlayerData = await fetch(
      `${apiUrl}players?league=${req.params.id}&season=${2023}`,
      {
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "v3.football.api-sports.io",
        },
      }
    ).then((d) => d.json());
    res.send(TeamData);
  })
  .get(async (req, res) => {
    const TeamData = await fetch(
      `${apiUrl}teams?league=${req.params.id}&season=${2023}`,
      {
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "v3.football.api-sports.io",
        },
      }
    ).then((d) => d.json());

    res.send(TeamData);
  });

app.route("/data/players/:id").get(async (req, res) => {
  const PlayerData = await fetch(
    `${apiUrl}players?league=${req.params.id}&season=${2023}`,
    {
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
    }
  ).then((d) => d.json());
  res.send(PlayerData);
});
app.listen(port, () => {
  console.log(`server url: http://localhost:${port}`);
});
