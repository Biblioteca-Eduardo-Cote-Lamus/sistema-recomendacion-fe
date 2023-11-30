import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
} from "@mui/material";

export interface User {
  code: string;
  name: string;
  email: string;
  profile?: string;
}

interface Props {
  user: User;
  loading: boolean;
}

const Content = ({ user }: { user: User }) => {
  return (
    <Grid container component="section">
      <Grid item xs={12}>
        <img
          src="/logo-horizontal.jpg"
          alt="log upds"
          width="100%"
          height="150px"
        />
      </Grid>
      <Grid item xs={6} container justifyContent="center">
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            objectFit: "scale-down",
            borderRadius: 2,
            md: { margin: " 0 auto 1rem" },
          }}
          image={user.profile || "no-user.png"}
          alt={user.name || "no-user.png"}
        />
      </Grid>
      <Grid item md={6}>
        <Box
          component="div"
          sx={{ mb: 2, padding: ".6rem" }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box component="div" sx={{ mb: 2 }}>
            <strong>Nombre: </strong>
            {user.name}
          </Box>
          <Box component="div">
            <strong>Código: </strong>
            {user.code}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export const CardId = ({ user, loading }: Props) => {
  return (
    <Card>
      <CardContent>
        {loading ? (
          <Grid container>
            {/* logo ufps */}
            <Grid item xs={12}>
              <Skeleton
                animation="wave"
                variant="rounded"
                width="100%"
                height={40}
                sx={{ marginBottom: 2 }}
              />
            </Grid>
            {/* card  */}
            <Grid item xs={6}>
              <Skeleton
                animation="wave"
                variant="rounded"
                width="80%"
                height={200}
                sx={{ margin: "auto" }}
              />
            </Grid>
            <Grid container item xs={6} alignContent="center" gap={3}>
              <Skeleton animation="wave" width="100%" height={20} />
              <Skeleton animation="wave" width="100%" height={20} />
              <Skeleton animation="wave" width="100%" height={20} />
            </Grid>
          </Grid>
        ) : (
          <Content user={user} />
        )}
      </CardContent>
    </Card>
  );
};
