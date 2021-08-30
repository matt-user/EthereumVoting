pragma solidity >=0.7.0 <0.9.0;

contract ElectionFactory {
    address[] public deployedElections;
    
    function createElection(string memory _name) public {
        address newElection = address(new Election(_name, msg.sender));
        deployedElections.push(newElection);
    }
    
    function getDeployedElections() public view returns (address[] memory) {
        return deployedElections;
    }
}

contract Election {
    struct Voter {
        address delegate;
        bool voted;
    }
    
    struct Proposal {
        string name;
        string description;
        uint voteCount;
    }
    
    address public manager;
    mapping(address => Voter) public voters;
    Proposal[] public proposals;
    string name;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    constructor(string memory _name, address creator) {
        manager = creator;
        name = _name;
    }
    
    /**
     * @dev Add a proposal to be voted on in the election.
     * @param _name name of the proposal _description description of the proposal.
     **/
    function addProposal(string memory _name, string memory _description) public restricted {
        Proposal memory newProposal = Proposal({
            name: _name,
            description: _description,
            voteCount: 0
        });
        proposals.push(newProposal);
    }
    
    /**
     * @dev Vote on a proposal
     * @param index index of proposal to give vote
    **/
    function vote(uint index) public {
        require(!voters[msg.sender].voted);
        Proposal storage proposal = proposals[index];
        proposal.voteCount++;
        voters[msg.sender].voted = true;
    }
    
    /**
     * @dev Pick winnder out of the proposals
     * @return the winning proposals address
    **/
    function pickWinner() public restricted view returns (string memory) {
        uint maxCount = 0;
        uint winningIndex;
        for(uint i = 0; i < proposals.length; i++) {
            if (proposals[i].voteCount > maxCount) {
                maxCount = proposals[i].voteCount;
                winningIndex = i;
            }
        }
        // Require at least one proposal has a vote
        require(maxCount > 0);
        return proposals[winningIndex].name;
    }
    
}
