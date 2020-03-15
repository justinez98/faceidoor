
import React, { Component } from 'react';
import {  View,Image,Text, ScrollView, Switch } from 'react-native';
import { Icon,Button, Card,CardItem,Body,Header, Right, Item,Input,Thumbnail,List, ListItem,Left} from 'native-base';



export default class Contact extends Component {
     constructor(props) {
        super(props);
        this.state = {
            lockStatus:false
        }

      }

      renderList(){
            return(
                <View>
                         <ListItem thumbnail >
                <Left>
                    <Thumbnail   source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }} />
                </Left>
                <Body>
                    <Text style={{textAlign:'center', fontWeight:'bold'}}>Justine Yong</Text>
                    <View>
                        <Button style={{ display: 'flex',justifyContent:'center',backgroundColor:'#0C2C43' }}>
                        <Text style={{textAlign:'center', color:'#fff'}}>Message</Text>
                       </Button>
                    </View>
                    
                </Body>
                <Right>
                </Right>
            </ListItem>
            <ListItem thumbnail >
                <Left>
                    <Thumbnail   source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }} />
                </Left>
                <Body>
                    <Text style={{textAlign:'center', fontWeight:'bold'}}>Justine Yong</Text>
                    <View>
                        <Button style={{ display: 'flex',justifyContent:'center',backgroundColor:'#0C2C43' }}>
                        <Text style={{textAlign:'center', color:'#fff'}}>Message</Text>
                       </Button>
                    </View>
                    
                </Body>
                <Right>
                </Right>
            </ListItem>
                </View>
               
            

            )
      }
      

    render() {
        return (
            <View style={{height:'100%'}}>
                <Header style={{backgroundColor:'#0C2C43'}}>
                    <Right>
                    <Icon type="MaterialIcons" name="notifications" style={{color:'#fff'}} />
                    </Right>
                </Header>
                <View style={{height:180, backgroundColor:'#0C2C43', borderBottomLeftRadius:210,paddingHorizontal:20}}>
                <Text style={{fontSize:30, color:'#fff', fontFamily:'monospace'}}>
                        Contacts
                    </Text>
                    <Text style={{fontSize:20, color:'#fff', fontFamily:'monospace'}}>
                       6 contact enable
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
                              this.renderList()
                          }
                        </List>
                        </ScrollView>

            </View>
          );
    }
  }


