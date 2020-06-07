import React, { Component } from "react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Card, Button } from "semantic-ui-react";
import { Link } from "../routes";

class Rootpage extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: 'Managed by : ' + address,
        description: (
          <Link route={`/Campaigns/show/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div className = "text-center">
          {this.renderCampaigns()}
          <Link route="/Campaigns/new">
            <Button
              content="Create Campaign"
              icon="add circle"
              floated="right"
              color="olive"
            />
          </Link>
        </div>
      </Layout>
    );
  }
}

export default Rootpage;
