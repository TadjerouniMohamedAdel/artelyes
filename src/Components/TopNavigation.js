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
import { artelyesLogo, top } from '../Images';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:"white",
    // backgroundImage: `url(${artelyesLogo})`
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
  const [linkActive,setLink] = React.useState(0)

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
        style={{width:"100%",backgroundColor:"white",boxShadow:"none"}}
      >
        <Toolbar style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
          
          <div className="first-nav-part">
            <IconButton
              style={{flex:1,color:"#d4af37"}}
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
              >
              <MenuIcon />
            </IconButton>
            <div style={{marginTop:-20,marginBottom:-30}}>
            <Link   onClick={() => {handleDrawerClose();setLink(0)}} to="/">
                <img src={artelyesLogo} className="arteleyes-logo"/>
            </Link>
            </div>

          </div>
          <Hidden only={"xs"}>
        <div
            className="navbar-tabs"
           
        >
          <span className="artist-font navbar-item">
              <Link  className={"navbar-item-link"+(linkActive == 0 ? " active-link" : "")} onClick={() => {handleDrawerClose();setLink(0)}} to="/">
                  Acceuil
              </Link>
          </span> 
          <span className="artist-font navbar-item">
              <Link  className={"navbar-item-link"+(linkActive == 1 ? " active-link" : "")} onClick={() => {handleDrawerClose();setLink(1)}} to="/artist">
                  Artiste
              </Link>
          </span>
          <span className="artist-font navbar-item">
              <Link  className={"navbar-item-link"+(linkActive == 2 ? " active-link" : "")} onClick={() => {handleDrawerClose();setLink(2)}} to="/projects">
                  Oeuvres
              </Link>
          </span>
          <span className="artist-font navbar-item">
              <Link  className={"navbar-item-link"+(linkActive == 3 ? " active-link" : "")} onClick={() => {handleDrawerClose();setLink(3)}} to="/contacts">
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
        {/* <List>
         
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

        
         
     </List> */}
     <div
            className="navbar-tabs-drawer"
           
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
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Container maxWidth={false}>
            <div style={{flex:1,textAlign:"center",marginTop:20}}>
              <img src={top} style={{textAlign:"center"}} width={1200} height={150}/>
            </div>
            <Router />


        </Container>
      </main>
    </div>
  );
}
