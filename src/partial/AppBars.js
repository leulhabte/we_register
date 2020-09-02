import React from 'react';
import {AppBar, Toolbar, Typography, Box, Hidden, Drawer, List, ListItem, ListItemText, IconButton} from '@material-ui/core';
import useStyles from '../config/Styling';
import {Menu} from '@material-ui/icons';
import {Link} from 'react-router-dom';

const AppBars = ()=>{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const _handleOpen = ()=>{
        setOpen(!open);
    }
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
      _handleOpen();
    };

    const menuItem = (
        <List>
            <Link to="/edit" className={classes.listText}>
            <ListItem
                button
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
            >
                <ListItemText>
                    <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                        <Typography className={classes.linkNav}>Edit business detail</Typography>
                    </Box>
                </ListItemText>
            </ListItem>
            </Link>
            <Link to="/review" className={classes.listText}>
            <ListItem
                button
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
            >
                <ListItemText>
                    <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                        <Typography className={classes.linkNav}>Review comments</Typography>
                    </Box>
                </ListItemText>
            </ListItem>
            </Link>
            <Link to="/manmenu" className={classes.listText}>
            <ListItem
                button
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
            >
                <ListItemText>
                    <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                        <Typography className={classes.linkNav}>Manage menu</Typography>
                    </Box>
                </ListItemText>
            </ListItem>
            </Link>
            <Link to="/manphoto" className={classes.listText}>
            <ListItem
                button
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
            >
                <ListItemText>
                    <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                        <Typography className={classes.linkNav}>Manage photos</Typography>
                    </Box>
                </ListItemText>
            </ListItem>
            </Link>
            <Link to="/acc" className={classes.listText}>
            <ListItem
                button
                selected={selectedIndex === 4}
                onClick={(event) => handleListItemClick(event, 4)}
            >
                <ListItemText>
                    <Box display="flex" justifyContent="flex-start" paddingLeft={5} paddingY={1}>
                        <Typography className={classes.linkNav}>Account</Typography>
                    </Box>
                </ListItemText>
            </ListItem>
            </Link>
        </List>
    );
    const menuHeader = (
        <div>
            <Box display='flex' className={classes.navHead} justifyContent='center' p={2}>
                <Typography variant='h6'>Menu</Typography>
            </Box>
        </div>
    );
    return(
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton onClick={_handleOpen}><Menu className={classes.menu}/></IconButton>
                    <Box width={20}/>
                    <Box display="flex" justifyContent="flex-start">
                        <Typography className={classes.appTitle}>Wedet Ethio</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Hidden xsDown>
                    <Drawer
                        open={open}
                        onClose={_handleOpen}
                        classes={{paper: classes.drawer}}
                        variant="temporary"
                    >
                        {menuHeader}
                        <Box height={70}/>
                        {menuItem}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

export default AppBars;