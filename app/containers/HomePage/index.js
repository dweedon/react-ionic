import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setBackdropVisibility } from 'containers/App/actions';

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    activateBackdrop: React.PropTypes.func,
  };

  toggleBackdrop() {
    this.props.activateBackdrop();
  }

  render() {
    return (
      <button onClick={this.props.activateBackdrop} type="button">toggle me</button>
    );
  }
}

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    activateBackdrop: () => {
      return dispatch(setBackdropVisibility(true));
    }
  };
}

const mapStateToProps = createStructuredSelector({});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(App);