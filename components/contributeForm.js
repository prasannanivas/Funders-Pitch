import React, { Component } from "react";
import { Form , Input ,Button} from "semantic-ui-react";
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';
class contributeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            isloading: false,
            value: '',
            message: '',
        }
        this.submitHandler = this.submitHandler.bind(this);
    }
    async submitHandler(evt){
        evt.preventDefault();
        this.setState({
            isloading:true,
            message: 'Waiting for confirmation....'
        });
        const campaign = Campaign(this.props.address);
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
            Router.replaceRoute(`/campaigns/show/${this.props.address}`);
        } catch (error) {
            console.log(error);
            this.setState({
                message: error.message,
                isloading:false,
                value: ''
            })
            return;
        }
        this.setState({
            isloading:false,
            value:'',
            message:"Thank you so much for contributing.  Thanks!",
        });
        Router.pushRoute(`/Campaigns/show/${this.props.address}`);

    }
  render() {
    return (
      <Form onSubmit = {this.submitHandler}>
        <Form.Field >
          <label>Amount to contribute</label>
          <Input type="decimal" label="ether" size="massive" value = {this.state.value} onChange = {(evt)=> {this.setState({value : evt.target.value})}} labelPosition="right" />
          <Button color="olive" loading = {this.state.isloading} size="large">Contribute</Button>
        <h1 className = "text-green-500 text-2xl font-bold">{this.state.message}</h1>
        </Form.Field>
      </Form>
    );
  }
}

export default contributeForm;
