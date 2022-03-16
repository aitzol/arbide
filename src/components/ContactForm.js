import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class EskariaForm extends React.Component {
    state = {
        izena: "",
        emaila: "",
        mezua: "",
    }
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
      }
    handleSubmit = async(event) => {
        event.preventDefault();
        try {
          let res = await fetch("/api/bidali", {
          method: "POST",
          body: JSON.stringify({
            name: this.state.izena,
            email: this.state.email,
            mezua: this.state.mezua,
          })})
          let resJson = await res.json();
            if (res.status === 200) {
              console.log(resJson);
            } else {
              console.log("Some error occured");
            }
        } catch (err) {
          console.log(err);
        }
      };

    render() {
        return (
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Izena</Form.Label>
              <Form.Control placeholder="Zure izena" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Eposta helbidea</Form.Label>
              <Form.Control type="email" placeholder="Zure eposta helbidea" />
              <Form.Text className="text-muted">
                Erantzunen bat eman ahal izateko baino ez dugu erabiliko
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mezua</Form.Label>
              <Form.Control as="textarea" placeholder="" />
            </Form.Group>
            <Button type="submit">Bidali</Button>
          </Form>
        )
      }
    };  