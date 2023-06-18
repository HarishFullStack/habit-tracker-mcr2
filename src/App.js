import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Habit } from './pages/Habit';
import { HabitsList } from './pages/HabitsList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Habit/>}></Route>
        <Route path="/habit/:id" element={<HabitsList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
