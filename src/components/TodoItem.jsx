import { FaDeleteLeft } from "react-icons/fa6";

function TodoItem({todoName,todoDate, onDeleteClick}) {
  // let todoName = "Buy Milk";
  // let todoDate = "4/10/2023";

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" onClick={()=> onDeleteClick(todoName)}>
            <FaDeleteLeft />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
