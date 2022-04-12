import './aim.css';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxHeight: window.innerHeight,
      maxWidth: window.innerWidth,
      aimBlockHeight: 200,
      aimBlockWidth: 200,

    }
  }

  render(){
    const { maxHeight, maxWidth, aimBlockHeight, aimBlockWidth } = this.state;

    setInterval(() => {
      this.setState({
        maxWidth: window.innerWidth - aimBlockWidth,
        maxHeight: window.innerHeight - aimBlockHeight
      })
    });

    const aimBlock = {
      backgroundColor: 'blue',
      height: aimBlockHeight,
      width: aimBlockWidth,
      transform: 'translate(-' + aimBlockHeight / 2 + 'px, -' + aimBlockWidth / 2 + 'px)',
    };

    const aimWrapper = {
      marginTop: aimBlockHeight / 2,
      marginLeft: aimBlockWidth / 2,
      width: maxWidth,
      height: maxHeight,
    };

    return (
        <>
          <div style={aimWrapper}>
            <div style={aimBlock} />
          </div>
        </>
    );
  }
}

export default App;
