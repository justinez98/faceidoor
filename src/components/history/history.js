
import React, { Component } from 'react';
import {  View,Image,Text, ScrollView, Switch } from 'react-native';
import { Icon,Button, Card,CardItem,Body,Header, Right, Item,Input,Thumbnail,List, ListItem,Left} from 'native-base';



export default class History extends Component {
     constructor(props) {
        super(props);
        this.state = {
            activities:[]
        }

      }

      

    render() {

        const renderList = this.state.activities.map((activity,i)=>{
            return(
                <ListItem thumbnail >
                <Left>
                    <Text>5:66 p.m.</Text>
                </Left>
                <Body>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Unlock</Text>
                    <View>

                        <Text style={{ textAlign: 'center', fontSize: 30 }}> Justine Yong</Text>
                    </View>

                </Body>
                <Right>
                </Right>
            </ListItem>

            )
        })

        return (
            <View style={{height:'100%',backgroundColor:'#fff'}}>
                <Header style={{backgroundColor:'#0C2C43'}}>
                    <Right />
                </Header>
                <View style={{height:180, backgroundColor:'#0C2C43', borderBottomLeftRadius:210,paddingHorizontal:20}}>
                <Text style={{fontSize:30, color:'#fff', fontFamily:'monospace'}}>
                        History
                    </Text>
                    <Text style={{fontSize:20, color:'#fff', fontFamily:'monospace'}}>
                         6 record of enter and exit
                    </Text>
                   <View style={{marginTop:20}}>
                        <Item rounded style={{backgroundColor:'#fff'}}>
                            <Input style={{marginLeft:10}} placeholder='Search...' />
                        </Item>
                        
                   </View>
                  
                   
                </View>
                <ScrollView style={{marginTop:10, backgroundColor:'#fff', height:'100%'}}>
                            <List style={{ marginTop: 10 }}>
                            {
                                this.state.activities.length===0?
                                <Text style={{justifyContent:'center',textAlign:'center',marginTop:50}}>No available History</Text>:
                                renderList
                            }
                          
                        </List>
                        </ScrollView>

            </View>
          );
    }
  }


