import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import PauseIcon from "@material-ui/icons/Pause";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Stress from "../components/StressComponent";
import Relax from "../components/RelaxComponent";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" 
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

function Welcome() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PauseIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            A (not?) very relaxing website
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h6"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              A (not?) very relaxing website
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              This website was designed for Codaisseur with the intention of being
              helpful with combatting stress, or helping people who are too
              relaxed. Try it out and see for yourself!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
              <Grid item>
                  <Button variant="contained" color="secondary">
                    <Link color="inherit" href="http://localhost:3000/relax">
                      Are you (too) stressed?
                    </Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    <Link color="inherit" href="http://localhost:3000/stress">
                      Are you (too) relaxed?
                    </Link>
                  </Button>
                </Grid>
                
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item key={1} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://thumbs-prod.si-cdn.com/2tgS7DS-nibt7QIVjjP6a81H8VE=/800x600/filters:no_upscale():focal(652x167:653x168)/https://public-media.si-cdn.com/filer/ee/bc/eebc7565-839b-4a17-82ab-5f20a1bbf73f/h8cd2ygg-1501513898.jpg"
                  title="Stress"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    What is stress?
                  </Typography>
                  <Typography>
                  Stress is the body's reaction to any change that requires an adjustment or response. The body reacts to these changes with physical, mental, and emotional responses. Stress is a normal part of life. You can experience stress from your environment, your body, and your thoughts.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://my.clevelandclinic.org/health/articles/11874-stress"
                  >
                    Learn more
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={2} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="http://mindempowerhealing.com/wp-content/uploads/2018/10/meditation-810x500.jpg"
                  title="Meditation"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Meditation
                  </Typography>
                  <Typography>
                  Meditation is a simple technique that, if practiced for as few as 10 minutes each day, can help you control stress, decrease anxiety, improve cardiovascular health, and achieve a greater capacity for relaxation.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="https://www.webmd.com/balance/guide/meditation-natural-remedy-for-insomnia">
                    Learn more
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={3} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://elishagoldstein.com/assets/relax-4.jpg"
                  title="Too relaxed"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                  Too relaxed? What is relaxation-induced anxiety?
                  </Typography>
                  <Typography>
                  Relaxation-induced anxiety is a phenomenon that occurs when a person feels extremely uncomfortable, anxious, or agitated as a result of (actual or perceived) physical and/or psychological relaxation. 
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="https://mentalhealthdaily.com/2015/03/15/relaxation-induced-anxiety-potential-causes-solutions/">
                    Learn more
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>

        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          This website was made by Jelle. Template by Material-UI
        </Typography>
      </footer>
    </React.Fragment>
  );
}

export default Welcome;
