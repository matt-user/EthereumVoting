import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import Election from '../../ethereum/election';

class ProposalIndex extends Component {
    static async getInitialProps(props) {
        const { address } = props.query;
        const election = Election(address);
        const proposalsCount;
    }
}

export default ProposalIndex;
