import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from '../../views/contents/Home'
import Sobre from '../../views/contents/Sobre'
import Alunos from '../../views/contents/Alunos'


const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/sobre">
                <Sobre />
            </Route>
            <Route path="/alunos">
                <Alunos />
            </Route>
        </Switch>
    </main>
)
export default Content