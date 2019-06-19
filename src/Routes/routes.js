import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from '../Containers/Login/login';
import Profile from '../Containers/Layout/player-Layout';
import PitchProfile from '../Containers/Layout/pitch-Layout';
import Mytrophies from "../Components/myTrophies/myTrophies";
import MainPage from '../Containers/Mainpage/main-Page';
import Register from '../Containers/Register/register';
import CreatePlayer from '../Containers/Create-player/create-player';
import CreatePitch from '../Containers/Create-Pitch/createPitch';
import CardList from '../Containers/Card-Search-List/cardList';
import CollectionLayout from "../Containers/Layout/collection_layout";
import PlayerPitchCreation from "../Components/Player-PitchCreation/Player-PitchCreation"

const routes = (
  <Switch>
    <Route path="/main" component={MainPage} />
    <Route path="/login" component={Login} />
    <Route path="/pitch/:pitchId" component={PitchProfile} />
    <Route path="/register" component={Register} />
    {/* <Route path="/profile" component={Profile} /> */}
    <Route path="/profile/:playerId" component={Profile} />
    <Route path="/trophies/:id" component={Mytrophies} />
    <Route path="/createplayer" component={CreatePlayer} />
    <Route path="/createpitch" component={CreatePitch} />
    <Route path="/searchresult" component={CardList} />
    {/* <Route path="/collection" component={CollectionLayout} /> */}
    <Route path="/creation" component={PlayerPitchCreation} />

    <Route path="/" component={MainPage} />
  </Switch>
);
export default routes;