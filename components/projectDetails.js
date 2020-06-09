import React, { Component } from "react";
import Campaign from "../ethereum/campaign";

class Projectdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount(props) {
    console.log("from here" + props);

    const campaign = await Campaign(this.props.address);
    const summary = await campaign.methods.getSummary().call();

    console.log("ingirundhu", summary);
    this.setState({
      projectTitle: summary[5],
      projectDescription: summary[6],
      projectPromise: summary[7],
    });
  }

  render() {
    return (
      <div className="hover:bg-purple-400 bg-gray-200">
        <a
          
          href={`/Campaigns/show/${this.props.address}`}
        >
          <div className="rounded overflow-hidden shadow-xl">
            <div className="p-2 mt-10">
              <div className="text-4xl mb-2">
                {this.state.projectTitle}
              </div><hr className = "bg-pink-400 py-1"></hr>
              <p className="text-gray-700 font-bold text-lg text-base">
                {this.state.projectDescription}
              </p>
            </div>
            <div className="py-10">
              <span className="inline-block bg-blue-400 rounded-full  text-lg p-5 font-semibold text-gray-700 mr-2">
                #{this.state.projectPromise}
              </span>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
export default Projectdetails;
