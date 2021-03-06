import React, { Component } from "react";
import {
  Container,
  Header,
  InputPanel,
  Form,
  Row,
  FaceImage,
  Input,
  HeaderText,
  H2,
  Button,
  MailImage,
  Text1,
  FormTop,
  ErrorMsg
} from "./zstyles";
import Select from "react-select";

import dataStates from "../../data/states";
import dataCountries from "../../data/country";
import { connect } from 'react-redux';
import * as _actions from '../../redux/actions/actions';
import Immutable from 'immutable';

class CompanyInfo extends Component {


  state = {
    states: dataStates,
    countries: dataCountries,
    selectedState: null,
    selectedCountry: "US",

    fields: Immutable.Map({
      name: "",
      email: "",
      company: "",
      street1: "",
      city: "",
      zipCode: "",
      state: "",
      country: ""
    }),
    error: {
      name: false,
      email: false,
      company: false,
      street1: false,
      city: false,
      zipCode: false,
      state: false,
      country: false
    },
  };



  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };


  componentDidMount() {
   

  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleNameChange = (evt) => {
    evt.persist();
    this.setState(({fields}) => { 
      return {fields: fields.set('name', evt.target.value)};
    });
  };

  handleEmailChange = () => {
    
  };

  handleCompanyChange = () => {
   
  };

  handleStreet1Change = () => {
   
  };

  handleStreet2Change = () => {
    
  };

  handleCityChange = () => {
    
  };

  handleZipCodeChange = () => {
    
  };

  handleStateChange = () => {
  
  };
  
  handleCountryChange = () => {
   
  };

  render() {
    
    const selectedCountry = "United States";

    return (
      <Container>
        <Header>
          <FaceImage src="https://i.imgur.com/qVw0qzI.png" />
          <HeaderText>
            <H2>Hi my name is Jaizon Fernando Lubaton.</H2>
            <H2>Thank you for reviewing my page.</H2>
          </HeaderText>
        </Header>

        <Form onSubmit={this.handleSubmit}>
          <FormTop>
            <MailImage src="https://i.imgur.com/bx92YRh.png" />
            <Text1>
              Please enter your Company information to receive hard copy of my
              certificates and transcript of records, thank you!
            </Text1>
          </FormTop>
          <InputPanel>
            <Row>
              <Input
                name="name"
                type="text"
                placeholder="Name"
                value={this.state.fields.get('name')}
                onChange={this.handleNameChange}
              />
              {this.state.error.name && <ErrorMsg>Please enter name.</ErrorMsg>}
            </Row>
            <Row style={{ marginBottom: 20 }}>
              <Input
                name="email"
                type="text"
                placeholder="Email"
                value={this.state.fields.email}
                onChange={this.handleEmailChange}
              />
              {this.state.error.email && (
                <ErrorMsg>Please enter email.</ErrorMsg>
              )}
            </Row>
            <Row>
              <Input
                name="company"
                type="text"
                placeholder="Company Name"
                value={this.state.fields.company}
                onChange={this.handleCompanyChange}
              />
              {this.state.error.company && (
                <ErrorMsg>Please enter company.</ErrorMsg>
              )}
            </Row>
            <Row>
              <Input
                name="street1"
                type="text"
                placeholder="Street"
                value={this.state.fields.street1}
                onChange={this.handleStreet1Change}
              />
              {this.state.error.street1 && (
                <ErrorMsg>Please enter street.</ErrorMsg>
              )}
            </Row>
            <Row>
              <Input
                name="street2"
                type="text"
                placeholder="Street"
                value={this.state.fields.street2}
                onChange={this.handleStreet2Change}
              />
            </Row>
            <Row>
              <Input
                name="city"
                type="text"
                placeholder="City"
                value={this.state.fields.city}
                onChange={this.handleCityChange}
              />
              {this.state.error.city && <ErrorMsg>Please enter city.</ErrorMsg>}
            </Row>

            <Row>
              <Input
                name="zipcode"
                type="text"
                placeholder="Zip Code"
                style={{ width: 150 }}
                value={this.state.fields.zipCode}
                onChange={this.handleZipCodeChange}
              />
              {this.state.error.zipCode && (
                <ErrorMsg>Please enter zip code.</ErrorMsg>
              )}
            </Row>
            <Row>
              <Select
                id="select-state"
                value={selectedCountry}
                onChange={this.handleStateChange}
                options={this.state.states}
              />
              {this.state.error.state && (
                <ErrorMsg>Please select state.</ErrorMsg>
              )}
            </Row>

            <Row>
              <Select
                id="select-country"
                value={"US"}
                onChange={this.handleCountryChange}
                options={this.state.countries}
              />
              {this.state.error.country && (
                <ErrorMsg>Please select country.</ErrorMsg>
              )}
            </Row>

            <Button>Request for Documents</Button>
          </InputPanel>
        </Form>
      </Container>
    );
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  userSession: store.userSession,
});

const mapDispatchToProps = {
  updateUserSession: _actions.updateUserSession,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompanyInfo);