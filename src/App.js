import './App.css';

// import {PythonShell} from 'python-shell';
// let {PythonShell} = require('python-shell')
// import {PythonShell} from 'python-shell';


function App() {
  const { ipcRenderer } = window.require('electron')

  let temp1 = ipcRenderer.sendSync('temp1')

  return (
    <div>
      <div>
        Detected device: {temp1}
      </div>
    </div>
  );
}

export default App;
