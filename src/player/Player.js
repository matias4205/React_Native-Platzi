import React, { Component } from 'react';
import { StyleSheet, Text, ActivityIndicator, Image } from 'react-native';
import Video from 'react-native-video';

import Layout from './components/LayoutPlayer';
import ControlsLayout from './components/ControlsLayout';
import PlayPause from './components/PlayPause';
import FullScreen from './components/FullScreen';
import TimeLeft from './components/TimeLeft';
import ProgressBar from './components/ProgressBar';


class Player extends Component {
    state = {
      loading: undefined,
      paused: false,
      fullscreen: false,
      time: {
        currentTimeMillis: 0,
        totalTimeMillis: 0,
      },
      sliderValue: 0
    }

    playPause = () => {
      this.setState({
        paused: !this.state.paused
      })
    }

    onChangeValue = (value) => {
      this.setState({
        sliderValue: value
      })
    }
    
    onFinalSliderValue = () => {
      this.playerComp.seek(this.state.sliderValue)
    }

    onBuffer = ({ isBuffering })=>{
      this.setState({
          loading: isBuffering
      });
    }

    onLoad = ({ duration }) => {
      this.setState({
        time: {
          totalTimeMillis: duration
        }
      });
    }

    onProgress = (timeData) => {
      this.setState((prevState) => ({
        time: {
          ...prevState.time,
          currentTimeMillis: timeData.currentTime
        }
      }));
      this.onChangeValue(timeData.currentTime);
    }

    toggleFullScreen = () => {
      // this.setState({
      //   paused: !this.state.paused
      // });
      this.playerComp.presentFullscreenPlayer();
    }

    render() {
      return (
        <Layout
          controls={ 
            <ControlsLayout>
              <PlayPause paused={ this.state.paused } onPress={ this.playPause } />
              <ProgressBar onSlidingComplete={this.onFinalSliderValue} onValueChange={this.onChangeValue} sliderValue={this.state.sliderValue} duration={this.state.time} />
              <TimeLeft time={ this.state.time } />
              <FullScreen fullscreen={ this.state.fullscreen } onPress={ this.toggleFullScreen } />
            </ControlsLayout>
          }
          loading={ this.state.loading }
          loader={ <ActivityIndicator size='large' color="white"/> }
        >
          <Video
            source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={styles.video}
            resizeMode="contain"
            onBuffer={ this.onBuffer }
            onLoad={this.onLoad}
            onProgress={ this.onProgress }
            paused={ this.state.paused }
            ref={(ref) => {
              this.playerComp = ref;
            }}
          />
        </Layout>
      )
    }
  }
  
  const styles = StyleSheet.create({
    video: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
    fullScreenIcon: {
      width: 18,
      resizeMode: 'contain'
    }
  })
  
  export default Player