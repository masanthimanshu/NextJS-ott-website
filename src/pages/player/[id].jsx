import Link from "next/link";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container, Typography } from "@mui/material";

function Player({ data }) {
  return (
    <>
      <Container maxWidth="xl">
        <iframe
          style={{ width: "100%", height: "100%", aspectRatio: "16 / 9" }}
          src={`https://www.youtube.com/embed/${data.player.embedCode}`}
        ></iframe>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h3">
          <b>{data.player.name}</b>
        </Typography>
        <br />
        <br />
        <Typography>
          <b>Genre :</b> &nbsp; Action, Drama, Thriller
        </Typography>
        <br />
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          dolorum ullam fugit autem repellendus itaque, repellat rerum ipsum
          sequi dignissimos nisi officiis temporibus debitis minima fugiat
          pariatur natus sint vero et obcaecati recusandae vel. Voluptates
          voluptatem, a est maiores corporis aut voluptatibus amet tempora
          perferendis assumenda sequi quia dolores error sed facere dolorum quas
          consequatur molestias atque tempore numquam doloribus dolor!
          Asperiores, natus. Fuga provident eos, molestias enim, officiis autem
          quibusdam, praesentium fugit dolorem incidunt similique cupiditate
          nemo corporis. Consequuntur, illum doloribus. Deserunt debitis, facere
          aliquid ipsa praesentium eaque sint nesciunt voluptates! Enim voluptas
          adipisci corporis debitis eligendi nemo explicabo?
        </Typography>
      </Container>
      <Container maxWidth="xl" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h5">Recommended Shows</Typography>
        <br />
        <Swiper modules={[Navigation]} slidesPerView={5} navigation>
          {data.recommended.map((e, index) => {
            return (
              <SwiperSlide key={index}>
                <Link href={`/player/${e.id}`}>
                  <Box sx={{ p: 1 }}>
                    <img src={e.image} alt="Card" />
                  </Box>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`${process.env.API_URL}/player/${id}`);
  const data = await res.json();

  return { props: { data } };
}

export default Player;
