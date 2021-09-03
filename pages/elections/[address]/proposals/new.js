import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Link from 'next/link';
import Election from '../../../ethereum/election';
import web3 from '../../../ethereum/web3';
import Layout from '../../../components/Layout';

class ProposalNew extends Component {
    state = {
        name: '',
        description: '',
        loading: false,
        errorMessage: ''
    };

    static async getInitialProps(props) {
        const { address } = props.query;
        return { address };
    }

    onSubmit = async event => {
        event.preventDefault();

        const election = Election(this.props.address);
        const { description, name } = this.state;

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods
                .createProposal(name, description)
                .send({ from: accounts[0] });
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });
    };

    render() {
        return (
            <Layout>
                <Link href={`/elections/${this.props.address/proposals}`}>
                    <a>Back</a>
                </Link>
                <h3>Create a Proposal</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Name</label>
                        <Input
                            value={this.state.name}
                            onChange={event => this.setState({ name: event.target.value })}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Description</label>
                        <Input
                            value={this.state.description}
                            onChange={event => this.setState({ description: event.target.value })}
                        />
                    </Form.Field>

                    <Message error header="Error" content={this.state.errorMessage} />
                    <Button primary loading={this.state.loading}>Create!</Button>
                </Form>
            </Layout>
        );
    }
}

export default ProposalNew;
