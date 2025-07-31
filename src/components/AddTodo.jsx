import {useRef} from "react";
// import { useState} from "react";
import { BiSolidCommentAdd } from "react-icons/bi";

function AddTodo({onNewItem}) {

// const [todoName,setTodoName] = useState("");
// const [dueDate,setdueDate] = useState("");
const todoNameElement= useRef(0);
const dueDateElement= useRef(0);

// const handleNameChange = (event) =>{
// setTodoName(event.target.value);

// };

// const handleDateChange = (event) =>{
//  setdueDate(event.target.value);
 
// };

const handleAddButtonClicked =(event)=>{
  event.preventDefault();
  const todoName = todoNameElement.current.value;
  const dueDate = dueDateElement.current.value;
  todoNameElement.current.value = "";
  dueDateElement.current.value = "";
  onNewItem(todoName,dueDate);
//  setdueDate("");
//  setTodoName("");
 }

  return (
    <div className="container text-center">
      <form className="row kg-row"
      onSubmit={handleAddButtonClicked}>
        
        <div className="col-6">
          <input type="text" 
          ref={todoNameElement}
          placeholder="Enter Todo Here" 
          //value={todoName} 
          // onChange={ handleNameChange}
          />
        </div>

        <div className="col-4">
          <input type="date"
          ref={ dueDateElement}
           //value={dueDate} 
          // onChange={handleDateChange} 
           />
        </div>

        <div className="col-2">
          <button  
          // onSubmit={handleAddButtonClicked}
          className="btn btn-success kg-button" 
          //onClick={handleAddButtonClicked} 
          >
            <BiSolidCommentAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;