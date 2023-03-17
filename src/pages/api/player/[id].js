import cards from "/data/cards.json";
import allData from "/data/allData.json";

function handler(req, res) {
  const { id } = req.query;
  const data = allData.filter((e) => e.id === id);

  if (data.length === 0) {
    res.status(404).send({ message: "Data Not Found" });
    return;
  }

  const response = {
    player: data[0],
    recommended: cards,
  };

  res.send(response);
}

export default handler;
