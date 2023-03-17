import Link from "next/link";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Grid, Container, Box, Typography, IconButton } from "@mui/material";

export const Footer = () => {
  return (
    <footer>
      <Container maxWidth="xl" sx={{ mb: 5, mt: 10 }}>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Link href="/">
              <img
                style={{ height: "2.5rem", width: "auto" }}
                src="/logo.png"
                alt="Logo"
              />
            </Link>
            <br />
            <br />
            <br />
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              laudantium quae, corporis laboriosam alias, voluptatibus tempora
              non nam, corrupti veritatis magni repudiandae nemo tenetur
              possimus eius dolorum omnis impedit sed?
            </Typography>
            <br />
            <br />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Follow us on :</Typography>
              &nbsp; &nbsp; &nbsp;
              <Link href="#">
                <Facebook color="error" />
              </Link>
              &nbsp; &nbsp; &nbsp;
              <Link href="#">
                <Instagram color="error" />
              </Link>
              &nbsp; &nbsp; &nbsp;
              <Link href="#">
                <Twitter color="error" />
              </Link>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box sx={{ textAlign: "center" }}>
              <Typography>
                <b>Company</b>
              </Typography>
              <br />
              <br />
              <Link href="/about">
                <Typography sx={{ mb: 1 }}>About Us</Typography>
              </Link>
              <Link href="/contact">
                <Typography sx={{ mb: 1 }}>Contact Us</Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box sx={{ textAlign: "center" }}>
              <Typography>
                <b>Quick Links</b>
              </Typography>
              <br />
              <br />
              <Link href="/">
                <Typography sx={{ mb: 1 }}>Home</Typography>
              </Link>
              <Link href="/category/shows">
                <Typography sx={{ mb: 1 }}>Shows</Typography>
              </Link>
              <Link href="/category/movies">
                <Typography sx={{ mb: 1 }}>Movies</Typography>
              </Link>
              <Link href="/category/news">
                <Typography sx={{ mb: 1 }}>News</Typography>
              </Link>
              <Link href="/category/kids">
                <Typography sx={{ mb: 1 }}>Kids</Typography>
              </Link>
              <Link href="/category/music">
                <Typography sx={{ mb: 1 }}>Music</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <hr />
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography>
          <b>Copyright © All Rights Reserved</b>
        </Typography>
      </Box>
    </footer>
  );
};
