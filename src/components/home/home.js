
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
            intruder:[],
            totalDetected:''

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
          await this.getIntruder()
          this.setState({
              loading: false
          })
        
      }
    
     async getLockStatus(){
        axios.post('http://35.213.139.175/faceidoor/lock_status/getLockStatus.php?lock_id=1')
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

        axios.post('http://35.213.139.175/faceidoor/lock_activity/getLockActivity.php', {
            lock_id: this.state.lock_id,
          })
          .then(async(response) => {
              if(response.data.response==="201"){
                this.setState({
                    activity:response.data.activity,
                })
                console.log(response.data.activity)
              }else{
              }
           
          }, (error) => {
            console.log(error);
          });
     }

     async getAllowed(){
         console.log('get allowed')
        axios.post('http://35.213.139.175/faceidoor/allowed_list/getContacts.php', {
            lock_id: this.state.lock_id,
          })
          .then(async(response) => {
              if(response.data.response==="201"){
                this.setState({
                    contactsNum:response.data.contacts
                })
              }else{
              }
           
          }, (error) => {
            console.log(error);
          });
     }

     async getIntruder(){
        //  console.log('get intruder')
        let fetchForm = new FormData();
        fetchForm.append("lock_id", this.state.lock_id);
        const url = "http://35.213.139.175/faceidoor/get_intruder/get_intruder.php";
        const options = {
          method: 'post',
          headers:  { 'content-type': `multipart/form-data; boundary=${fetchForm._boundary}` } ,
          data: fetchForm,
          url: url
        };

        try {
          const response = await axios(options);
          if (response.data.response === '201') {
              var tempArr = [];
            response.data.intruder.forEach(intruder => {
                if(intruder.notify==="0")
                    tempArr.push(intruder)
              });
              this.setState({
                intruder:tempArr,
                totalDetected:response.data.intruder.length
              })
              setTimeout(() =>this.getIntruder(), 10000);
          }
        } catch (e) {
          console.log(e);
        }
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
                        <NotificationPage  back={this.backToHome.bind(this)} intruder={this.state.intruder}/>
                           
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
                    {
                        this.state.intruder.length > 0 ?
                            <View >
                                <View style={{ justifyContent: 'center', position: 'absolute', left: 17, top:13 }}>
                                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize:10 }}>
                                        {this.state.intruder.length}
                                    </Text>
                                </View>

                                <Icon type="MaterialIcons" name="notifications-none" style={{ color: '#fff', fontSize:40 }} onPress={() => this.setState({ notificationPage: true })} />
                            </View>
                            :


                            <Icon type="MaterialIcons" name="notifications" style={{ color: '#fff', fontSize:40 }} onPress={() => this.setState({ notificationPage: true })} />
                    }

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
                              <View style={{width:'100%'}}>
                              <Text style={{fontSize:15, marginLeft:10,color:'#a9a9a9'}}>
                              {this.state.activity.length>0?this.state.activity[this.state.activity.length-1].datetime:'No activity'}
                              </Text>
                              <Text style={{fontSize:30, marginLeft:10,fontWeight:'bold'}}>
                                 {this.state.activity[this.state.activity.length-1].action.toLocaleUpperCase()}
                              </Text>
                              <Text style={{fontSize:20, marginLeft:10}}>
                                  by {this.state.activity[this.state.activity.length-1].user_id}
                              </Text>
                              </View>                      
                          </Body>
                      </CardItem>
                  </Card>
                  <Card style={{shadowOffset:2, height:250, width:'45%',}}>
                      <CardItem header style={{display:'flex', justifyContent:'center'}} >
                          <Text style={{fontSize:25, fontWeight:'bold'}}>Total Unknown</Text>
                      </CardItem>
                      <CardItem>
                          <Body >
                              <Text style={{fontSize:80, marginLeft:20}}>
                                 {this.state.totalDetected}
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


