import "./App.css";
import { Hero } from "./Hero";
import ErrorBoundry from "./ErrorBoundry";

function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <Hero heroName="Subodh" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="Gaurav" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="joker" />
      </ErrorBoundry>
    </div>
  );
}

export default App;
