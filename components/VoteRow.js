import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Election from '../ethereum/election';

class VoteRow extends Component {
    onVote = async () => {
        const election = Election(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await election.methods.vote(this.props.id).send({
            from: accounts[0]
        });
    };

    render() {
        const { Row, Cell } = Table;
        const { id, proposal, totalVoteCount } = this.props;

        return (
            <Row>
                <Cell>{id}</Cell>
                <Cell>{proposal.name}</Cell>
                <Cell>{proposal.description}</Cell>
                <Cell>{proposal.voteCount}/{totalVoteCount}</Cell>
                <Cell>
                    <Button color="green" basic onClick={this.onVote}>Vote</Button>
                </Cell>
            </Row>
        );
    }
}

export default VoteRow;
