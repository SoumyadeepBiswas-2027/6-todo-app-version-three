import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = (/*{onDeleteClick }*/) => { /*app have stopped passing onDeleteClick prop */

// const contextObj = useContext(TodoItemsContext);
// const todoItems = contextObj.todoItems;
const { todoItems } = useContext(TodoItemsContext); //used obj destruckturing and brought above two code in a single line


  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem  
        key={item.name + item.dueDate} 
        todoDate={item.dueDate} 
        todoName={item.name} 
        /*onDeleteClick={deleteItem} we put these directly in context with TodoItem*/ >
        </TodoItem>
       ))}

    </div>
  );
};

export default TodoItems;