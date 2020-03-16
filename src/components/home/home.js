
import React, { Component } from 'react';
import {  View,Image,Text, ScrollView } from 'react-native';
import { Form,Item,Label,Input,Icon, CheckBox,Button, Card,CardItem,Body,Header,Left, Title, Right, Thumbnail} from 'native-base';



export default class Home extends Component {
     constructor(props) {
        super(props);
        this.state = {
            notificationPage:false
        }

      }
      

    render() {
        return (
            <View style={{height:'100%'}}>
              {
                  this.state.notificationPage?
                        <View>
                            <Header style={{ backgroundColor: '#0C2C43' }}>
                                <Left>
                                    <Icon type="MaterialIcons" name="arrow-back" style={{ color: '#fff' }} onPress={() => this.setState({ notificationPage: false })} />
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
                           
              :
                  <View>
                        <Header style={{backgroundColor:'#0C2C43'}}>
                    <Right>
                        <Icon type="MaterialIcons" name="notifications" style={{color:'#fff'}} onPress={()=> this.setState({notificationPage:true})}/>
                    </Right>
                </Header>
                <View style={{height:180, backgroundColor:'#0C2C43', borderBottomRightRadius:210,paddingHorizontal:20}}>
                    <Text style={{fontSize:30, color:'#fff', fontFamily:'monospace'}}>
                        Hello Justine
                    </Text>
                    <Text style={{fontSize:20, color:'#fff', fontFamily:'monospace'}}>
                        FaceIDoor
                    </Text>
                    <View style={{ marginTop:10, width:'100%'}}>
                        <Card style={{shadowOffset:2, height:150, width:300}}>
                            <CardItem header style={{display:'flex', justifyContent:'center'}}>
                                <Text style={{fontSize:25,fontWeight:'bold' }}>Door lock status</Text>
                            </CardItem>
                            <CardItem>
                                <Body style={{display:'flex',flexDirection:'row'}}>
                                   <Icon type="MaterialIcons" name='lock' />
                                    <Text style={{fontSize:20,marginLeft:20}}>
                                       Lock at 15.32 by ( FaceIDoor )
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{ display:'flex', marginTop:10, width:'100%', alignItems:'flex-end' }}>
                        <Card style={{shadowOffset:2, height:150, width:300,}}>
                            <CardItem header style={{display:'flex', justifyContent:'center'}} >
                                <Text style={{fontSize:25, textAlign:'right', fontWeight:'bold'}}>Frequent User</Text>
                            </CardItem>
                            <CardItem>
                                <Body style={{display:'flex',flexDirection:'row',}}>
                                   <Icon type="MaterialIcons" name='lock' />
                                    <Text style={{fontSize:20, marginLeft:20}}>
                                       Lock at 15.32 by ( FaceIDoor )
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{ display:'flex', marginTop:10, width:'100%', flexDirection:'row', justifyContent:'space-between' }}>
                        <Card style={{ height:250, width:'45%',}}>
                            <CardItem header style={{display:'flex', justifyContent:'center'}} >
                                <Text style={{fontSize:25, fontWeight:'bold'}}>Recent</Text>
                            </CardItem>
                            <CardItem>
                                <Body >
                                    <View style={{width:'100%',borderBottomWidth: 1,borderBottomColor:'#a9a9a9'}}>
                                    <Text style={{fontSize:10, marginLeft:10,color:'#a9a9a9'}}>
                                       5:15p.m.
                                    </Text>
                                    <Text style={{fontSize:15, marginLeft:10,}}>
                                       Unlock
                                    </Text>
                                    <Text style={{fontSize:15, marginLeft:10}}>
                                       -- Imran
                                    </Text>
                                    </View>
                                    <View style={{width:'100%',borderBottomWidth: 1,borderBottomColor:'#a9a9a9', marginTop:20}}>
                                    <Text style={{fontSize:10, marginLeft:10,color:'#a9a9a9'}}>
                                       5:15p.m.
                                    </Text>
                                    <Text style={{fontSize:15, marginLeft:10,}}>
                                       Unlock
                                    </Text>
                                    <Text style={{fontSize:15, marginLeft:10}}>
                                       -- Imran
                                    </Text>
                                    </View>
                                   
                                   
                                </Body>
                            </CardItem>
                        </Card>
                        <Card style={{shadowOffset:2, height:250, width:'45%',}}>
                            <CardItem header style={{display:'flex', justifyContent:'center'}} >
                                <Text style={{fontSize:25, fontWeight:'bold'}}>Unknown Detected</Text>
                            </CardItem>
                            <CardItem>
                                <Body >
                                    <Text style={{fontSize:80, marginLeft:20}}>
                                       2
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    
                </View>
                  </View>
              }

            </View>
          );
    }
  }


