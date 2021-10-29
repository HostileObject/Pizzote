import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import test from "../assets/images/test.jpg";
import Carousel from "react-material-ui-carousel";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    margin: "2.5%",
    backgroundColor: "#222222",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  comments: {
    marginTop: "0.5%",
  },
});

Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

const WhiteTextTypography = withStyles({
  root: {
    // color: "#cac6c1",
  },
})(Typography);

const MediaCard = (props) => {
  var cards = [];
  const classes = useStyles();
  for (let i = 0; i < Object.size(props.pizzaDataList); i++) {
    if (i < 12) {
      cards.push(
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={test}
                title="Contemplative Reptile"
              />
              <CardContent>
                <WhiteTextTypography gutterBottom variant="h5" component="h2">
                  {props.pizzaDataList[i].restaurantName}
                </WhiteTextTypography>
                <WhiteTextTypography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  <b>Type: </b>
                  {props.pizzaDataList[i].type} <b> Rating: </b>
                  {props.pizzaDataList[i].rating}
                </WhiteTextTypography>
                <WhiteTextTypography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  <b>Price: </b>
                  {props.pizzaDataList[i].price} <b> Time Waited: </b>
                  {props.pizzaDataList[i].waitTime}
                </WhiteTextTypography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      );
    }
  }
  var items = [];
  for (let i = 0; i < cards.length; i = i + 4) {
    items.push({
      cardPage1: cards[i],
      cardPage2: cards[i + 1],
      cardPage3: cards[i + 2],
      cardPage4: cards[i + 3],
    });
  }

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};
function Item(props) {
  return (
    <Grid container>
      {props.item.cardPage1}
      {props.item.cardPage2}
      {props.item.cardPage3}
      {props.item.cardPage4}
    </Grid>
  );
}

export default MediaCard;
