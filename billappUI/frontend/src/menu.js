import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import PaymentIcon from '@material-ui/icons/Payment';
import {BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import Customer from './Components/customers/customer'
import dashboard from './Components/dashboard/dashboard'
import Payment from './Components/payment/payment'
import indCus from './Components/customers/indCus'
import DrawerForm from './Components/Form/Form2'
import 'antd/dist/antd.css';
import { Popover, Button } from 'antd';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin panel
          </Typography>
          {/* <DrawerForm /> */}
        </Toolbar>
       
      </AppBar>
      <BrowserRouter>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        
        <List>
   
     
          <ListItem>
          
          <Link to={'/dashboard'}> <ListItemIcon style={{cursor:"pointer"}}><DashboardIcon/></ListItemIcon></Link>
              <Link to={'/dashboard'}>Dashboard</Link>
              
            </ListItem>
           
            <ListItem>
            
            <Link to = {'/allcustomers'}><ListItemIcon style={{cursor:"pointer"}}><PeopleIcon/></ListItemIcon></Link>
              <Link to = {'/allcustomers'}>Cutomers</Link>
            </ListItem>
            <ListItem>
            <Link to = {'/payments'}><ListItemIcon style={{cursor:"pointer"}}><PaymentIcon/></ListItemIcon></Link >
              <Link to = {'/payments'}>Payments</Link >
            </ListItem>
            <ListItem>
            <Link to = {'/projects'}> <ListItemIcon style={{cursor:"pointer"}}><PaymentIcon/></ListItemIcon></Link >
              <Link to = {'/projects'}>Projects</Link >
            </ListItem>
            <ListItem>
            <Link to = {'/billing'}><ListItemIcon style={{cursor:"pointer"}}><PaymentIcon/></ListItemIcon></Link >
              <Link to = {'/billing'}>Billing</Link >
            </ListItem>
           
        </List>
        
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Typography paragraph>
          Dashboard coming soon
        </Typography> */}
        
        <Route path='/dashboard' component = {dashboard}/>
             <Route exact path='/allcustomers' component = {Customer}/>
             <Route exact path='/payments' component = {Payment}/>
             <Route exact path='/projects' component = {dashboard}/>
             <Route exact path='/billing' component = {dashboard}/>
             <Route exact path='/allcustomers/:id' component = {indCus}/>
      
        
      </main>
      </BrowserRouter>
    </div>
  );
}
