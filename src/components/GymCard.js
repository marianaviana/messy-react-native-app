import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { GymCardsFetch } from '../actions';
import ListItem from './ListItem';

class GymCard extends Component {
  componentWillMount() {
    this.props.GymCardsFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ gymcards }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(gymcards);
  }

  renderRow(gymcard) {
    return <ListItem gymcard={gymcard} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const gymcards = _.map(state.gymcards, (val, id) => {
    return { ...val, id };
  });

  return { gymcards };
};

export default connect(mapStateToProps, { GymCardsFetch })(GymCard);
