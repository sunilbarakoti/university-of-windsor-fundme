/* This is form component which has been used by both create campaign and edit campaign component to
load the forms.This component uses the redux form. */

import React from 'react';
import { Link } from 'react-router-dom';
import { Field, FieldArray, reduxForm } from 'redux-form';
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { Card } from "../Card/Card.jsx";
import { FileInput } from "../FileUpload/FileUpload";

import './Campaign.css';

class CampaignForm extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui pointing red basic label">
          <span className="header">{error}</span>
        </div>
      )
    }
  }

  renderInput = ({ input, name, type, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        {
          input.name === "description" ?
            <textarea rows="3" {...input} type={type} autoComplete="off" /> :
            <input {...input} type={type} autoComplete="off" />
        }
        {this.renderError(meta)}
      </div>
    )
  }

  renderMultiInput = ({ fields, meta }) => {
    return (
      <div className="field">
        <button type="button" className="ui basic button primary" onClick={() => fields.push()}>Add Inventory</button>
        {
          fields.map((newdata, index) => (
            <Row key={index}>
              <Col md={11}>
                <Field
                  name={newdata}
                  type="text"
                  component={this.renderInput}
                />
              </Col>
              <Col md={1}>
                <div
                  className="icon close form__remove"
                  type="button"
                  title="Remove"
                  onClick={() => fields.remove(index)}
                ><i className="times large circle outline red icon"></i></div>
              </Col>
            </Row>
          ))}
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title={this.props.campaignTitle}
                content={
                  <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="title" type="text" component={this.renderInput} label="Enter Title" />
                    <Field name="description" type="text" component={this.renderInput} label="Enter Description" />
                    {/* <Field name="unit_type" type="text" component={this.renderInput} label="Enter Currency Code"  /> */}
                    <Field name="amount" type="text" component={this.renderInput} label="Enter Amount" />
                    <Field name="image" type="file" component={FileInput} label="Select an Image to Upload" />
                    <FieldArray name="inventory" component={this.renderMultiInput} label="Enter Inventory Required" />
                    <button className="ui right floated button primary">Submit</button>
                    <Link to={"/"} className="ui labeled icon basic button"><i class="left chevron icon"></i>Go Back</Link>
                  </form>}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  } else if (formValues.title.length > 20) {
    errors.title = "Your title length mustn't exceed 20 characters";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
}

export default reduxForm({
  form: 'campaignCreate',
  validate: validate
})(CampaignForm);
