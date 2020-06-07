import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input } from "semantic-ui-react";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import { Link, Router } from "../../routes";
class Newrequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      value: "",
      recipient: "",
      message: "",
      isloading: false,
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  static async getInitialProps(props) {
    return { address: props.query.address };
  }

  async submitHandler(evt) {
    evt.preventDefault();
    this.setState({ isloading: true });
    const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({ from: accounts[0] });
    } catch (error) {
      this.setState({ message: error.message, isloading: false });
      return;
    }
    this.setState({
      isloading: false,
    });
    Router.pushRoute(`/campaigns/show/${this.props.address}/request`);
  }
  render() {
    return (
      <Layout>
        <Link primary route={`/campaigns/show/${this.props.address}/request`}>
          <a>
            {" "}
            <Button color="vk" size="mini">{`<-  go back`}</Button>{" "}
          </a>
        </Link>
        <Form className="text-center" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Description</label>
            <Input
              onChange={(evt) => {
                this.setState({ description: evt.target.value });
              }}
              value={this.state.description}
            />
          </Form.Field>

          <Form.Field>
            <label>Value</label>
            <Input
              label="ether"
              labelPosition="right"
              onChange={(evt) => {
                this.setState({ value: evt.target.value });
              }}
              value={this.state.value}
              type="number"
            />
          </Form.Field>

          <Form.Field>
            <label>Recipient</label>
            <Input
              onChange={(evt) => {
                this.setState({ recipient: evt.target.value });
              }}
              value={this.state.recipient}
            />
          </Form.Field>
          <Button color="teal" loading={this.state.isloading}>
            Submit
          </Button>
          <h1 className="font-bold text-2xl text-red-400">
            {this.state.message}
          </h1>
        </Form>
      </Layout>
    );
  }
}

export default Newrequest;
