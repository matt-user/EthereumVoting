import React, { Component, createFactory } from 'react';
import { Card, Button } from 'semantic-ui-react';
import Link from 'next/link';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';

class ElectionIndex extends Component {
    static async getInitialProps() {
        //console.log(JSON.stringify(factory, null, 4));
        const elections = await factory.methods.getDeployedElections().call();
        return { elections };
    }

    renderElections() {
        const items = this.props.elections.map(address => {
            return {
                header: address,
                description: (
                    <Link href={`/elections/${address}`}>
                        <a>View Election</a>
                    </Link>
                ),
                fluid: true
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Elections</h3>
                    <Link href="/elections/new">
                        <a><Button floated="right" content="Create an Election" icon="add circle" primary /></a>
                    </Link>
                    {this.renderElections()}
                </div>
            </Layout>
        );
    }
}

export default ElectionIndex;
