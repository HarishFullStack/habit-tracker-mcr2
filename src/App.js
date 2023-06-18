import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

function App() {

  const [habits, setHabits] = useState([]);
  const [showAddHabits, setShowAddHabits] = useState(false);

  const handleClose = () => setShowAddHabits(false);

  const handleShowAddHabits = () => {
    setShowAddHabits(true);
  }

  const handleAddHabit = () => {
  }

  return (
    <div className="App">
      <button className='btn btn-primary' onClick={handleShowAddHabits}>Add a new habit</button>

      <Modal show={showAddHabits} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>New Habit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>Add New Habit</h4>
                    <div className="row pb-4">
                      <div className='row'>
                          <div className="col-md-6">
                            <label htmlFor='name'>Name</label>
                            <input type="text" className="form-control col-md-6"  id="name" placeholder="name" />
                          </div>
                      </div>
                      <div className='row'>
                        <div className="col-md-6">
                          <label htmlFor='repeat'>Repeat</label>
                          <input type="number" className="form-control"  id="repeat"  placeholder="mobile no."  max="9999999999" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor='goal'>Goal</label>
                          <input type="number" className="form-control"  id="goal"  placeholder="mobile no."  max="9999999999" />
                        </div>
                      </div>
                      <div className='row'>
                        <div className="col-md-6">
                          <label htmlFor='timeOfDay'>Tife OF Day</label>
                          <input type="number" className="form-control"  id="timeOfDay"  placeholder="mobile no."  max="9999999999" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor='startDate'>Start Date</label>
                          <input type="number" className="form-control"  id="startDate"  placeholder="mobile no."  max="9999999999" />
                        </div>
                      </div>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleAddHabit}>Add</button>
                </Modal.Footer>
            </Modal>
    </div>
  );
}

export default App;
