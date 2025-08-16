import styles from "./Message.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const Message =() =>{
  // const todoItems=useContext(TodoItemsContext);

// const contextObj = useContext(TodoItemsContext);
// const todoItems = contextObj.todoItems;

const {todoItems} = useContext(TodoItemsContext); //used obj destruckturing and brought above two code in a single line 
return (todoItems.length ===0 && <p className={styles.Message}>Enjoy your Day!!</p>

);
}
export default Message;