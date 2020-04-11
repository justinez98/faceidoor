
import React, { Component } from 'react';
import {  View,Image,Text, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Form,Item,Label,Input,Icon, CheckBox,Button, Card,CardItem,Body,Header,Left, Title, Right, Thumbnail,Spinner} from 'native-base';
import loadingGif from '../../assets/image/loading.gif'
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';


export default class NotificationPage extends Component {
     constructor(props) {
        super(props);
        this.state = {
                intruder:this.props.intruder
                
        }
      }
    
    async markRead(i,id){
        var temp = [...this.state.intruder];
        temp.splice(i,1)
        this.setState({
            intruder:temp
        })
        let fetchForm = new FormData();
        fetchForm.append("notification_id", id);
        const url = "http://35.213.139.175/faceidoor/get_intruder/edit_intruder.php";
        const options = {
          method: 'post',
          headers:  { 'content-type': `multipart/form-data; boundary=${fetchForm._boundary}` } ,
          data: fetchForm,
          url: url
        };

        try {
          const response = await axios(options);
          if (response.data.response === '201') {
              console.log('sucess')
          }
        } catch (e) {
          console.log(e);
        }
    }


    render() {

            const renderNotification = this.state.intruder.map((intruder,i)=>{
                return(
                    <Card key={i} style={{ height: 400, width: '100%', borderRadius:10}}>
                    <CardItem header style={{ display: 'flex', justifyContent: 'center' }}>
                        <Thumbnail style={{height:200, width:'100%', marginTop:30}}   source={{ uri: 'http://35.213.139.175/faceidoor/images/'+ intruder.image }} />
                    </CardItem>
                    <CardItem>
                        <Body >
                            <Text style={{ fontSize: 20, marginLeft: 20 }}>
                                Detected @ {intruder.timestamp}
                            </Text>
                            <View style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'100%', marginTop:10}}>
                                <Button success onPress={()=>this.markRead(i,intruder.id)}><Text> Mark as read </Text></Button>
                                <Button danger><Text> Alert authorities </Text></Button>
                            </View>
                            
                        </Body>
                    </CardItem>
                </Card>
                )
            })
        return (
                        <View style={{height:'100%'}}>
                            <Header style={{ backgroundColor: '#0C2C43' }}>
                                <Left>
                                    <Icon type="MaterialIcons" name="arrow-back" style={{ color: '#fff' }} onPress={() => this.props.back()} />
                                </Left>
                                <Body/>
                                <Right/>
                            </Header>
                            <View style={{height:120, backgroundColor:'#0C2C43', borderBottomRightRadius:210,paddingHorizontal:20}}>
                                <Text style={{ fontSize: 30, color: '#fff', fontFamily: 'monospace' }}>
                                    Notification
                                </Text>
                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'monospace' }}>
                                    {this.state.intruder.length} unreconized  detected
                                </Text>
                            </View>
                            <ScrollView style={{width:'100%', height:'100%', paddingHorizontal:20}}>
                                {this.state.intruder.length>0?
                                renderNotification:
                                <View style={{justifyContent:'center',height:'100%'}}>
                                    <Text style={{textAlign:'center', marginTop:100}}>
                                        No Notification
                                    </Text>
                                    
                                </View>
                                }
                            </ScrollView>
                            </View>
                           
          );
    }
  }


