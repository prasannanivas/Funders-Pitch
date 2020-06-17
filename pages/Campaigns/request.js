import React, { Component } from "react";
import Campaign from "../../ethereum/campaign";
import { Link } from "../../routes";
import { Button, Table } from "semantic-ui-react";
import Layout from "../../components/Layout";
import RequestRow from "../../components/Requestrow";
import web3 from "../../ethereum/web3";

class RequestIndex extends Component {
  static async getInitialProps(props) {
    console.log("this is " + props.query.address);
    const campaign = Campaign(props.query.address);
    const requestcount = await campaign.methods.gatRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();
    const manager = await campaign.methods.manager().call();
    const acc = await web3.eth.getAccounts();
    console.log("manager is here", manager, "account is", acc[0]);
    const requests = await Promise.all(
      Array(parseInt(requestcount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );
    return {
      address: props.query.address,
      requests,
      requestcount,
      approversCount,
      manager,
      account: acc[0],
    };
  }

  renderRow() {
    return this.props.requests.map((request, i) => {
      return (
        <RequestRow
          key={i}
          id={i + 1}
          address={this.props.address}
          approversCount={this.props.approversCount}
          request={request}
          manager={this.props.manager}
          account={this.props.account}
        />
      );
    });
  }
  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <div className="text-center">
          {this.props.manager === this.props.account ?
          <Link route={`/campaigns/show/${this.props.address}/request/new`}>
            <Button size="massive" color="orange">
              New request +
            </Button>
          </Link>:null}

          <Table>
            <Header>
              <Row>
                <HeaderCell>ID</HeaderCell>
                <HeaderCell>Description</HeaderCell>
                <HeaderCell>Amount</HeaderCell>
                <HeaderCell>Recipient</HeaderCell>
                <HeaderCell>Approval Count</HeaderCell>
                <HeaderCell>Approve</HeaderCell>
                <HeaderCell>Finalize</HeaderCell>
              </Row>
            </Header>
            {this.renderRow()}
          </Table>
        </div>
      </Layout>
    );
  }
}
export default RequestIndex;
