import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
//import { useReducer } from "react";
import Message from "./components/Message";
import  TodoItemsContextProvider from "./store/todo-items-store";

//in below useReducer we use (CurrState,action)
// const todoItemsReducer =(currTodoItems, action) =>{
//   let newTodoItems = currTodoItems;
//   if(action.type ==='NEW_ITEM'){
//      newTodoItems =[
//   ...currTodoItems,
//   {name: action.payload.itemName, dueDate:action.payload. itemDueDate},
//  ];
// //setTodoItems(newTodoItems);
//   }else if(action.type =='DELETE_ITEM'){
//     newTodoItems =currtodoItems.filter((item) => item.name !==action.payload.itemName )
// /*setTodoItems(newTodoItems);*/  }

//   return newTodoItems;
// }

function App() {
//const [todoItems,setTodoItems]=useState([]);
//const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer,[]);//useReducer(reducerMethod,Initial value)


// const addNewItem =(itemName,itemDueDate) => {
//   const newItemAction ={
//     type: "NEW_ITEM",
//     payload: {
//       itemName,
//       itemDueDate
//     }
//   };
//   dispatchTodoItems(newItemAction);



/* const newTodoItems =[
  ...todoItems,
  {name: itemName, dueDate: itemDueDate},
 ];

setTodoItems(newTodoItems); */
//};

//const deleteItem =(todoItemName) =>{ 
//   const newTodoItems =todoItems.filter((item) => item.name !==todoItemName )
//  setTodoItems(newTodoItems);
//setTodoItems(newTodoItems); 
//};


//   const deleteItemAction ={
//     type: "DELETE_ITEM",
//     payload: {
//       itemName:todoItemName,
//     }
//   };
//   dispatchTodoItems(deleteItemAction);

// }

//  return (
    // <TodoItemsContext.Provider 
    // value={{
    //   todoItems,
    //   dispatchTodoItems
    // }}
    // >
     return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Message />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
