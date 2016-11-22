import React from 'react';
import styled, { keyframes } from 'styled-components';

const Background = styled.a`
  position: absolute;
  opacity: ${({visible, animate}) => visible ? '1' : '0'};
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  animation: ${({visible, shouldAnimate}) => 
    !shouldAnimate ? 'none' : visible
      ? keyframes` from { opacity: 0; } to { opacity: 1; }` + ' 500ms'
      : keyframes` from { opacity: 1; } to { opacity: 0; }` + ' 250ms'
  };
  animation-fill-mode: forwards;
`;

class Backdrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false, 
      visible: props.visible,
    };
  }

  shouldComponentUpdate(state, props) {
    if (state.visible !== props.visible) {

      const setState = () => this.setState({
        animate: true,
        visible: this.props.visible
      });

      requestAnimationFrame(() => {
        if (this.props.visible) 
          setState();
        else
          console.log('delau');
          setTimeout(() => 
            requestAnimationFrame(() => 
              setState()
          ), 250);
      });
    }

    return state.visible === props.visible;
  }

  render() {
    let bg = null;
    if (this.state.visible) {
      bg = <Background 
            onClick={e => { 
              e.preventDefault(); 
              this.props.onClick(); 
            }}
            shouldAnimate={this.state.animate}
            visible={this.state.visible}
          ></Background>;
    }
    return (
      <div>{ bg }</div>
    );
  }
}

export default Backdrop;