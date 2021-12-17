import AllUsers from './components/AllUsers/AllUsers';
import MenuBar from './components/MenuBar/MenuBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar />
        <h2>Anmälan till Trädgårdsdag</h2>
        <h4>Den XX juni 2021 kl 09-12</h4>
      </header>
      <div className='app-wrapper'>
        <AllUsers />
      </div>
    </div>
  );
}

export default App;
