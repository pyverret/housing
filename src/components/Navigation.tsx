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

function Navigation() {
    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
    
            setDrawer(isOpen);
        };

    return <AppBar position="sticky">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon onClick={toggleDrawer(true)} />
                    <Drawer open={drawer} onClose={toggleDrawer(false)}>
                        <List>
                            <ListItem button component={NavLink} to="/">
                                <ListItemIcon><HomeIcon /></ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <ListItem button component={NavLink} to="/compound-interest-calculator">
                                <ListItemIcon><TrendingUpIcon /></ListItemIcon>
                                <ListItemText primary="Compound Interest" />
                            </ListItem>
                        </List>

                        <Divider />
                        
                        <List>
                            <ListItem button component={NavLink} to="/information">
                                <ListItemIcon><HelpIcon /></ListItemIcon>
                                <ListItemText primary="Information" />
                            </ListItem>
                            <ListItem button component={NavLink} to="/contact">
                                <ListItemIcon><MailIcon /></ListItemIcon>
                                <ListItemText primary="Contact" />
                            </ListItem>
                        </List>
                    </Drawer>
            </IconButton>

            <Typography variant="h6">Something</Typography>
        </Toolbar>
    </AppBar>;
};
  
export default Navigation;
  