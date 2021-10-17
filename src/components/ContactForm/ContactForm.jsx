import React, { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  
    render() {
      const { name, number } = this.state;
      
      return (
        <form className={s.form} onSubmit = {this.handleSubmit}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="First Name Last Name"
            />
          </label>
          
          <label className={s.label}>
            Number
            <input
              className={s.input}
              type="number"
              name="number"
              value={number}
              onChange={this.handleChange}
              placeholder="123456789"
            />
            </label>
            
            <button className={s.btn} type="submit">
              Add contact
            </button>
        </form>
      )
    }
}

export default ContactForm;