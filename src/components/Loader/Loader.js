import { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class App extends Component {
  //other logic
  render() {
    return (
      <div className="loaderContainer">
        <Loader
          type="Puff"
          color="#0F7A8F"
          height={50}
          width={50}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
