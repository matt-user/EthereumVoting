import React, { Component } from 'react';
import { Button, Table, Message } from 'semantic-ui-react';
import Link from 'next/link';
import Layout from '../../../../components/Layout';
import Election from '../../../../ethereum/election';
import VoteRow from '../../../../components/VoteRow';

class ProposalIndex extends Component {
    state = { winner: '' };

    static async getInitialProps(props) {
        const { address } = props.query;
        const election = Election(address);
        const proposalCount = await election.methods.getProposalCount().call();
        const totalVoteCount = await election.methods.getTotalVoteCount().call();

        const proposals = await Promise.all(
            Array(parseInt(proposalCount))
                .fill()
                .map((element, index) => {
                    return election.methods.proposals(index).call();
                })
        );
        return { address, proposals, proposalCount, totalVoteCount };
    }

    renderRows() {
        return this.props.proposals.map((proposal, index) => {
            return <VoteRow
                key={index}
                id={index}
                proposal={proposal}
                totalVoteCount={this.props.totalVoteCount}
                address={this.props.address}
            />;
        });
    }

    onFinalize = async () => {
        const election = Election(this.props.address);
        await election.methods.pickWinner().call();
        const winner = await election.methods.getWinningProposal().call();
        console.log(`winner: ${winner}`);
        this.setState({ winner: winner.name });
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table;
        return (
            <Layout>
                <h3>Proposals</h3>
                <Link href={`/elections/${this.props.address}/proposals/new`}>
                    <a><Button primary>Add Proposal</Button></a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Name</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Vote Count</HeaderCell>
                            <HeaderCell>Vote</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRows()}
                    </Body>
                </Table>
                <Button onClick={this.onFinalize}>Finalize Vote</Button>
                <Message header="Winner: " content={this.state.winner}></Message>
            </Layout>
        );
    }
}

export default ProposalIndex;
