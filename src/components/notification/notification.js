
import React, { Component } from 'react';
import {  View,Image,Text, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Form,Item,Label,Input,Icon, CheckBox,Button, Card,CardItem,Body,Header,Left, Title, Right, Thumbnail,Spinner} from 'native-base';
import loadingGif from '../../assets/image/loading.gif'
import axios from 'axios';


export default class NotificationPage extends Component {
     constructor(props) {
        super(props);
        this.state = {


        }

      }


    render() {
        return (
                        <View>
                            <Header style={{ backgroundColor: '#0C2C43' }}>
                                <Left>
                                    <Icon type="MaterialIcons" name="arrow-back" style={{ color: '#fff' }} onPress={() => this.props.back()} />
                                </Left>
                                <Body/>
                                <Right/>
                            </Header>
                            <View style={{height:180, backgroundColor:'#0C2C43', borderBottomRightRadius:210,paddingHorizontal:20}}>
                                <Text style={{ fontSize: 30, color: '#fff', fontFamily: 'monospace' }}>
                                    Notification
                                </Text>
                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'monospace' }}>
                                    3 unreconized person detected
                                </Text>
                            </View>
                            <View style={{position: 'absolute', top: 170,width:'100%', padding:20}}>
                                <Card style={{ height: 250, width: '100%',  }}>
                                    <CardItem header style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Thumbnail style={{height:80, width:80, marginTop:30}}   source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }} />
                                    </CardItem>
                                    <CardItem>
                                        <Body >
                                            <Text style={{ fontSize: 20, marginLeft: 20 }}>
                                                Detected @ 5.20p.m
                                            </Text>
                                            <View style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'100%', marginTop:10}}>
                                                <Button success><Text> Mark as read </Text></Button>
                                                <Button danger><Text> Alert authorities </Text></Button>
                                            </View>
                                            
                                        </Body>
                                    </CardItem>
                                </Card>
                            </View>
                            </View>
                           
          );
    }
  }


