import React, {useState} from 'react';
import {
    Drawer,
    Divider,
    List,
    ListItem,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HelpIcon from '@material-ui/icons/Help';
import { NavLink } from "react-router-dom";

const isExcludedKey = (event: React.KeyboardEvent | React.MouseEvent) => event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift');

function Navigation() {
    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (isExcludedKey(event)) {
            return;
        }

        setDrawer(isOpen);
    };

    return <AppBar position="sticky">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>

            <Drawer open={drawer} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem button component={NavLink} to="/" onClick={toggleDrawer(false)}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/investment-calculator" onClick={toggleDrawer(false)}>
                        <ListItemIcon><TrendingUpIcon /></ListItemIcon>
                        <ListItemText primary="Investment Calculator" />
                    </ListItem>
                </List>

                <Divider />
                
                <List>
                    <ListItem button component={NavLink} to="/information" onClick={toggleDrawer(false)}>
                        <ListItemIcon><HelpIcon /></ListItemIcon>
                        <ListItemText primary="Information" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/contact" onClick={toggleDrawer(false)}>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </List>
            </Drawer>

            <Typography variant="h6">Something</Typography>
        </Toolbar>
    </AppBar>;
};
  
export default Navigation;
  