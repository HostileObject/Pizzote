import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '3%',
        borderRadius: '10px',
    },
    title: {
        flexGrow: 1,
        padding: '0.5% 3%',
        fontSize: '35px',
        color: '#81bff2',
    },
}));

export default function TitleHeader(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <hr />
            <div id={props.title}>
                <Typography
                    color="primary"
                    variant="h5"
                    className={classes.title}
                >
                    {props.title}
                </Typography>
            </div>
            <hr />
        </div>
    );
}
