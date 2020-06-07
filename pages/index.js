import React, { Component } from "react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Card, Button } from "semantic-ui-react";
import { Link } from "../routes";
import ProjectDetails from '../components/projectDetails';

class Rootpage extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  projectdetails(){
    return this.props.campaigns.map((address , i)=>{
        return <ProjectDetails key = {i} id={i+1} address = {address} />
    })
}
  

  render() {
    return (
      <Layout>
        <div className = "text-center">
        {this.projectdetails()}
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
