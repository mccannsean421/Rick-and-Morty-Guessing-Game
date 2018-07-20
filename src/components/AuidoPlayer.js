import React, { Component } from 'react';
import styled from 'styled-components';

//assets
import theme_song from './../sounds/theme_song.mp3';
import muteIcon from './../images/mute.svg';
import unmuteIcon from './../images/unmute.svg';

class AudioPlayer extends Component {

    state = {
        mute: true,
    }

    muteAudio = () => {
        var { mute } = this.state;
        this.setState({
            mute: !mute
        });
    }

    render() {
        var { mute } = this.state;
        return (
            <PlayerWrapper>
                <audio 
                    autoPlay="true" 
                    loop="true" 
                    muted={ mute }
                >
                    <source src={theme_song} type="audio/wav"></source>
                </audio>
                
                <button onClick={this.muteAudio}>
                    {
                        mute ?
                        <img src={unmuteIcon} alt="mute icon"></img>
                        : <img src={muteIcon} alt="mute icon"></img>
                    }
                    
                </button>
            </PlayerWrapper>
        )
    }
}

const PlayerWrapper =  styled.div`
    button {
        background-color: transparent;
        border: none;
        img {
            height: 40px;
            width: 40px;
        }
    }
`;

export default AudioPlayer;