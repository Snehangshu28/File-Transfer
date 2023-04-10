import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { MainPage } from './component/MainPage';
import { SendPage } from './component/SendPage';
import { RecivePage } from './component/ReceivePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/sendpage' element={<SendPage/>}/>
        <Route path='/recivepage' element={<RecivePage/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
