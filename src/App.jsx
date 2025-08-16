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
]);

};

const deleteItem =(todoItemName,todoItemDate) =>{ 
  const newTodoItems =todoItems.filter((item) => item.name !==todoItemName )
 setTodoItems(newTodoItems);
}

// const defaultTodoItems = [{name: "buy coffee", dueDate:"tomorrow"}]

  return (
    <TodoItemsContext.Provider 
    value={{
      // todoItems: todoItems,
      // addNewItem: addNewItem,
      // deleteItem: deleteItem,
  //used above following as single objects as key and value pairs are same 
      todoItems,
      addNewItem,
      deleteItem,

    }}
    >
    <center className="todo-container">
      <AppName />
      <AddTodo /> {/*onNewItem={handleNewItem}} */}
       {/* {todoItems.length === 0 && <Message></Message>} */}
       {/* we made Message component dependent on todoItems  */}
        <Message></Message> {/* removed prop todoItems ={todoItems} here and from TodoItems below as well */}
        <TodoItems  
        //  onDeleteClick={ handleDeleteButton}
        ></TodoItems> 
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
