
import React, { Component } from 'react';
import {  View,Image,Text, ScrollView, Switch } from 'react-native';
import { Icon,Button, Card,CardItem,Body,Header, Right, Item,Input,Thumbnail,List, ListItem,Left} from 'native-base';
import axios from 'axios';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import Audio from './audio'

export default class Contact extends Component {
     constructor(props) {
        super(props);
        this.state = {
            contacts:[],
            showAudiopage:false,
            receiver_id:'',
            receiver:''
            
        }

      }


      componentDidMount(){
          this.getContact()
          
      }

      async getContact(){
          axios.post('http://35.213.139.175/faceidoor/allowed_list/getContacts.php', {
              lock_id: 1,
          })
              .then(async (response) => {
                  if (response.data.response === "201") {
                      this.setState({ 
                          contacts: response.data.contacts
                        })
                  } else {
                  }

              }, (error) => {
                  console.log(error);
              });
      }

        backToContact(){
            this.setState({
                showAudiopage:false
            })
        }




    render() {
        

        const renderList = this.state.contacts.map((contact,i)=>{
            return(
                <ListItem thumbnail key={i} >
                <Left>
                    <Thumbnail   source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }} />
                </Left>
                <Body>
                    <Text style={{textAlign:'center', fontWeight:'bold'}}>{contact.name.toLocaleUpperCase()}</Text>
                    <View>
                        <Button style={{ display: 'flex',justifyContent:'center',backgroundColor:'#0C2C43' }} onPress={()=>this.setState({showAudiopage:true,receiver:contact.name,receiver_id:contact.id})}>
                        <Text style={{textAlign:'center', color:'#fff'}}>Message</Text>
                       </Button>
                    </View>
                    
                </Body>
                <Right>
                </Right>
            </ListItem>
            );
        })



        return (
            <View style={{height:'100%',backgroundColor:'#fff'}}>
                {
                    this.state.showAudiopage?
                    <Audio back={this.backToContact.bind(this)} receiver={this.state.receiver} receiver_id={this.state.receiver_id}/>
                    :
                    <View>
                        <Header style={{backgroundColor:'#0C2C43'}}>
                    <Right />
                </Header>
                <View style={{height:180, backgroundColor:'#0C2C43', borderBottomLeftRadius:210,paddingHorizontal:20}}>
                <Text style={{fontSize:30, color:'#fff', fontFamily:'monospace'}}>
                        Contacts
                    </Text>
                    <Text style={{fontSize:20, color:'#fff', fontFamily:'monospace'}}>
                       {this.state.contacts.length} contact enable
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
                            renderList
                          }
                        </List>
                        </ScrollView>
                    </View>
                }
                

            </View>
          );
    }
  }


