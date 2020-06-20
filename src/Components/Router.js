import React,{useContext} from 'react'
import {Switch, Route,__RouterContext,withRouter} from 'react-router-dom'
import Landing from './Landing'
import Contacts from './Contacts'
import Artist from './Artist'
import Projects from './Projects'
import {useSpring, useTransition,animated,config} from 'react-spring'


 const Router = function ({ updatelinkActive}) {
    const {location} = useContext(__RouterContext)
    const transition = useTransition(location,location => location.pathname,{
        from:{
            opacity:0,
        },
        enter:{
            opacity:1,
        },
        leave:{
            opacity:0,
        },


    })
    return (
        <div>
            {transition.map(({item,props,key})=>(
                <animated.div key={key} style={props}>
                     <Switch location={item}>
                <Route path="/artist">
                    <Artist updatelinkActive={updatelinkActive}/>
                </Route>
                <Route path="/contacts">
                    <Contacts updatelinkActive={updatelinkActive}/>
                </Route>
                <Route path="/projects">
                    <Projects updatelinkActive={updatelinkActive}/>
                </Route>
                <Route path="/">
                    <Landing updatelinkActive={updatelinkActive}/>
                </Route>
            </Switch>
                </animated.div> 
            ))}
           
        </div>
    )
}
export default withRouter(Router)