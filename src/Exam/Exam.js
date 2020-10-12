import React from "react";
import "./../styles.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Form";
//import Form from 'bootstrap';

export default class Exam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examSeries: "",
      Qualification: "",
      Center: "",
      CandidateNumber: "",
      errors: {
        examSeries: "",
        Qualification: "",
        Center: "",
        CandidateNumber: ""
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
        <label style={{}}>Exam Details</label>
        <Form onSubmit={this.handleSubmit}>
          <div
            style={{
              borderStyle: "groove",
              paddingTop: 12,
              paddingLeft: 16,
              paddingRight: 16,
              marginTop: 12,
              width: 75 + "%"
            }}
          >
            <label>Exam Series* </label>
            {/*<Form.Row className="form-group row">
              <Form.Group
                as={Col}
                controlId="formGridState"
                style={{ marginTop: 5, width: 40 + "%" }}>
                <Form.Control
                  as="select"
                  className="inputStyle">
                  <option value="" disabled selected hidden>Month</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridState"
                style={{ width: 40 + "%" }}>
                <Form.Control
                  as="select"
                  className="inputStyle">
                  <option value="" disabled selected hidden>Year</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
          </Form.Row>*/}

            <div class="input-group">
              <select style={{ width: 20 + "%" }} className="inputStyle">
                <option value="" disabled selected>
                  Month
                </option>
                <option>...</option>
              </select>
              <span class="input-group-addon"> </span>
              <select style={{ width: 20 + "%" }} className="inputStyle">
                <option value="" disabled selected>
                  Year
                </option>
                <option>...</option>
              </select>
            </div>

            <Form.Group controlId="formGridQualification">
              <Form.Label>Qualification* </Form.Label>
              <Form.Control
                type="text"
                className="inputStyle"
                id="Qualification"
                value={this.state.Qualification}
                onChange={this.handleChange}
                placeholder=""
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCenter">
              <Form.Label>Center* </Form.Label>
              <Form.Control
                type="text"
                className="inputStyle"
                id="Center"
                value={this.state.Center}
                onChange={this.handleChange}
                placeholder="Search by number or name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCountry">
              <Form.Label>Candidate Number </Form.Label>
              <Form.Control
                type="number"
                className="inputStyle"
                id="candidateNumber"
                value={this.state.candidateNumber}
                onChange={this.handleChange}
              />
            </Form.Group>
          </div>
          <div className="submit">
            <button>Submit</button>
          </div>
        </Form>
      </div>
    );
  }
}
