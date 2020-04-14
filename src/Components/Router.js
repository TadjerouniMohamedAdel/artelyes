import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Landing'
import Contacts from './Contacts'
import Artist from './Artist'
import Projects from './Projects'

export default function Router() {
    return (
        <div>
            <Switch>
                <Route path="/artist">
                    <Artist />
                </Route>
                <Route path="/contacts">
                    <Contacts />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/">
                    <Landing />
                </Route>
            </Switch>
        </div>
    )
}
