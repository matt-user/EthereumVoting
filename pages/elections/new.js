import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class ElectionNew extends Component {
    state = {
        electionName: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: ''});

        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                .createElection(this.state.electionName)
                .send({ from: accounts[0] });
            // TODO: Bring user back to home page
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });
    };

    render() {
        return (
            <Layout>
                <h3>Create an Election</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Name of Election</label>
                        <Input
                            value={this.state.electionName}
                            onChange={event => this.setState({ electionName: event.target.value })}
                        />
                    </Form.Field>

                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button loading={this.state.loading} primary>Create!</Button>
                </Form>
            </Layout>
        );
    }
}

export default ElectionNew;
