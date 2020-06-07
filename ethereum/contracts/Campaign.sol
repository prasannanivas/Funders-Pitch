pragma solidity ^0.4.17;

contract campaignFactory{
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum, string title ,string description, string mypromise ) public {
       address newCampaign =  new Campaign(minimum, msg.sender, title , description , mypromise);
       deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns(address[]){
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    string public projectTitle;
    string public projectDescription;
    string public projectpromise;
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
    function Campaign(uint minimum, address creator,string title ,string description, string mypromise ) public {
        manager = creator;
        minimumContribution = minimum;
        projectTitle = title;
        projectDescription = description;
        projectpromise = mypromise;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        require(approvers[msg.sender]);
        require(!requests[index].approvals[msg.sender]);
        
        requests[index].approvals[msg.sender] = true;
        requests[index].approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted{
        require(requests[index].approvalCount > (approversCount / 2));
        require(!requests[index].complete);
        requests[index].recipient.transfer(requests[index].value);
        requests[index].complete = true;
        
    }
    
    function getSummary()
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            address,
            string,
            string,
            string
        )
    {
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager,
            projectTitle,
            projectDescription,
            projectpromise
            
        );
    }

    function gatRequestsCount() public view returns (uint256) {
        return requests.length;
    }
}