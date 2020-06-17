import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import {Router} from '../../routes';


class Campaignnew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minContribution: "",
      projectTitle : '',
      projectDescription:'',
      projectpromise:'',
      errorMessage: "",
      isLoading:false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  async onSubmit(evt) {
    evt.preventDefault();
    this.setState({isLoading:true});
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(this.state.minContribution ,this.state.projectTitle, this.state.projectDescription , this.state.projectpromise ).send({
        from: accounts[0],
      });
      console.log("accounts" + accounts[0]);
      Router.pushRoute('/');
    } catch (err) {
      this.setState({
        errorMessage: err.message,
      });
    }
    this.setState({isLoading:false});
  }
  render() {
    return (
      <Layout>
        <Form className="text-center" onSubmit={this.onSubmit}>
          <Form.Field>
            <div className="flex flex-wrap">
              <div className="w-4/5">
                <label className="font-extrabold text-2xl">
                  Minimum contribution
                </label>
                <Input
                  type="number"
                  required
                  value={this.state.minContribution}
                  onChange={(evt) => {
                    this.setState({ minContribution: evt.target.value });
                  }}
                  label="wei"
                  labelPosition="right"
                  size="huge"
                />
              </div>
              <div className="w-4/5">
                <label className="font-extrabold text-2xl">
                  Title
                </label>
                <Input
                  required
                  value={this.state.projectTitle}
                  onChange={(evt) => {
                    this.setState({ projectTitle: evt.target.value });
                  }}
                  size="huge"
                />
              </div>
              <div className="w-4/5">
                <label className="font-extrabold text-2xl">
                  Description
                </label>
                <Input
                  required
                  value={this.state.projectDescription}
                  onChange={(evt) => {
                    this.setState({ projectDescription: evt.target.value });
                  }}
                  size="huge"
                />
              </div>
              <div className="w-4/5">
                <label className="font-extrabold text-2xl">
                  My promise
                </label>
                <Input
                  required
                  value={this.state.projectpromise}
                  onChange={(evt) => {
                    this.setState({ projectpromise: evt.target.value });
                  }}
                  size="huge"
                />
              </div>
              <div className="w-4/5 py-6">
                <Button 
                  size="huge" 
                  color="teal"
                  loading = {this.state.isLoading}>
                  Create!
                </Button>
              </div>
            </div>
            <h1 className="text-center font-bold text-2xl text-red-500 border-solid border-red-600">
              {this.state.errorMessage}
            </h1>
          </Form.Field>
        </Form>
      </Layout>
    );
  }
}
export default Campaignnew;
