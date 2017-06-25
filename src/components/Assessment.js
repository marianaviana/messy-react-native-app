import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { AssessmentsFetch } from '../actions';
import ListItemAssessment from './ListItemAssessment';

class Assessment extends Component {
  componentWillMount() {
    this.props.AssessmentsFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ assessments }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(assessments);
  }

  renderRow(assessment) {
    return <ListItemAssessment assessment={assessment} />;
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
  const assessments = _.map(state.assessments, (val, id) => {
    return { ...val, id };
  });

  return { assessments };
};

export default connect(mapStateToProps, { AssessmentsFetch })(Assessment);
