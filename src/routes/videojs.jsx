import React, {Component} from 'react';
import './videojs.css';
import videojs from 'video.js';

class VideoJSPlayerComponent extends Component {

    player;
    videoNode;
    videoJsOptions = {
        autoplay: true,
        muted: false,
        height: 720,
        width: 1280,
        controls: true,
        sources: [
            {
                src: "http://admin.test/assets/6/playlist.m3u8",
                type: "application/x-mpegURL"

             
            }
        ],
    };

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            playedSeconds: 0,
            remainingVideoPlay: 0,
            totalDuration: 0
        };

    }

    componentDidMount() {
        this.player = videojs(this.videoNode, this.videoJsOptions, () => {
            if (this.player) {

                // Triggered
                console.log('onPlayerReady');

                this.player.on('play', (event) => {
                    this.setState({
                        isPlaying: true,
                    })
                })
                this.player.on('loadedmetadata', (event) => {
                    // @ts-ignore
                    this.setState({totalDuration: this.player.duration()})
                })
                this.player.on('pause', (event) => {
                    this.setState({
                        isPlaying: false,
                    })
                })
                this.player.on('ended', (event) => {
                    console.log("ended")
                })
                this.player.on('timeupdate', (event) => {
                    // @ts-ignore
                    this.setState({playedSeconds: this.player.currentTime()})
                    // @ts-ignore
                    this.setState({remainingVideoPlay: this.player.remainingTime()})
                })

            }
        });
    }

    play = () => {
        if (this.player) {
            this.player.play();
        }
    }

    pause = () => {
        if (this.player) {
            this.player.pause();
        }
    }

    forwardVideo = () => {
        if (this.player) {
            this.player.currentTime(this.player.currentTime() + 10);
        }
    }

    backwardVideo = () => {
        if (this.player) {
            this.player.currentTime(this.player.currentTime() - 10);
        }
    }

    jumpTo = () => {
        if (this.player) {
            this.player.currentTime(55);
        }
    }

    togglePlay = () => {
        if (this.state.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    secondsToHms = (secs) => {
        let hours = Math.floor(secs / 3600);
        let minutes = Math.floor(secs / 60) % 60;
        let seconds = Math.floor(secs % 60);
        return [hours, minutes, seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v, i) => v !== "00" || i > 0)
            .join(":")
    };
    
    render() {
        const {totalDuration, playedSeconds, remainingVideoPlay, isPlaying} = this.state;
        return (
            
            <div className="customVideoPlayer">
                
                <div className="playerWrapper" data-vjs-player>
                    <video id='video' ref={node => (this.videoNode = node)} className="video-js vjs-fluid"/>
                </div>
                <hr/>
                <div>
                    <div>
                        Played Time: {this.secondsToHms(playedSeconds)}
                    </div>
                    <div>
                        Total Time: {this.secondsToHms(totalDuration)}
                    </div>
                    <div>
                        Remaining Time: {this.secondsToHms(remainingVideoPlay)}
                    </div>
                </div>
                <br/>
                <div className="d-flex" style={{display: "none"}}>
                    <button className="btn btn-danger btn-sm" onClick={this.togglePlay}>{isPlaying ? "Pause" : "Play"}</button>&nbsp;
                    {/*
                    <button className="btn btn-danger btn-sm" onClick={this.jumpTo}>Play from 55th second</button>&nbsp;
                    <button className="btn btn-danger btn-sm" onClick={this.forwardVideo}>10 secs +</button>&nbsp;
                    <button className="btn btn-danger btn-sm" onClick={this.backwardVideo}>10 secs -</button>
                    */}
                </div>
            </div>
        );
    }
}

export default VideoJSPlayerComponent;