import React, { Component } from "react";
import Campaign from "../../ethereum/campaign";
import { Link } from "../../routes";
import { Button, Table } from "semantic-ui-react";
import Layout from "../../components/Layout";
import RequestRow from "../../components/Requestrow";

class RequestIndex extends Component {
  static async getInitialProps(props) {
    console.log("this is " + props.query.address);
    const campaign = Campaign(props.query.address);
    const requestcount = await campaign.methods.gatRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call(); 
    const requests = await Promise.all(
      Array(parseInt(requestcount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );
    return { address: props.query.address, requests, requestcount , approversCount};
  }

  renderRow(){
      return this.props.requests.map((request, i)=>{
          return <RequestRow key = {i} id={i+1} address = {this.props.address} approversCount = {this.props.approversCount} request = {request}/>
      })
  }
  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <div className="text-center">
          <Link route={`/campaigns/show/${this.props.address}/request/new`}>
            <Button size="massive" color="orange">
              New request +
            </Button>
          </Link>

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
