import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

export interface Book {
  author: string;
  genre: string;
  link: string;
  publisher: string;
  title: string;
}

interface Props {
  books: Book[];
}

export const BookCard = ({ books }: Props) => {
  return (
    <Grid container component="section" spacing={2}>
      {books.map((book, index) => (
        <Grid item xs={12} md={3} key={index}>
          <Card>
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                borderRadius: 2,
              }}
              image={book.link}
              alt={book.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Autor: </strong>
                {book.author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Editorial: </strong>
                {book.publisher}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Género: </strong>
                {book.genre}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
