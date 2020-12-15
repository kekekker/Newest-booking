import Navbar from './components/navbar'
import Create from './pages/Create'
import {Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
   <div>
     <Navbar/>
     <Switch>
        <Route path="/" exact>
            {/* <List /> */}
        </Route>
        <Route path="/Create">
            <Create />
        </Route>
        <Route path="/Room/:id" >
            {/* <Room /> */}
        </Route>
        <Route path="/Edit/:id" >
             {/* <Edit /> */}
        </Route>
            <Redirect to="/List" />
        </Switch>
    </div>
  );
}

export default App;
