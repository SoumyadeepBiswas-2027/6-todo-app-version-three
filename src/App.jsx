import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Message from "./components/Message";
import { TodoItemsContext } from "./store/todo-items-store";


function App() {
const [todoItems,setTodoItems]=useState([]);

const addNewItem =(itemName,itemDueDate) => {
 const newTodoItems =[
  ...todoItems,
  {name: itemName, dueDate: itemDueDate},
 ];
setTodoItems(newTodoItems); 
};

const deleteItem =(todoItemName,todoItemDate) =>{ 
  const newTodoItems =todoItems.filter((item) => item.name !==todoItemName )
 setTodoItems(newTodoItems);
}

  return (
    <TodoItemsContext.Provider 
    value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}
    >

    <center className="todo-container">
      <AppName/>
      <AddTodo/> 
      <Message></Message>
      <TodoItems></TodoItems> 
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
