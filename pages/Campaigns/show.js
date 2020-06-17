import React, { Component } from "react";
import ContributeForm from "../../components/contributeForm";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/Campaign";
import { Link } from "../../routes";
import { Button } from "semantic-ui-react";

class show extends Component {
  static async getInitialProps(props) {
    const campaign = await Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    const manager = await campaign.methods.manager().call();
    console.log("manager is ", manager);

    console.log(summary);

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      projectTitle: summary[5],
      projectDescription: summary[6],
      projectPromise: summary[7],
      address: props.query.address,
    };
  }

  render() {
    return (
      <Layout>
        <div className="text-center rounded overflow-hidden shadow-2xl ">
          <div className="text-4xl m-5 text-gray-800">
            {this.props.projectTitle}
          </div>
          <div className="p-10 m-10 flex flex-wrap text-center justify-center">
            <div className="w-4/5 p-5">
              <ContributeForm address={this.props.address} />
            </div>
            <div className="w-4/5">
              <Link route={`/campaigns/show/${this.props.address}/request`}>
                <Button size="massive" color="linkedin">
                  Requests
                </Button>
              </Link>
            </div>
            <div className="w-1/2 text-center rounded overflow-hidden shadow-2xl hover:bg-purple-800">
              <div className="p-5 m-5">
                <div className="font-bold text-xs mb-2">
                  Manager : {this.props.manager}
                </div>
                <p className="text-gray-700 text-base">
                  manager is the person who deployed this contract
                </p>
              </div>
            </div>

            <div className="w-1/2 text-center rounded overflow-hidden shadow-2xl hover:bg-purple-800">
              <div className="p-5 m-5">
                <p className="text-green-500 text-4xl text-base hover:text-white">
                  Contract Balance : {this.props.balance / 100000000000000000}{" "}
                  ether
                </p>
                <p className="text-gray-700 text-base">
                  Pending balance allows yoo to .......
                </p>
              </div>
            </div>

            <div className="w-1/2 text-center rounded overflow-hidden shadow-2xl hover:bg-purple-800">
              <div className="p-5 m-5">
                <p className="text-red-700 text-base">
                  Number of requests : {this.props.requestsCount}
                </p>
                <p className="text-gray-700 text-base">
                  This contract has these many request counts
                </p>
              </div>
            </div>

            <div className="w-1/2 text-center rounded overflow-hidden shadow-2xl hover:bg-purple-800">
              <div className="p-5 m-5">
                <p className="text-green-500 text-2xl text-base hover:text-white">
                  Approvers : {this.props.approversCount}
                </p>
                <p className="text-gray-700 text-base">
                  Must have minimum approvers
                </p>
              </div>
            </div>

            <div className="w-1/2 text-center rounded overflow-hidden shadow-2xl hover:bg-purple-800">
              <div className="p-5 m-5">
                <p className="text-green-500 text-2xl font-bold hover:text-white text-base">
                  Minimum Contribution: {this.props.minimumContribution}
                </p>
                <p className="text-gray-700 text-base">
                  This contract is laid a minimum contribution
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default show;
