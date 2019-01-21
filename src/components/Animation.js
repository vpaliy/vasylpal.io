import React from 'react';
import Lottie from 'react-lottie';

class AnimationBuilder {
  constructor(jsonFile) {
    this.jsonFile = jsonFile;
    this.isLoopEnabled = false;
    this.isAutoplayEnabled = false;
    this.rendererSettings = {};
    this.width = 200;
    this.height = 200;
    this.style = { margin: 0 };
  }

  withLoop(enable) {
    this.isLoopEnabled = enable;
    return this;
  }

  withStyle(style) {
    this.style = style;
    return this;
  }

  withAutoplay(enable) {
    this.isAutoplayEnabled = enable;
    return this;
  }

  withRenderSettings(settings) {
    this.rendererSettings = settings;
    return this;
  }

  withHeight(height) {
    this.height = height;
    return this;
  }

  withWidth(width) {
    this.width = width;
    return this;
  }

  build() {
    const options = {
      loop: this.isLoopEnabled,
      autoplay: this.isAutoplayEnabled,
      animationData: this.jsonFile,
      rendererSettings: this.rendererSettings,
    };
    return createAnimation(options, this.style, this.height, this.width);
  }
}

export const createAnimation = (options, style, height = 200, width = 200) =>
  class Logo extends React.Component {
    defaultOptions = options;

    render() {
      return (
        <Lottie
          style={style}
          options={this.defaultOptions}
          height={height}
          width={width}
        />
      );
    }
  };

export default AnimationBuilder;
