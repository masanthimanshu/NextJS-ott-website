import { Box, Container, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <Container>
      <Box
        height="50vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography>404 | Page Not Found</Typography>
      </Box>
    </Container>
  );
};

export default ErrorPage;
