import cards from "/data/cards.json";
import topCard from "/data/topCard.json";
import featured from "/data/featured.json";
import channels from "/data/liveChannels.json";

function handler(req, res) {
  const { category } = req.query;
  const pages = ["home", "news", "kids", "shows", "music", "movies"];

  if (pages.includes(category)) {
    const response = {
      topSec: topCard[category],
      featured,
      sections: [
        {
          label: "Latest Movies",
          data: cards,
        },
        {
          label: "Live Channels",
          data: [...channels, ...channels],
        },
        {
          label: "Top Web Series",
          data: cards,
        },
      ],
    };

    res.send(response);
  } else {
    res.status(404).send({ message: "Category Not Found" });
  }
}

export default handler;
