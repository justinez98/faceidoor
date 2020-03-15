
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
                    <Right>
                        <Icon name="home" />
                    </Right>
                </Header>
                <View style={{height:180, backgroundColor:'#0C2C43', borderBottomLeftRadius:210,paddingHorizontal:20}}>
                <Text style={{fontSize:30, color:'#fff', fontFamily:'monospace'}}>
                        FaceIDoor Status
                    </Text>
                    <Text style={{fontSize:20, color:'#fff', fontFamily:'monospace'}}>
                        Last updated : 1min ago
                    </Text>
                   <View style={{marginTop:20}}>
                        <Card>
                            <CardItem header>
                                <Text style={{fontWeight:'bold', fontSize:30}}>Status of lock</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <View style={{width:'100%',display:'flex',alignItems:'center', borderBottomColor:'#a9a9a9', borderBottomWidth:1}}>
                                        <Icon name="home" style={{fontSize:100}}/>
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
                   <View style={{display:'flex',flexDirection:'row', justifyContent:'space-around', marginTop:10}}>
                        <Card style={{width:'45%'}}>
                            <CardItem >
                                <Text style={{fontWeight:'bold', fontSize:20,}}>Battery Status</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Icon name="home" style={{fontSize:100}}/>
                                  <Text> 
                                      85%
                                  </Text>
                                  <Text> 
                                      Good Condition
                                  </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card style={{width:'45%'}}>
                            <CardItem  style={{display:'flex',flexDirection:'column'}}>

                                    <Icon name="home" style={{fontSize:80}}/>
                                  <Text style={{fontWeight:'bold', fontSize:15,}}> 
                                      Camera Active
                                  </Text>
                                  <Text> 
                                      Good Condition
                                  </Text>
                                  <Button light style={{height:30, marginTop:20}}><Text> Take a snapshot </Text></Button>
                            
                            </CardItem>
                        </Card>
                   </View>
                   
                </View>

            </View>
          );
    }
  }


