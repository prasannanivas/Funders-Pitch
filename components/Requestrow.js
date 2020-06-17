import React, { Component } from "react";
import { Table, Label, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";
import { Router } from "../routes";
class Requestrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      isApprovalLoading: false,
      isFinalizeLoading: false,
    };
    this.approveHandler = this.approveHandler.bind(this);
    this.finalizeHandler = this.finalizeHandler.bind(this);
  }
  async approveHandler() {
    this.setState({
      isApprovalLoading: true,
    });
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    try {
      await campaign.methods.approveRequest(this.props.id - 1).send({
        from: accounts[0],
      });
    } catch (error) {
      this.setState({
        message: error.message,
        isApprovalLoading: false,
      });
    }
    this.setState({
      isApprovalLoading: false,
    });
    Router.pushRoute(`/campaigns/show/${this.props.address}/request`);
  }

  async finalizeHandler() {
    this.setState({
      isFinalizeLoading: true,
    });
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    try {
      await campaign.methods.finalizeRequest(this.props.id - 1).send({
        from: accounts[0],
      });
    } catch (error) {
      this.setState({
        message: error.message,
        isFinalizeLoading: false,
      });
    }
    this.setState({
      isFinalizeLoading: false,
    });
    Router.pushRoute(`/campaigns/show/${this.props.address}/request`);
  }

  render() {
    return (
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label>{this.props.id}</Label>
          </Table.Cell>
          <Table.Cell>
            <Label>{this.props.request.description}</Label>
          </Table.Cell>
          <Table.Cell>
            <Label>{this.props.request.value}</Label>
          </Table.Cell>
          <Table.Cell>
            <Label>{this.props.request.recipient}</Label>
          </Table.Cell>
          <Table.Cell>
            <Label>
              {this.props.request.approvalCount}/{this.props.approversCount}
            </Label>
          </Table.Cell>
          <Table.Cell>
            <Label>
              <Button
                size="small"
                color="teal"
                onClick={this.approveHandler}
                loading={this.state.isApprovalLoading}
              >
                Yes
              </Button>
            </Label>
          </Table.Cell>
          {this.props.manager === this.props.account ? (
          <Table.Cell>  
              <Label>
                <Button
                  size="small"
                  color="green"
                  onClick={this.finalizeHandler}
                  loading={this.state.isFinalizeLoading}
                >
                  Yes
                </Button>
              </Label>
          </Table.Cell>) : null}
        </Table.Row>
      </Table.Body>
    );
  }
}
export default Requestrow;
