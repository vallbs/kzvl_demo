import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Toolbar';
// import Toolbar from '@material-ui/core/Toolbar';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
};

function HeaderAppBar(props) {
    const { classes } = props;
    return (
        <AppBar position="static">
            <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography color="inherit" className={classes.grow}>
                Столичка
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(HeaderAppBar);

