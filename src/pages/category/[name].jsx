import Link from "next/link";
import { Navigation, Autoplay } from "swiper";
import { PlayArrow } from "@mui/icons-material";
import style from "/src/styles/style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";

function Category({ data }) {
  return (
    <>
      <section
        className={style.top_sec}
        style={{ backgroundImage: `url(${data.topSec.image})` }}
      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item md={6}>
              <Box mt={10}>
                <Typography variant="h2">
                  <b>{data.topSec.name}</b>
                </Typography>
                <br />
                <Typography>
                  <b>Hindi || Action, Drama, Spy</b>
                </Typography>
                <br />
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus recusandae ipsa cupiditate quibusdam corporis!
                  Earum debitis accusantium architecto enim asperiores ullam
                  pariatur. Magni quaerat labore culpa assumenda praesentium
                  officia facere?
                </Typography>
                <br />
                <br />
                <Link href={`/player/${data.topSec.id}`}>
                  <Button variant="contained" color="error">
                    <PlayArrow />
                    &nbsp;&nbsp;&nbsp;
                    <b>Play Now</b>
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <br />
      <br />
      <br />
      <Container maxWidth="xl">
        <Typography variant="h5">Featured Shows</Typography>
        <br />
        <Grid container spacing={1}>
          {data.featured.map((e, index) => {
            return (
              <Grid key={index} item md={2}>
                <Link href={`/player/${e.id}`}>
                  <div className={style.item}>
                    <img src={e.image} alt="Card" />
                  </div>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      {data.sections.map((e, index) => {
        return (
          <Box key={index}>
            <Container maxWidth="xl">
              <Typography variant="h5">{e.label}</Typography>
              <br />
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={5}
                navigation
                autoplay
              >
                {e.data.map((e, index) => {
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
            <br />
            <br />
            <br />
          </Box>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { name } = context.params;
  const pages = ["home", "news", "kids", "shows", "music", "movies"];

  if (!pages.includes(name)) {
    return { notFound: true };
  }

  const res = await fetch(
    `https://ott-backend-t3a7.onrender.com/category/${name}`
  );
  const data = await res.json();

  return { props: { data } };
}

export default Category;
