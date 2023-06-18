import { useContext, useReducer, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { TimePicker } from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { HabitContext } from '../Context/HabitContext';
// import { v4 as uuid } from "uuid";

export function Habit(){
    const {habits, setHabits} = useContext(HabitContext)
    const [showAddHabits, setShowAddHabits] = useState(false);
  
    const [timeValue, setTimeValue] = useState('10:00');
    const [startDate, setStartDate] = useState(new Date());
  
      const reducer = (state, action) => {
        switch(action.type){
            case "NAME":
                return {...state, name: action.value}
  
            case "REPEAT":
                return {...state, repeat: action.value}
  
            case "GOAL":
                return {...state, goal: action.value}
  
            case "TIMEOFDAY":
                return {...state, timeOfDay: timeValue}
  
            case "STARTDAY":
                return {...state, startDay: startDate}
  
            case "CLEAR":
                return {...state, name: ""}

            default:
            
            return state;
        }
    }
  
    const [state, dispatch] = useReducer(reducer, {
        // id: uuid(),
        name: "",
        repeat: "",
        goal:"",
        timeOfDay:"",
        startDay:""
    })
  
  
  
    const handleClose = () => setShowAddHabits(false);
  
    const handleShowAddHabits = () => {
      setShowAddHabits(true);
    }
  
    const handleAddHabit = () => {
      dispatch({type: "TIMEOFDAY"})
      setHabits([...habits, state])
      handleClose();
      dispatch({type: "CLEAR"})

    }
  
    const handleTimeChange = (value) => {
      setTimeValue(value)
    }
    return(
        <div className='p-5'>
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
                            <input type="text" className="form-control col-md-6"  id="name" placeholder="name" onChange={ (event) => dispatch({type: "NAME", value: event.target.value}) }/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                        <label htmlFor='repeat'>Repeat</label>
                        <select className="form-control"  id="repeat" onChange={ (event) => dispatch({type: "REPEAT", value: event.target.value}) }>
                            <option>Once</option>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                        </select>
                        </div>
                        <div className="col-md-6">
                        <label htmlFor='goal'>Goal</label>
                        <select className="form-control"  id="repeat"  onChange={ (event) => dispatch({type: "GOAL", value: event.target.value}) }>
                            <option>1 times Daily</option>
                            <option>2 times Daily</option>
                            <option>3 times Daily</option>
                            <option>4 times Daily</option>
                            <option>5 times Daily</option>
                        </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                        <label htmlFor='timeOfDay'>Time Of Day</label>
                        <TimePicker id="timeOfDay" className="form-control" disableClock={true} value={timeValue} onChange={setTimeValue}/>
                        </div>
                        <div className="col-md-6">
                        <label htmlFor='startDate'>Start Date</label>
                        <ReactDatePicker className='form-control' selected={startDate} dateFormat="dd/MM/yyyy" onChange={(date) => {setStartDate(date);  dispatch({type: "STARTDAY"})}}></ReactDatePicker>
                        </div>
                    </div>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                    <button type="button" className="btn btn-primary" disabled={state.name === "" || state.repeat === "" || state.goal === "" || timeValue === "" || startDate === ""} onClick={handleAddHabit}>Add</button>
                </Modal.Footer>
            </Modal>

            <div className='d-flex p-5'>{habits.map((habit) => {
                return(
                <div className="card m-2" key={habit.id}>
                    <div class="card-body">
                    <h4 class="card-title">{habit.name}</h4>
                    </div>
                </div>
                )
            })}</div>
    </div>)
}