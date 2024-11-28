import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home.jsx";
import Chat from "../pages/chat.jsx";
import Register from "../pages/register.jsx";
import Finish from "../pages/finish.jsx"


export default () => (
  <Switch>
    <Route path="/" component={Home}></Route>
    <Route path="/@me" component={Chat}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/finish" component={Finish}></Route>

  </Switch>
);
