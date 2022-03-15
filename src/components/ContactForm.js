import React from 'react';

export default class EskariaForm extends React.Component {
    state = {
        izena: "",
        abizenak: "",
        telefonoa: "",
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
    handleSubmit = event => {
        event.preventDefault();
        alert(`Welcome ${this.state.izena} ${this.state.abizenak}!`);
    }
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Izena
              <input
                type="text"
                name="izena"
                value={this.state.izena}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Abizenak
              <input
                type="text"
                name="abizenak"
                value={this.state.abizenak}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Telefonoa
              <input
                type="text"
                name="telefonoa"
                value={this.state.telefonoa}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Emaila
              <input
                type="text"
                name="emaila"
                value={this.state.emaila}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Mezua
              <textarea
                name="mezua"
                value={this.state.mezua}
                onChange={this.handleInputChange}
              />
            </label>
            <button type="submit">Bidali</button>
          </form>
        )
      }
    };  