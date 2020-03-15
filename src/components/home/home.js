
import React, { Component } from 'react';
import {  View,Image,Text, ScrollView } from 'react-native';
import { Form,Item,Label,Input,Icon, CheckBox,Button, Card,CardItem,Body,Header,Left, Title, Right} from 'native-base';



export default class Home extends Component {
     constructor(props) {
        super(props);
        this.state = {
   
        }

      }
      

    render() {
        return (
            <View style={{height:'100%'}}>
                <Header style={{backgroundColor:'#0C2C43'}}>
                    <Right>
                        <Icon type="MaterialIcons" name="notifications" style={{color:'#fff'}} />
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
          );
    }
  }


