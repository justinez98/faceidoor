
import React, { Component } from 'react';
import {  View,Image,Text, ScrollView, Switch,TouchableOpacity } from 'react-native';
import { Icon,Button, Card,CardItem,Body,Header, Right, Item,Input,Thumbnail,List, ListItem,Left} from 'native-base';
import axios from 'axios';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import Sound from "react-native-sound";
export default class Audio extends Component {
     constructor(props) {
        super(props);
        this.state = {
            startRecording:false,
            recorded:false,
            audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',
            audioSettings: {
                SampleRate: 22050,
                Channels: 1,
                AudioQuality: "Low",
                AudioEncoding: "aac",
                MeteringEnabled: true,
                IncludeBase64: true,
                AudioEncodingBitRate: 32000
            },
            playAudio:false,
            pause:false
        }

      }

      async componentDidMount(){
        await AudioRecorder.prepareRecordingAtPath(
            this.state.audioPath,
            this.state.audioSettings
        );
        AudioRecorder.onProgress = data => {
            console.log(data, "onProgress data");
        };
        AudioRecorder.onFinished = data => {
            console.log(data, "on finish");
        };
      }

    async startRecording(){
        this.setState({
            startRecording:true
        })
        console.log(this.state.audioPath)
        await AudioRecorder.startRecording();
    }
    async stopRecording(){
        this.setState({
            startRecording:false,
            recorded:true
        })
        await AudioRecorder.stopRecording();
        
    }

    playAudio(){
        console.log(this.state.audioPath)
        this.setState({
            playingAudio:true
        })
        var whoosh = new Sound(this.state.audioPath, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
            // loaded successfully
            console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
            // Play the sound with an onEnd callback
            whoosh.play((success) => {
              if (success) {
                console.log('successfully finished playing');
                this.setState({
                    playingAudio:false
                })
              } else {
                console.log('playback failed due to audio decoding errors');
              }
            });
          });
    }
    


    render() {
        
        return (
            <View style={{display:'flex',height:'100%',backgroundColor:'#fff'}}>
                <Header style={{ backgroundColor: '#0C2C43' }}>
                                <Left>
                                    <Icon type="MaterialIcons" name="arrow-back" style={{ color: '#fff' }} onPress={() => this.props.back()} />
                                </Left>
                                <Body/>
                                <Right/>
                            </Header>
                            <View style={{height:120, backgroundColor:'#0C2C43', borderBottomRightRadius:210,paddingHorizontal:20}}>
                                <Text style={{ fontSize: 30, color: '#fff', fontFamily: 'monospace' }}>
                                    Send Voice Message to {this.props.receiver.toLocaleUpperCase()}
                                </Text>
                            </View>
                        {
                            this.state.recorded?
                            <View style={{ justifyContent:'center', alignItems:'center', marginTop:100}}>
                                <Text style={{fontSize:20, fontWeight:'bold'}}> Recorded</Text>
                                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', width:'100%'}}>
                                   
                                    {
                                        this.state.playingAudio?
                                        <TouchableOpacity onPress={() => this.setState({
                                            pause:true
                                        })}>
                                         <Icon type="AntDesign" name="pausecircle" style={{ color: '#000', fontSize:50,marginTop:20 }}  />
                                    </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={() => this.playAudio()}>
                                    <Icon type="AntDesign" name="play" style={{ color: '#000', fontSize: 50, marginTop: 20 }} />
                                </TouchableOpacity>
                                    }
                                
                                    
                                    <Icon type="FontAwesome" name="stop-circle-o" style={{ color: '#000', fontSize:50,marginTop:20 }}  />
                                </View>
                               
                            <Button warning style={{marginTop:50, width:200,borderRadius:10,display:'flex', justifyContent:'center'}}><Text> Record Again </Text></Button>
                            <Button success  style={{marginTop:10, width:200,borderRadius:10,display:'flex', justifyContent:'center'}}><Text style={{fontWeight:'bold', fontSize:20}}> Send </Text></Button>
                            </View>:
                            <View style={{ alignItems:'center', justifyContent:'center', marginTop:200}}>
                            {this.state.startRecording?
                                
                                <View style={{justifyContent:'center',alignItems:'center',  display:'flex'}}>
                                <Icon type="Entypo" name="mic" style={{ color: 'green', fontSize:100 }}  />
                                <Text style={{ fontSize:20, marginTop:10}}> RECORDING...</Text>
                            <TouchableOpacity onPress={() => this.stopRecording()}>
                                <Icon type="FontAwesome" name="stop-circle-o" style={{ color: 'red', fontSize:50,marginTop:20 }}  />
                            </TouchableOpacity>
                                
                            </View>
                            :
                            <View style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <Text style={{fontWeight:'bold', fontSize:20}}>Record a message for this person</Text>
                                <TouchableOpacity onPress={()=>this.startRecording()}>
                                <Icon type="MaterialCommunityIcons" name="record-rec" style={{ color: 'red', fontSize:150 }}  />
                            </TouchableOpacity>
                            </View>
                            
                            }
                            
                        </View>
                        }
                        

            </View>
          );
    }
  }


