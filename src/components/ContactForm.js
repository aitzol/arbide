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
        const name = target.id
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
            izena: this.state.izena,
            emaila: this.state.emaila,
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
            <Form.Group className="mb-3" controlId="izena" name="izena">
              <Form.Label>Izena</Form.Label>
              <Form.Control placeholder="Zure izena" onChange={this.handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="emaila" name="emaila">
              <Form.Label>Eposta helbidea</Form.Label>
              <Form.Control type="email" name="mezua" placeholder="Zure eposta helbidea" onChange={this.handleInputChange} />
              <Form.Text className="text-muted">
                Erantzunen bat eman ahal izateko baino ez dugu erabiliko
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="mezua">
              <Form.Label>Mezua</Form.Label>
              <Form.Control as="textarea" placeholder="" onChange={this.handleInputChange}/>
            </Form.Group>
            <Button type="submit">Bidali</Button>
          </Form>
        )
      }
    };  