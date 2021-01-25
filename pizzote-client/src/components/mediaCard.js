import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import test from '../assets/images/test.jpg';

import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles({
    root: {
        minWidth: ' 20%',
        maxWidth: ' 20%',
        margin: '2.5%',
        backgroundColor: '#181a1b',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    comments: {
        marginTop: '0.5%',
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
        color: '#cac6c1',
    },
})(Typography);

const MediaCard = (props) => {
    var cards = [];
    const classes = useStyles();
    for (let i = 0; i < Object.size(props.pizzaDataList); i++) {
        if (i < 12) {
            cards.push(
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={test}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <WhiteTextTypography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                {props.pizzaDataList[i].RestaurantName}
                            </WhiteTextTypography>
                            <WhiteTextTypography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                <b>Type: </b>
                                {props.pizzaDataList[i].Type}{' '}
                                <b> Waiting Time: </b>
                                {props.pizzaDataList[i].WaitTime.slice(3)}
                            </WhiteTextTypography>
                            <WhiteTextTypography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                <b>Price: </b>
                                {props.pizzaDataList[i].Price} <b> Rating: </b>
                                {props.pizzaDataList[i].Rating}
                            </WhiteTextTypography>
                            <WhiteTextTypography className={classes.comments}>
                                {props.pizzaDataList[i].Comments}
                            </WhiteTextTypography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            );
        }
    }
    var items = [];
    for (let i = 0; i < cards.length; i = i + 4) {
        items.push({
            card1: cards[i],
            card2: cards[i + 1],
            card3: cards[i + 2],
            card4: cards[i + 3],
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
        <div style={{ display: 'flex' }}>
            {props.item.card1}
            {props.item.card2}
            {props.item.card3}
            {props.item.card4}
        </div>
    );
}

export default MediaCard;
