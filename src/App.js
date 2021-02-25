import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Route, Switch } from "react-router-dom";
import Table from './components/Table/Table';
import Item from './components/Item/Item';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Table} />
        <Route path='/news/:id' component={Item} />
        <Redirect to={'/'} />
      </Switch>
    </div>
  );
}

export default App;
