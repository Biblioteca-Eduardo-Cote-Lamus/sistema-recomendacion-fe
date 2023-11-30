import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRef } from "react";
import Webcam from "react-webcam";
import { CardId, User } from "./components/CardId";
import { useBooks } from "./hooks/useBooks";
import { BookCard } from "./components/BookCard";

export const App = () => {
  const camRef = useRef(null);
  const { user, books, loading, fetchBooks } = useBooks();

  const capture = () => {
    const imageSrc = camRef.current.getScreenshot();

    fetchBooks(imageSrc);
  };

  return (
    <Box component="section"  sx={{width: '90%', maxWidth: '1200px', margin:'auto'}}>
      <Grid container component="section" spacing={2} >
        <Grid item xs={12} md={6}>
          <Box
            component="div"
            sx={{ mb: 2 }}
            display="flex"
            flexDirection="column"
          >
            <Webcam screenshotFormat="image/jpeg" ref={camRef} />
            <Button variant="contained" onClick={capture} sx={{ marginTop: 2 }}>
              Tomar foto
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardId user={user!} loading={loading} />
        </Grid>
      </Grid>

      <Typography variant="h4" component="h1" align="center" sx={{ margin: 2 }}>
        {" "}
        Listado de Libros{" "}
      </Typography>    
        <BookCard books={books} />
    </Box>
  );
};
