import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Election from '../../ethereum/election';
import web3 from '../../ethereum/web3';
import Link from 'next/link';

class ElectionShow extends Component {
    static async getInitialProps(props) {
        const election = Election(props.query.address);
        const summary = await election.methods.getSummary().call();

        return {
            address: props.query.address,
            proposalCount: summary[0],
            electionName: summary[1],
            manager: summary[2]
        };
    }

    renderCards() {
        const {
            proposalCount,
            electionName,
            manager
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this election, can add proposals to it, and call the function to end the election',
                style: { overflowWrap: 'break-word'}
            },
            {
                header: electionName,
                meta: 'Name of the Election',
                description: 'Elections can be voted on by voters and come to a close by the manager.'
            },
            {
                header: proposalCount,
                meta: 'Number of proposals',
                description: 'A proposal can be voted on once by any voter.'
            }
        ];
        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <h3>Election Show</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>

                        <Grid.Column width={6}>
                            
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Link href={`/elections/${this.props.address}/proposals`}>
                                <a><Button primary>View Proposals</Button></a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }
}

export default ElectionShow;
