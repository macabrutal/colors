import React from 'react';
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import {Row, Modal, Button} from "react-bootstrap";
import './App.css';
import Color from './Color';

import axios from 'axios';

class CopiedModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    }
  }

  closeModal = () => {
    this.setState({show: false})
    this.props.updateShowModal();
  };

  render() {
    return(
      <Modal show={this.state.show}>
        <Modal.Body>
          <p>Copied!</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.closeModal()}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
      showModal: false
    }
  };

  componentDidMount() {
    axios.get('https://reqres.in/api/colors')
      .then(response => {
        this.setState({
          colors: response.data.data,
        })
      })
  };

  updateShowModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    })
  };

  render() {
    return (
      <div className="App text-center App-header">
        <h1 className="mb-5">Colors</h1>
        <Row>
          {
            this.state.colors.map((color) => {
              return <Color name={color.name} year={color.year} colorCode={color.color} pantone={color.pantone_value} updateShowModal={this.updateShowModal}/>
            })
          }
        </Row>

        {
          this.state.showModal &&
            <CopiedModal updateShowModal={this.updateShowModal}/>
        }
      </div>
    );
  }
}

export default App;
