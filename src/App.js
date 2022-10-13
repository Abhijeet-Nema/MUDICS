import MusicPlayer from "./components/MusicPlayer";
import Navbar from "./components/Navbar";
import PlayList from "./components/PlayList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let current = {
    name: "Kesariya (Bhramastra)",
    path: "./music/happy/kesariya.mp3",
    cover: "./covers/kesariya.jpg",
    artists: "Arijit Singh, Pritam"
  };
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/happy">
          <PlayList key="happy" category="happy" />
        </Route>
        <Route exact path="/sad">
          <PlayList key="sad" category="sad" />
        </Route>
      </Switch>
      {/* <PlayList category="sad" /> */}
      <MusicPlayer playingSong={current} />
    </Router>
  );
}

export default App;
