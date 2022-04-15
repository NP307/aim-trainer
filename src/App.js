import './aim.css';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxHeight: '',
      maxWidth: '',
      aimBlockHeight: 200,
      aimBlockWidth: 200,
      aimBlockColor: 'blue',
      positionX: null,
      positionY: null,
      aimBlock: 'auto'
    };
    this.stopPosition = this.stopPosition.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        maxWidth: window.innerWidth - this.state.aimBlockWidth,
        maxHeight: window.innerHeight - this.state.aimBlockHeight
      });
    });
    this.startPosition()
  }

  startPosition() {
    this.setState({
      pos: setInterval(() => {
        this.setState((state) => {
          state.positionX = Math.round(Math.random() * state.maxWidth);
          state.positionY = Math.round(Math.random() * state.maxHeight);
        })
      }, 500),
    });
  }

  stopPosition() {
      this.setState({
          aimBlockColor: 'red',
          aimBlock: 'none'
      });
      clearInterval(this.state.pos);
    setTimeout(() => {
        this.setState({
            aimBlockColor: 'blue',
            aimBlock: 'auto',
        });
        this.startPosition();
    }, 2000);

  }

  render(){
    const { maxHeight, maxWidth, aimBlockHeight, aimBlockWidth, positionX, positionY } = this.state;

    const aimBlock = {
      backgroundColor: this.state.aimBlockColor,
      position: 'absolute',
      height: aimBlockHeight,
      width: aimBlockWidth,
      left: positionX,
      top: positionY,
      transform: 'translate(-' + aimBlockWidth / 2 + 'px, -' + aimBlockHeight / 2 + 'px)',
      pointerEvents: this.state.aimBlock,
    };

    const aimWrapper = {
      position: 'relative',
      marginTop: aimBlockHeight / 2,
      marginLeft: aimBlockWidth / 2,
      width: maxWidth,
      height: maxHeight,
    };

    return (
        <>
          <div style={aimWrapper}>
            <div className='aimBlock' style={aimBlock} onClick={this.stopPosition} />
          </div>
        </>
    );
  }
}

export default App;
