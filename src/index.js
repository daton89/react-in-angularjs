const angular = require("angular");
const React = require("react");
const { react2angular } = require("react2angular");

const app = angular.module("app", []);

class HelloComponent extends React.Component {
  render() {
    return (
      <div>
        <p>i am: {this.props.nickname}</p>
      </div>
    );
  }
}

app.component("helloComponent", react2angular(HelloComponent, ["nickname"]));
