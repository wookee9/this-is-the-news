import React from "react";
import Component1 from "Component1";
import AudioController from "components/AudioController";
import AudioController from "components/VisualController";

export default class Container extends React.Component {
  constructor() {
    super();
  }

  render() {
    var result = Date.now();

    let headline = "";
    let soundtrack = "";
    let videoLayers = [];

    // pass state down into components

    return (
      <div>
        <h1>Container {result}</h1>
        <Component1/>
        <AudioController/>
        <VisualController/>
      </div>
    );
  }
}
