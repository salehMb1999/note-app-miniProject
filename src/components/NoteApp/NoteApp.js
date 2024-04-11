import React, { Component } from "react";
import Note from "./Note";
import ColorBox from "./ColorBox";

export default class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        "#fff",
        "#FFD37F",
        "#FFFA81",
        "#D5FA80",
        "#78F87F",
        "#79FBD6",
        "#79FDFE",
        "#7AD6FD",
        "#7B84FC",
        "#D687FC",
        "#FF89FD",
      ],
      notes: [],
      noteTitle: "",
      inputColor: "#fff",
    };
    this.inputColorHandler = this.inputColorHandler.bind(this);
    this.inputTitleHandler = this.inputTitleHandler.bind(this);
    this.addTodoHandler = this.addTodoHandler.bind(this);
    this.removeTodoHandler = this.removeTodoHandler.bind(this);
    this.cleanInputHandler = this.cleanInputHandler.bind(this);
  }

  inputColorHandler(color) {
    this.setState({
      inputColor: color,
    });
  }

  inputTitleHandler(event) {
    this.setState({
      noteTitle: event.target.value,
    });
  }
  addTodoHandler() {
    let newTodo = {
      id: this.state.notes.length + 1,
      title: this.state.noteTitle,
      noteColor: this.state.inputColor,
    };
    this.setState({
      notes: [...this.state.notes, newTodo],
      noteTitle: "",
      inputColor: "#fff",
    });
  }
  cleanInputHandler() {
    this.setState({
      noteTitle: "",
      inputColor: "#fff",
    });
  }
  removeTodoHandler(id) {
    let newTodos = this.state.notes.filter((note) => {
      return note.id !== id;
    });
    this.setState({
      notes: [...newTodos],
    });
  }

  render() {
    return (
      <>
        <div>
          <section id="home">
            <div className="container">
              <div className="header upper">SabzLearn Note App</div>

              <br />
              <br />
              <div className="flex row-gt-sm">
                <div className="flex flex-50-gt-sm">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                    <input
                      onChange={this.inputTitleHandler}
                      id="input-field"
                      className="form-control"
                      type="text"
                      style={{ backgroundColor: this.state.inputColor }}
                      value={this.state.noteTitle}
                      placeholder="Something here..."
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                    <div id="color-select">
                      {this.state.colors.map((color) => (
                        <ColorBox
                          inputColorHandler={this.inputColorHandler}
                          color={color}
                          key={Math.random()}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                    <button
                      onClick={this.addTodoHandler}
                      id="btn-save"
                      type="button"
                      className="btn btn-outline-info"
                    >
                      <span className="fa fa-plus"></span>
                    </button>
                    <button
                      onClick={this.cleanInputHandler}
                      id="btn-delete"
                      type="button"
                      className="btn btn-outline-danger"
                    >
                      <span id="btn-icon" className="fa fa-eraser"></span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex row-gt-sm">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="container">
                    <div className="row">
                      <div
                        id="listed"
                        className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns"
                      >
                        {this.state.notes.map((note) => (
                          <Note
                            removeTodoHandler={this.removeTodoHandler}
                            key={note.id}
                            {...note}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
