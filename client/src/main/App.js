import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Route } from "react-router-dom"

import Navbar from "../components/navbar.component"
import ExerciseList from "../components/exercise-list.component"
import EditExercise from "../components/edit-exercise.component"
import CreateExercise from "../components/create-exercise.component"
import CreatePlayer from "../components/create-player.component"
import ShowPlayers from "../components/show-players.component"

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path = "/" exact component = {ExerciseList} />
      <Route path = "/edit/:id" exact component = {EditExercise} />
      <Route path = "/create" component = {CreateExercise} />
      <Route path = "/player" component = {CreatePlayer} />
      <Route path = "/showplayers" component = {ShowPlayers} />
    </Router>
  );
}

export default App;
