// Import Nav
import Nav from "./components/Nav";
// Import Header
import Header from "./components/Header";
// Import Gallery
import Gallery from "./components/Gallery";
// Import Data
import Data from "./data.json";
console.log(Data);

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Gallery />
    </div>
  );
}

export default App;
