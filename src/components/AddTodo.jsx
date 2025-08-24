import {useRef} from "react"; 
import { BiSolidCommentAdd } from "react-icons/bi"; 
import { useContext} from "react"; 
import { TodoItemsContext } from "../store/todo-items-store";   

function AddTodo() {   
  const {addNewItem} = useContext(TodoItemsContext);     

  // Create the refs here - this was missing! 
  const todoNameElement = useRef(""); 
  const dueDateElement = useRef("");  

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
         
    if (todoName.trim() !== "") {
      addNewItem(todoName, dueDate);
      todoNameElement.current.value = "";
      dueDateElement.current.value = "";
    }
  }

  return (     
    <div className="container text-center">       
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>                  
        <div className="col-6">           
          <input type="text"            
            ref={todoNameElement}           
            placeholder="Enter Todo Here"            
          />         
        </div>          

        <div className="col-4">           
          <input type="date"           
            ref={dueDateElement}             
          />         
        </div>          

        <div className="col-2">           
          <button             
            className="btn btn-success kg-button"
            type="submit"            
          >
            <BiSolidCommentAdd />
          </button>         
        </div>        
      </form>     
    </div>   
  ); 
}  

export default AddTodo;