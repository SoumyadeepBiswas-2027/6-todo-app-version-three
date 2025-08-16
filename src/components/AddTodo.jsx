import { useState } from "react";
import { BiSolidCommentAdd } from "react-icons/bi";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";


function AddTodo({/*onNewItem*/}) { /*wherever onNewItem used it will call addNewItem there*/
const {addNewItem} = useContext(TodoItemsContext); 
const [todoName,setTodoName] = useState("");
const [dueDate,setdueDate] = useState("");

const handleNameChange = (event) =>{
setTodoName(event.target.value);
};

const handleDateChange = (event) =>{
 setdueDate(event.target.value);
};

const handleAddButtonClicked =()=>{
 addNewItem(todoName,dueDate);
 setdueDate("");
 setTodoName("");
}

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={ handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClicked}>
            <BiSolidCommentAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
