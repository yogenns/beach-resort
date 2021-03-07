import './App.css';
import Error from './pages/Error'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import { BrowserRouter as Router, Router, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
  return (
    <Router >
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/rooms" component={Rooms} exact />
        <Route path="/rooms/:slug" component={SingleRoom} exact />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
