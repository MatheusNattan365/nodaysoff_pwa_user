import React from "react";
import { useHistory } from 'react-router-dom'

import firebase from 'firebase'

import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
    containerLogout: {
        flex: 1,
        position: "absolute"
    },
    btnLogout: {
        marginRight: 40,
        marginTop: 30
    }
}));



export default function BtnPages() {
    const classes = useStyles();
    const [anchorPages, setAnchorPages] = React.useState(null);
    const openPage = Boolean(anchorPages);

    let history = useHistory();


    // Configuração para abrir e fechar os submenus
    const handlePages = event => {
        setAnchorPages(event.currentTarget);
    };

    const handleClosePages = event => {
        console.log(event.target.value)
        setAnchorPages(null);
    };

    return (
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <IconButton
                aria-label="pages"
                aria-controls="menu-pages"
                aria-haspopup="true"
                onClick={handlePages}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-pages-appbar"
                anchorEl={anchorPages}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={openPage}
                onClose={handleClosePages}
            >
                <MenuItem onClick={handleClosePages}>Eventos</MenuItem>
                <MenuItem onClick={handleClosePages}>Sobre</MenuItem>
                <MenuItem onClick={handleClosePages}>Contatos</MenuItem>
            </Menu>
        </IconButton>
    );
}

