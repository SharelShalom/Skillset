import RenderTabs from './renderForm/RenderTabs';
import './App.css';
import pages from './data/HomeTest'

function App() {

  return (
    <div className="App">
      <RenderTabs tabs={pages.simulation.children}/>
    </div>
  );
}

export default App;
