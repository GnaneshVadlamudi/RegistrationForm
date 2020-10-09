import React from "react";
import "./styles.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Form";
//import Form from 'bootstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidateName: "",
      candidatePh: "",
      candidateEmail: "",
      candidateCountry: "",
      errors: {
        candidateName: "",
        candidatePh: "",
        candidateEmail: "",
        candidateCountry: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    let errors = this.state.errors;
    switch (event.target.id) {
      case "candidateName":
        errors.candidateName =
          event.target.value.length < 5
            ? "Candidate Name must be at least 5 characters long!"
            : "";
        return this.setState({ candidateName: event.target.value });
      case "candidatePh":
        errors.candidatePh =
          event.target.value.length < 10
            ? "Candidate Phone must be at least 10 characters long!"
            : "";
        return this.setState({ candidatePh: event.target.value });
      case "candidateEmail":
        errors.candidateEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          event.target.value
        )
          ? ""
          : "Email is not valid!";
        return this.setState({ candidateEmail: event.target.value });
      case "candidateCountry":
        errors.candidateCountry =
          event.target.value.length < 1
            ? "Need to select one from drop down country names"
            : "";
        return this.setState({ candidateCountry: event.target.value });
      default:
        break;
    }
    this.setState({ errors: errors });
  }

  handleSubmit(event) {
    event.preventDefault();
    let valid = true;
    if (
      Object.values(this.state.errors).forEach(
        (val) => val.length > 0 && (valid = false)
      )
    ) {
      valid = true;
    }
    if (valid) {
      alert("Valid Form");
    } else {
      alert("Invalid Form");
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="mainDiv">
        <Form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Candidate Registration</legend>
            <br />

            <Form.Group controlId="formGridCandidatename">
              <Form.Label>Candidate Name: </Form.Label>
              <Form.Control
                type="text"
                className="inputStyle"
                id="candidateName"
                value={this.state.candidateName}
                onChange={this.handleChange}
                placeholder=""
              />
              {errors.candidateName.length > 0 && (
                <span className="error">{errors.candidateName}</span>
              )}
            </Form.Group>
            <br />

            <Form.Group controlId="formGridCandidatePh">
              <Form.Label>Candidate Ph. No: </Form.Label>
              <Form.Control
                type="number"
                className="inputStyle"
                id="candidatePh"
                value={this.state.candidatePh}
                onChange={this.handleChange}
                placeholder=""
              />
              {errors.candidatePh.length > 0 && (
                <span className="error">{errors.candidatePh}</span>
              )}
            </Form.Group>
            <br />

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email: </Form.Label>
              <Form.Control
                type="email"
                className="inputStyle"
                id="candidateEmail"
                value={this.state.candidateEmail}
                onChange={this.handleChange}
                placeholder="Enter email"
              />
              {errors.candidateEmail.length > 0 && (
                <span className="error">{errors.candidateEmail}</span>
              )}
            </Form.Group>
            <br />

            <Form.Group as={Col} controlId="formGridCountry">
              <Form.Label>Country: </Form.Label>
              <Form.Control
                as="select"
                className="inputStyle"
                id="candidateCountry"
                value={this.state.candidateCountry}
                onChange={this.handleChange}
                defaultValue="Choose..."
              >
                <option>Choose...</option>
                <option value="america">America</option>
                <option value="india">India</option>
                <option value="uk">UK</option>
              </Form.Control>
              {errors.candidateCountry.length > 0 && (
                <span className="error">{errors.candidateCountry}</span>
              )}
            </Form.Group>
            <br />
            <div className="submit">
              <button>Submit</button>
            </div>
          </fieldset>
        </Form>
      </div>
    );
  }
}
