import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Message from "./components/Message";

function App() {
const [todoItems,setTodoItems]=useState([]);

const handleNewItem =(itemName,itemDueDate) => {
 console.log(`New item added: ${itemName} Date:${itemDueDate}`)
 const newTodoItems =[
  ...todoItems,
  {name: itemName, dueDate: itemDueDate},
];
setTodoItems(newTodoItems);
};

const handleDeleteButton =(todoItemName,todoItemDate) =>{ //,todoItemDate
  const newTodoItems =todoItems.filter((item) => item.name !==todoItemName )
 setTodoItems(newTodoItems);
}


  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
       {todoItems.length ===0 && <Message todoItems={todoItems}></Message>}
      <TodoItems todoItems={todoItems} 
      onDeleteClick={ handleDeleteButton}
      ></TodoItems>
    
    </center>
  );
}

export default App;
