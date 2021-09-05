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
    Proposal private winningProposal;
    string private name;
    uint totalVoteCount;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    constructor(string memory _name, address creator) {
        manager = creator;
        name = _name;
        totalVoteCount = 0;
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
        totalVoteCount++;
    }
    
    /**
     * @dev Pick winner out of the proposals
    **/
    function pickWinner() public restricted {
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
        winningProposal = proposals[winningIndex];
    }

    /**
    * @dev Return information about the winner
    * @return returns the winning proposal
    **/
    function getWinningProposal() public view returns(Proposal memory) {
        require(winningProposal.voteCount != 0);
        return winningProposal;
    }

    /**
    * @dev return the number of proposals
    * @return the number of proposals in the election
    **/
    function getProposalCount() public view returns (uint) {
        return proposals.length;
    }

    /**
    * @dev return the number of votes cast
    * @return number of votes cast in the election
    **/
    function getTotalVoteCount() public view returns (uint) {
        return totalVoteCount;
    }

    /**
    * @dev Return information about the election
    * @return number of proposals, name of elections, and address of manager
    **/
    function getSummary() public view returns (uint, string memory, address, uint) {
        return (
            proposals.length,
            name,
            manager,
            totalVoteCount
        );
    }
    
}
