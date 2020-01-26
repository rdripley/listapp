import React, { Component } from 'react';
import List from "./List";
import "./Input.css";


class Input extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        names: [],
        deletedNames: [],
        showUndoButton: false
      }
  
      this.addName = this.addName.bind(this);
      this.deleteName = this.deleteName.bind(this);
      this.undoDelete = this.undoDelete.bind(this);
    }
    deleteName(key) {
        var filteredNames = this.state.names.filter(function (name) {
            return (name.key !== key);
        });
        var deletedName = this.state.names.filter(function (name) {
            return (name.key === key);
        });
        this.setState({
            names: filteredNames,
            deletedNames: this.state.deletedNames.concat(deletedName),
            showUndoButton: true
        });
    }

    addName(e) {
        if (this._inputElement.value !== "") {
          var newName = {
            text: this._inputElement.value,
            key: Date.now()
          }
          this.setState((prevState) => {
            return {
              names: prevState.names.concat(newName)
            };
          });
          this._inputElement.value = "";
        }
        e.preventDefault();
      }
    
    undoDelete() {
        this.setState({
            names: this.state.names.concat(this.state.deletedNames),
            deletedNames: [],
            showUndoButton: false

        })
    }
    render() {
        const showing = this.state.showUndoButton;
        return (
        <div className="inputListMain">
            <div className="header">
                <form onSubmit={this.addName}>
                    <input 
                        placeholder="enter name" 
                        ref={(a) => this._inputElement = a}
                    >
                    </input>
                    <button type="submit">add</button>
                    { showing
                        ? <button 
                            className="delete" 
                            type="submit"
                            onClick={this.undoDelete}
                          >Undo</button>
                        : null
                    }
                </form>
            </div>
            <List 
                entries={this.state.names} 
                delete={this.deleteName}
            />
        </div>
        );
    }
}

export default Input;