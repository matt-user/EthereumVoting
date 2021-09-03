import Link from 'next/link';
import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import Election from '../../ethereum/election';

class ProposalIndex extends Component {
    static async getInitialProps(props) {
        const { address } = props.query;
        const election = Election(address);
        const proposalCount = await election.methods.getProposalCount().call();
        const totalVoteCount = await election.methods.totalVoteCount.call();

        const proposals = await Promise.all(
            Array(parseInt(proposalCount))
                .fill()
                .map((element, index) => {
                    return election.method.proposals(index).call();
                })
        );
        return { address, proposals, proposalCount, totalVoteCount };
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
                </Table>
            </Layout>
        );
    }
}

export default ProposalIndex;
