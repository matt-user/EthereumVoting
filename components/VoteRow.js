import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import Election from '../ethereum/election';
import web3 from '../ethereum/web3';

class VoteRow extends Component {
    render() {
        const { Row, Cell } = Table;
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label></label>
                </Form.Field>
            </Form>
        );
    }
}

export default VoteRow;
