import React, { Component } from 'react';
import axios from 'axios';


class Customer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      error: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/customers/')
      .then((response) => {
        this.setState({ customers: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

listCustomers = () => {
  return(
    this.state.customers.map((customer, i) => {
      return (
        <div key={i}>
            <h3>{customer.name}</h3>
            <p>{customer.phone}</p>
          </div>
      )
    })
  )
}

render() {
  return(
    <section>
      {this.listCustomers()}
    </section>
  )
}


}

export default Customer;