import "./stylesheets/App.css";
import RandomQuote from "./component/RandomQuote";
import Navbar from "./component/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <RandomQuote />
      </div>
    </>
  );
}

export default App;
