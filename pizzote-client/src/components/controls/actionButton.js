import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 0,
        margin: theme.spacing(0.5),
    },
    secondary: {
        backgroundColor: '#d21f3c',
        '& .MuiButton-label': {
            color: '#fff',
        },
    },
    primary: {
        backgroundColor: '#87c9ff',
        '& .MuiButton-label': {
            color: '#fff',
        },
    },
}));

export default function ActionButton(props) {
    const { color, children, onClick } = props;
    const classes = useStyles();

    return (
        <Button
            className={`${classes.root} ${classes[color]}`}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}
