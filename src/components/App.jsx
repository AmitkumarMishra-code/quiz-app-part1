import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

  import Quiz from './Quiz'
  import Results from './Results'

  export default function App(){
      return (
        <Router>
            <Switch>
          <Route exact path="/">
            <Quiz />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/404">
            <h1>Page Not Found</h1>
          </Route>
          <Redirect to = "/404"/>
        </Switch>
        </Router>
      )
  }