import { Component } from "react";
// import App from "../App";

export default class ToDoItem extends Component {
  render() {
    let { e, i, editArray, deleteItem } = this.props;
    return (
      <>
        <div key={i}>
          <li>
            <input type="text" value={e} onChange={(event) =>{ 
                editArray(event.target.value, i);}} />
            <button
              onClick={() => {
                deleteItem(i);
              }}
            >
              Delete
            </button>
          </li>
        </div>
      </>
    );
  }
}
