import React from 'react';
import './App.css';
import AppBars from './partial/AppBars';
import Login from './user/Login';
import useStyles from './config/Styling';
import MenuScreen from './routes/MenuScreen';
import NewRestaurant from './routes/NewResturant'; 
import EditRestaturant from './routes/EditRestaurant';
import ReviewComm from './routes/ReviewComments';
import ManageMenu from './routes/ManageMenu';
import Editmenu from './sub_routes/Editmenu';
import AddMenu from './sub_routes/AddMenu';
import Account from './user/Account';
import ManagePhotos from './routes/ManagePhotos';
import {AppBar, Typography, Container} from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ManageMeun from './routes/ManageMenu';

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
          <div className={classes.root}>
       <AppBars/> 
         <div className={classes.content}>
         <div className={classes.toolBar}/>
         <Switch>
           <Route path="/" exact component={Login}/>
           <Route path="/menu" exact component={MenuScreen}/>
           <Route path="/newr" exact component={NewRestaurant}/>
           <Route path="/edit" exact component={EditRestaturant}/>
           <Route path="/review" exact component={ReviewComm}/>
           <Route path="/manmenu" exact component={ManageMeun}/>
           <Route path="/editmenu" exact component={Editmenu}/>
           <Route path="/addmenu" exact component={AddMenu}/>
           <Route path="/acc" exact component={Account}/>
           <Route path="/manphoto" exact component={ManagePhotos}/>
         </Switch>
       </div>
    </div>
    </BrowserRouter>
  );
}
export default App; 