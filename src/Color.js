import React from 'react'

import {Col, Button} from 'react-bootstrap';

class Color extends React.Component {
  constructor(props) {
    super(props);
  }

  copyToClipboard = event => {
    const copiedText = event.currentTarget;
    copiedText.select();
    copiedText.setSelectionRange(0, 99999);
    document.execCommand('copy')

    this.props.updateShowModal()

  };

  render() {
    return (

      <Col style={{backgroundColor: this.props.colorCode}} className="text-center  py-5 px-3 mx-3 w-100">
        <p className="colors "> color {this.props.colorCode}</p>
        <p className="colors">year {this.props.year}</p>
        <p className="colors">name {this.props.name}</p>
        <p className="colors pb-5">pantone {this.props.pantone}</p>
        <input type='text' value={this.props.colorCode} onClick={(event) => this.copyToClipboard(event)}/>
      </Col>
    )
  }
}


export default Color