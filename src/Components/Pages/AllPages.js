import React from 'react'
import AtelPage from './AtelierPage/AtelPage'
import DecouvPage from './DecouvertePage/DecouvPage'
import LudPage from './LudiquePage/LudPage'
import CompteParam from './CompteParams/CompteParam'
import ReastauPage from './RestauPage/ReastauPage'
import SportPage from './SportPage/SportPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FirstPage from '../firstPage/FirstPage'
import Busreserve from './Busreserve/Busreserve'


function Pages() {
    return(
    <Router>
        <div className='allPages'>
            
                <Switch>             
            <Route path='/' exact component={FirstPage}/>
           <Route path='/AtelierPage'  component={AtelPage}/>
           <Route path='/Compte' component={CompteParam}/>
           <Route path='/ReastaurantsPage' component={ReastauPage}/>
           <Route path='/SportPage' component={SportPage}/>
           <Route path='/LudiquePage' component={LudPage}/>
           <Route path='/DecouvertPage' component={DecouvPage}/>
           <Route path='/Transport-reservation' component={Busreserve}/>
                </Switch>
        </div>
    </Router>

        )
}

export default Pages
