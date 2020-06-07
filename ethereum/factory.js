import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance =  new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x2d0fD810e4a7707ca9E394D1d29ED8591d1497dB'
);

export default instance;