import React, { Component } from 'react';
import '../App.css';
import TrashIcon from '../trash.svg';

class Trash extends Component {

   showTrash = () => {
    if (this.props.binFilled) {
      return <img src={ TrashIcon } alt="Trash" className="trash"></img>
    }
  }
  render() {

    return (
      <div className="bin">
        {this.showTrash()}
      </div>
    );
  }
}

export default Trash;
