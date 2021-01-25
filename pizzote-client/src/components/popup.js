import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Controls from './controls/controls';

const useStyles = makeStyles((theme) => ({
    dialogWrapper: {
        padding: theme.spacing(2),
    },
    dialogTitle: {
        paddingRight: '0px',
    },
}));

export default function Popup(props) {
    const classes = useStyles();
    const {
        title,
        children,
        openPopup,
        setOpenPopup,
        currentID,
        setCurrentID,
    } = props;

    return (
        <Dialog
            open={openPopup}
            maxWidth="lg"
            classes={{ paper: classes.dialogWrapper }}
        >
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography
                        variant="h6"
                        component="div"
                        style={{ flexGrow: 1 }}
                    >
                        {title}
                    </Typography>
                    <Controls.ActionButton
                        color="secondary"
                        onClick={() => {
                            setOpenPopup(false);
                            setCurrentID(0);
                        }}
                    >
                        <CloseIcon />
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>{children}</DialogContent>
        </Dialog>
    );
}
