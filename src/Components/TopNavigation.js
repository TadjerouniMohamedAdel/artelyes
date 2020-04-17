import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Router from './Router';
import {Tab,Tabs, Hidden} from '@material-ui/core'
import {Link} from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{width:"100%",backgroundColor:"white"}}
      >
        <Toolbar style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
          <div>

          <IconButton
            style={{color:"#d4af37"}}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{display:"inline",color:"#d4af37",fontFamily:"Playfair Display, serif",fontStyle:"italic"}}>
            Artelyes
          </Typography>
          </div>
          <Hidden only={"xs"}>
        <div
            className="navbar-tabs"
            indicatorColor="primary"
            textColor="primary"
        >
          <span className="artist-font navbar-item">
              <Link  className="navbar-item-link" onClick={() => handleDrawerClose()} to="/">
                  Acceuil
              </Link>
          </span> 
          <span className="artist-font navbar-item">
              <Link  className="navbar-item-link" onClick={() => handleDrawerClose()} to="/artist">
                  Artiste
              </Link>
          </span>
          <span className="artist-font navbar-item">
              <Link  className="navbar-item-link" onClick={() => handleDrawerClose()} to="/projects">
                  Oeuvres
              </Link>
          </span>
          <span className="artist-font navbar-item">
              <Link  className="navbar-item-link" onClick={() => handleDrawerClose()} to="/contacts">
                  Contact
              </Link>
          </span>
        </div>
        </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List>
         
         <Link  onClick={() => handleDrawerClose()} to="/" style={{textDecoration:"none",color:"black"}}>
             <ListItem button key={"home"}>
             <ListItemText primary={"Home"} />
             </ListItem>
         </Link>
         <Link  onClick={() => handleDrawerClose()} to="/artist" style={{textDecoration:"none",color:"black"}}>
             <ListItem button key={"Artist"}>
             <ListItemText primary={"Artist"} />
             </ListItem>
         </Link>
         <Link  onClick={() => handleDrawerClose()} to="/projects" style={{textDecoration:"none",color:"black"}}>
             <ListItem button key={"Oeuvres"}>
             <ListItemText primary={"Oeuvres"} />
             </ListItem>
         </Link>
         <Link  onClick={() => handleDrawerClose()} to="/contacts" style={{textDecoration:"none",color:"black"}}>
             <ListItem button key={"Contacts"}>
             <ListItemText primary={"Contacts"} />
             </ListItem>
         </Link>

        
         
     </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Container maxWidth={false}>
            <Router />

        </Container>
      </main>
    </div>
  );
}
