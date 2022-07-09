import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
      </div>
    </div>
  );
}

export default App;
