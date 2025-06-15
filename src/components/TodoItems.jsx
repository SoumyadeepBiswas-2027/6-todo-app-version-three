import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({todoItems}) =>{
  return <div className={styles.itemsContainer}>
    {todoItems.map(item => <TodoItem  todoDate={item.dueDate} todoName={item.name}></TodoItem>)}
        {/* <TodoItem  todoDate="4/10/2023" todoName="Buy Milk"></TodoItem>
         <TodoItem  todoDate="4/10/2023" todoName="Go to College"></TodoItem> */}
          {/* in previous code ,we hardcoded the functions,but then we update it and made single component ,for the functions to be viewed */}
      </div>
}
export default TodoItems;