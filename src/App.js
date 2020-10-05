import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {candidateName: '',
                  candidatePh:'',
                  candidateEmail:'',
                  candidateCountry:'',
                  errors: {
                    candidateName: '',
                    candidatePh: '',
                    candidateEmail: '',
                    candidateCountry:''
                  }
                };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    let errors = this.state.errors;
    switch(event.target.id) {
      case 'candidateName':
          errors.candidateName = 
          event.target.value.length < 5
            ? 'Candidate Name must be at least 5 characters long!'
            : '';
        return this.setState({candidateName: event.target.value});
      case 'candidatePh':
          errors.candidatePh = 
          event.target.value.length < 10
            ? 'Candidate Phone must be at least 10 characters long!'
            : '';
        return this.setState({candidatePh: event.target.value});
      case 'candidateEmail':
          errors.candidateEmail = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.target.value))
          ? ''
          : 'Email is not valid!';
        return this.setState({candidateEmail: event.target.value});
      case 'candidateCountry':
          errors.candidateCountry = 
          event.target.value.length < 1
            ? 'Need to select one from drop down country names'
            : '';
        return this.setState({candidateCountry: event.target.value});
      default:
        break;
    }
    this.setState({errors: errors});
  }

  handleSubmit(event) {
    event.preventDefault();
    let valid = true;
    if(Object.values(this.state.errors).forEach(val => val.length > 0 && (valid = false)))
    {
      valid= true;
    }
    if(valid){
      alert('Valid Form')
    }else{
      alert('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div>
      <h2>Candidate Registration</h2>
      <form onSubmit={this.handleSubmit}>
      <div className='inputStyle'>
              <label htmlFor="candidateName">Candidate Name:</label>
              <input type="text" id="candidateName" value={this.state.candidateName} onChange={this.handleChange} />
              {errors.candidateName.length > 0 && 
                <span className='error'>{errors.candidateName}</span>}
      </div>
      <div className='inputStyle'>
              <label htmlFor="candidatePh">Candidate Ph. No:</label>
              <input type="number" id="candidatePh" value={this.state.candidatePh} onChange={this.handleChange} />
              {errors.candidatePh.length > 0 && 
                <span className='error'>{errors.candidatePh}</span>}
      </div>
      <div className='inputStyle'>
              <label htmlFor="candidateEmail">Candidate Email:</label>
              <input type="text" id="candidateEmail" value={this.state.candidateEmail} onChange={this.handleChange} />
              {errors.candidateEmail.length > 0 && 
                <span className='error'>{errors.candidateEmail}</span>}
      </div>
      <div className='inputStyle'>
              <label htmlFor="candidateCountry">Pick your Country:</label>
              <select style={{marginTop:3}} type="email" id="candidateCountry" value={this.state.candidateCountry} onChange={this.handleChange}>
              <option value="">Please Pick One</option>
              <option value="america">America</option>
              <option value="india">India</option>
              <option value="uk">UK</option>
              </select>
              {errors.candidateCountry.length > 0 && 
                <span className='error'>{errors.candidateCountry}</span>} 
      </div>
        <div className='submit'>
              <button>Submit</button>
        </div>
      </form>
      </div>
    );
  }
}
