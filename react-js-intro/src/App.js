import './App.css';

let app='App'
let app_header='App-header'

function App() {
  console.log('constructing App Application')
  return (
    <div className={app}>
      <header className={app_header}>
        App Application
        <Demo></Demo>
      </header>
    </div>
  );
}

function Demo() {
  console.log('constructing Demo Application');
  return (
    <div className={app}>
      <header className={app_header}>
         Demo Application
      </header>
    </div>
  );
}

export default App;
