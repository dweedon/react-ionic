import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Backdrop from 'components/Backdrop';
import { setBackdropVisibility } from './actions';
import { selectBackdropVisibility } from './selectors';

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: React.PropTypes.node,
    toggleBackdrop: React.PropTypes.func,
    backdropVisiblity: React.PropTypes.bool,
  };

  toggleBackdrop() {
    this.props.toggleBackdrop(!this.props.backdropVisiblity);
  }

  render() {
    return (
      <div>
        {React.Children.toArray(this.props.children)}
        <Backdrop visible={this.props.backdropVisiblity} onClick={() => { this.toggleBackdrop(); }} />
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleBackdrop: (visibility) => {
      return dispatch(setBackdropVisibility(visibility));
    }
  };
}

const mapStateToProps = createStructuredSelector({
  backdropVisiblity: selectBackdropVisibility(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(App);