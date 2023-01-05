import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail"
// 초기에는 모든 영화 리스트를 보여줌(Home.js), 그러나 movie=1234 처럼 영화 선택 시 해당 영화를 보여줌(Detail.js)
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
