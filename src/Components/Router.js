import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Landing'
import Contacts from './Contacts'
import Artist from './Artist'

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
                <Route path="/">
                    <Landing />
                </Route>
            </Switch>
        </div>
    )
}
