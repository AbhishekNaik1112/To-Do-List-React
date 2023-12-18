import { Component } from "react";
import ToDoItem from "./components/ToDoItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todoList: [],
    };
  }
  inputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.length > 0)
      this.setState({
        input: "",
        todoList: [...this.state.todoList, this.state.input],
      });
    console.log(this.state.todoList);
  };

  editArray = (newItem, index) => {
    let array = this.state.todoList;

    array.splice(index, 1, newItem);
    this.setState({
      todoList: array,
    });
  };

  deleteItem = (index) => {
    let array = this.state.todoList;

    array.splice(index, 1);
    this.setState({
      todoList: array,
    });
  };

  render() {
    return (
      <div className="Apps">
        <h1>To Do List</h1>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            placeholder="......."
            onChange={this.inputChange}
            value={this.state.input}
          />
          <button>Add</button>
        </form>
        <ul>
          {this.state.todoList.length == 0 ? (
            <h1>Your List is Empty</h1>
          ) : (
            this.state.todoList.map((e, i) => {
              return (
                <ToDoItem e={e} i={i} deleteItem={this.deleteItem} editArray={this.editArray} />
              );
            })
          )}
        </ul>
      </div>
    );
  }
}

export default App;
