
import React, { Component } from 'react';
import {  View,Image,Text, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Form,Item,Label,Input,Icon, CheckBox,Button, Card,CardItem,Body,Header,Left, Title, Right, Thumbnail,Spinner} from 'native-base';
import loadingGif from '../../assets/image/loading.gif'
import axios from 'axios';
import NotificationPage from '../notification/notification'

export default class Home extends Component {
     constructor(props) {
        super(props);
        this.state = {
            notificationPage:false,
            name: '',
            email:'',
            id:'',
            lock_id:'',
            status:'lock',
            activity:[],
            contactsNum:'',
            loading:true,

        }

      }
      
      async componentDidMount(){
          var id = await AsyncStorage.getItem('id')
          var email = await AsyncStorage.getItem('email')
          var name = await AsyncStorage.getItem('name')
          var lock_id = await AsyncStorage.getItem('lock_id')
          this.setState({
              name,
              email,
              id,
              lock_id
          })
          await this.getLockStatus()
          await this.getLockActivity()
          await this.getAllowed()
          this.setState({
              loading: false
          })
        
      }
    
     async getLockStatus(){
        axios.post('http://35.247.190.138/faceidoor/lock_status/getLockStatus.php?lock_id=1')
          .then(async(response) => {
              if(response.data.response==="201"){
                this.setState({
                    status:response.data.status.status,
                })
                setTimeout(() =>this.getLockStatus(), 1000);
              }else{
                alert('No lock found to be link with this account')
                this.props.navigation.navigate('login')
              }
           
          }, (error) => {
            console.log(error);
          });
     }

     async getLockActivity(){

        axios.post('http://35.247.190.138/faceidoor/lock_activity/getLockActivity.php', {
            lock_id: this.state.lock_id,
          })
          .then(async(response) => {
              if(response.data.response==="201"){
                  console.log(response)
                this.setState({
                    activity:response.data.activity,
                })
                
              }else{
              }
           
          }, (error) => {
            console.log(error);
          });
     }

     async getAllowed(){
         console.log('get allowed')
        axios.post('http://35.247.190.138/faceidoor/allowed_list/getContacts.php', {
            lock_id: 1,
          })
          .then(async(response) => {
              if(response.data.response==="201"){
                  console.log(response)
                this.setState({
                    contactsNum:response.data.contacts
                })
              }else{
              }
           
          }, (error) => {
            console.log(error);
          });
     }

     backToHome(){
         this.setState({
             notificationPage:false
         })
     }


    render() {
        return (
            <View style={{height:'100%'}}>
              {
                  this.state.notificationPage?
                        <NotificationPage  back={this.backToHome.bind(this)}/>
                           
              :
              <View>
                  {this.state.loading?
                  <View style={{display:'flex',justifyContent:'center', alignContent:'center', height:'100%', backgroundColor:'#fff'}}>
                                    <ImageBackground
                                        style={{ width: '100%', height: 300 }}
                                        source={loadingGif}
                                    />
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
                  Hello {this.state.name}
              </Text>
              <Text style={{fontSize:20, color:'#fff', fontFamily:'monospace'}}>
                  FaceIDoor
              </Text>
              <View style={{ marginTop:10, width:'100%'}}>
                  <Card style={{shadowOffset:2, height:150, width:300,}}>
                      <CardItem header style={{display:'flex', justifyContent:'center'}}>
                          <Text style={{fontSize:25,fontWeight:'bold' }}>Door lock status</Text>
                      </CardItem>
                      <CardItem>
                          <Body style={{display:'flex',flexDirection:'row', marginLeft:20}}>
                            {this.state.status==='unlock'?
                                 <Icon type="MaterialIcons" name='lock-open' />:
                                 <Icon type="MaterialIcons" name='lock' />
                            }
                              <Text style={{fontSize:40,marginLeft:30}}>
                                 {this.state.status.toLocaleUpperCase()}
                              </Text>
                          </Body>
                      </CardItem>
                  </Card>
              </View>
              <View style={{ display:'flex', marginTop:10, width:'100%', alignItems:'flex-end' }}>
                  <Card style={{shadowOffset:2, height:150, width:300,}}>
                      <CardItem header style={{display:'flex', justifyContent:'center'}} >
                          <Text style={{fontSize:25, textAlign:'right', fontWeight:'bold'}}>Allowed User</Text>
                      </CardItem>
                      <CardItem>
                          <Body style={{display:'flex',flexDirection:'row',marginLeft:20}}>
                             <Icon type="MaterialIcons" name='people' />
                              <Text style={{fontSize:40, marginLeft:20,fontWeight:'bold'}}>
                                 {this.state.contactsNum.length}
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
                              <Text style={{fontSize:15, marginLeft:10,color:'#a9a9a9'}}>
                                {this.state.activity.datetime}
                              </Text>
                              <Text style={{fontSize:30, marginLeft:10,fontWeight:'bold'}}>
                                 {this.state.activity.action}
                              </Text>
                              <Text style={{fontSize:20, marginLeft:10}}>
                                 by user id { this.state.activity.user_id}
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
                 
              }

            </View>
          );
    }
  }


