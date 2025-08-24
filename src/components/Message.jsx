import styles from "./Message.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const Message =() =>{


const {todoItems} = useContext(TodoItemsContext);  
return (todoItems.length ===0 && <p className={styles.Message}>Enjoy your Day!!</p>

);
}
export default Message;