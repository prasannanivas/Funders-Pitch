import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance =  new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xF12d37E1c84153257e139E2d14b371a16558856b'
);

export default instance;