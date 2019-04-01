import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './../Pages/Home/Home'
import Dashboard from './../Pages/Dashboard/Dashboard'
import Classroom from './../Pages/Classroom/Classroom'
import LoginModal from "../Containers/LoginModal/LoginModal";
import RegisterModal from "../Containers/RegisterModal/RegisterModal";
import AddCourseModal from './../Containers/AddCourseModal/AddCourseModal';
import BrowseClasses from '../Pages/BrowseClasses/BrowseClasses';
import ClassView from '../Pages/BrowseClasses/ClassView/ClassView';

export default (
  <Switch>
      <Route path='/browseclasses/:course_id' component={ClassView}/>
      <Route path='/browseclasses' component={BrowseClasses}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/classroom/:course_id' component={Classroom}/>
      <Route path='/addCourse' component={AddCourseModal}/>
      <Route path='/' component={Home}/>
  </Switch>
);