import React, {Component} from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'




class App extends Component {

    render() {
        return(
            <div className="App">

        <Router>
            <Menu />
            <Content />
        </Router>

            

            </div>
        )
    }
    
}

/*const App = props => (
    <div className="App">
        <Router>
            <Menu />
            <Content />
        </Router>
    </div>




import React, {Component} from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import Estado from '../components/basico/Estado'
import Card from '../components/layout/Card'



class App extends Component {

    render() {
        return(
            <div className="App">

<Router>
            <Menu />
            <Content />
        </Router>

            <div className="Cards" >

                <Card titulo="Estado" cor="#ffb400">
                    <Estado />
                </Card>
            </div>

            </div>
        )
    }
    
}

    
)*/

export default App