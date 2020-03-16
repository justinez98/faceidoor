
import React, { Component } from 'react';
import {  View,Image,Text, ScrollView, Switch } from 'react-native';
import { Icon,Button, Card,CardItem,Body,Header, Right} from 'native-base';



export default class Status extends Component {
     constructor(props) {
        super(props);
        this.state = {
            lockStatus:false
        }

      }
      

    render() {
        return (
            <View style={{height:'100%'}}>
                <Header style={{backgroundColor:'#0C2C43'}}>
                    <Right/>
                </Header>
                <View style={{height:180, backgroundColor:'#0C2C43', borderBottomLeftRadius:210,paddingHorizontal:20}}>
                <Text style={{fontSize:30, color:'#fff', fontFamily:'monospace'}}>
                        FaceIDoor Status
                    </Text>
                    <Text style={{fontSize:20, color:'#fff', fontFamily:'monospace'}}>
                        Last updated : 1min ago
                    </Text>
                </View>
                <View style={{position:'absolute', top:180, width:'90%',left:20}} >
                        <Card>
                            <CardItem header>
                                <Text style={{fontWeight:'bold', fontSize:30}}>Status of lock</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <View style={{width:'100%',display:'flex',alignItems:'center', borderBottomColor:'#a9a9a9', borderBottomWidth:1}}>
                                        <Icon type="SimpleLineIcons"name="lock" style={{fontSize:100, marginBottom:10}}/>
                                    </View>
                                    <View style={{width:'100%',display:'flex',alignItems:'center',flexDirection:'row', justifyContent:'center'}}>
                                        <Text style={{marginTop:10, fontWeight:'bold', fontSize:20}}>Lock</Text>
                                       <Switch style={{marginTop:10, marginHorizontal:10}} value={this.state.lockStatus} />
                                       <Text style={{marginTop:10,fontWeight:'bold', fontSize:20}}>Unlock</Text>
                                    </View>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                                <Text>Last lock by : Justine</Text>
                            </CardItem>
                        </Card>
                   </View>
                   <View style={{display:'flex',flexDirection:'row',position:'absolute', top:480, left:18, width:'100%'}}>
                        <Card style={{width:'45%', height:270}}>
                            <CardItem >
                                <Text style={{fontWeight:'bold', fontSize:20,}}>Battery Status</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Icon type="FontAwesome5"name="battery-three-quarters" style={{fontSize:80, color:'#0C2C43'}}/>
                                  <Text style={{fontWeight:'bold',fontSize:30}}> 
                                      85%
                                  </Text>
                                  <Text  style={{fontWeight:'bold'}}> 
                                      Good Condition
                                  </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card style={{width:'45%', height:270}}>
                            <CardItem >
                                <Text style={{fontWeight:'bold', fontSize:20,}}>Camera Status</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Icon type="FontAwesome5"name="camera-retro" style={{fontSize:80, color:'#0C2C43'}}/>
                                  <Text style={{fontWeight:'bold',fontSize:30}}> 
                                      Camera Active
                                  </Text>
                                  <Button style={{display:'flex', justifyContent:'center', height:30, padding:5, backgroundColor:'#0C2C43'}}> 
                                      <Text style={{color:'#fff'}}>Take a snapshot</Text>
                                  </Button>
                                </Body>
                            </CardItem>
                        </Card>
                   </View>
            </View>
          );
    }
  }


