import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert  from 'react-bootstrap/Alert';
import ReCAPTCHA from "react-google-recaptcha";


export default class EskariaForm extends React.Component {

    recaptchaRef = React.createRef();
    constructor(props){
      super(props);
      this.state = {
        izena: "",
        emaila: "",
        mezua: "",
        disableSubmit: true,
        sendOK: false,
      };
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
          this.setState({sendOK: true});
        } catch (err) {
          console.log(err);
        }
      };

    render() {
        return (
          
          <Form onSubmit={this.handleSubmit}>
            <Alert show={this.state.sendOK} variant="success" style={{ width: "42rem" }}>
              <Alert.Heading>
              Eskerrik asko, ahal bezain azkar emango dizugu erantzuna
              </Alert.Heading>
            </Alert>
            {!this.state.sendOK &&
            <Form.Group className="mb-3" controlId="izena" name="izena">
              <Form.Label>Izena</Form.Label>
              <Form.Control placeholder="Zure izena" onChange={this.handleInputChange}/>
            </Form.Group>
            }
            {!this.state.sendOK &&
            <Form.Group className="mb-3" controlId="emaila" name="emaila">
              <Form.Label>Eposta helbidea</Form.Label>
              <Form.Control type="email" name="mezua" placeholder="Zure eposta helbidea" onChange={this.handleInputChange} />
              <Form.Text className="text-muted">
                Erantzunen bat eman ahal izateko baino ez dugu erabiliko
              </Form.Text>
            </Form.Group>
            }
            {!this.state.sendOK &&
            <Form.Group className="mb-3" controlId="mezua">
              <Form.Label>Mezua</Form.Label>
              <Form.Control as="textarea" placeholder="" onChange={this.handleInputChange}/>
            </Form.Group>
            }
            {!this.state.sendOK &&
            <ReCAPTCHA
              ref={this.recaptchaRef}
              sitekey="6LcSFe4eAAAAAFXjalt3DIIeL9kdfP7o7TSv3oNq"
              onChange={() => this.setState({disableSubmit: false})}
            />
            }
            {!this.state.sendOK && 
            <Button type="submit" disabled={this.state.disableSubmit}>Bidali</Button>
            }
          </Form>
        )
      }
    };  