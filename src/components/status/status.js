
import React, { Component } from 'react';
import {  View,Image,Text, ScrollView, Switch } from 'react-native';
import { Icon,Button, Card,CardItem,Body,Header, Right} from 'native-base';
import axios from 'axios';
import Snaphot from './snaphot'

export default class Status extends Component {
     constructor(props) {
        super(props);
        this.state = {
            lockStatus:false,
            viewSnapshot:false

        }
      }

      componentDidMount(){
          this.getLockStatus()
      }

      async getLockStatus(){
        axios.post('http://35.213.139.175/faceidoor/lock_status/getLockStatus.php?lock_id=1')
          .then(async(response) => {
              if(response.data.response==="201"){
                if(response.data.status.status==='unlock'){
                    this.setState({
                        lockStatus:true,
                    })
                }else{
                    this.setState({
                        lockStatus:false,
                    })
                } 
                setTimeout(() =>this.getLockStatus(), 10000);
              }else{
                alert('No lock found to be link with this account')
                this.props.navigation.navigate('login')
              }
           
          }, (error) => {
            console.log(error);
          });
      } 
      
      async changeLockStatus(){
        var tempLockStatus = !this.state.lockStatus
        var temp
        if(tempLockStatus){
            temp = 'unlock'
        }else{
            temp ='lock'
        }
        axios.post('http://35.213.139.175/faceidoor/lock_status/changeLockStatus.php', {
            lock_id: 1,
            battery: 100,
            status: temp,
          })
          .then(async(response) => {
              if(response.data.response==="201"){
                this.setState({lockStatus:tempLockStatus})
              }else{
              }
           
          }, (error) => {
            console.log(error);
          });
      }
      backToHome(){
        this.setState({
            viewSnapshot:false
        })
    }


    render() {
        return (
            <View>
                {
                    this.state.viewSnapshot?
                    <Snaphot back={this.backToHome.bind(this)}/>
                    :
                    <View style={{height:'100%'}}>
                    <Header style={{backgroundColor:'#0C2C43'}}>
                        <Right/>
                    </Header>
                    
                    <View style={{height:180, backgroundColor:'#0C2C43', borderBottomLeftRadius:210,paddingHorizontal:20}}>
                    <Text style={{fontSize:30, color:'#fff', fontFamily:'monospace'}}>
                            FaceIDoor Status
                        </Text>
                    </View>
                    <View style={{position:'absolute', top:150, width:'90%',left:20}} >
                            <Card>
                                <CardItem header>
                                    <Text style={{fontWeight:'bold', fontSize:30,}}>Status of lock</Text>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <View style={{width:'100%',display:'flex',alignItems:'center', borderBottomColor:'#a9a9a9', borderBottomWidth:1}}>
                                            {this.state.lockStatus?
                                            <Icon type="SimpleLineIcons"name="lock-open" style={{fontSize:100, marginBottom:10}}/>
                                            :
                                            <Icon type="SimpleLineIcons"name="lock" style={{fontSize:100, marginBottom:10}}/>
                                            }
                                            
                                        </View>
                                        <View style={{width:'100%',display:'flex',alignItems:'center',flexDirection:'row', justifyContent:'center'}}>
                                            <Text style={this.state.lockStatus?{marginTop:10, fontSize:20}:{marginTop:10, fontWeight:'bold', fontSize:20}}>Lock</Text>
                                           <Switch style={{marginTop:10, marginHorizontal:10}} value={this.state.lockStatus} onValueChange={()=> this.changeLockStatus()}/>
                                           <Text style={this.state.lockStatus?{marginTop:10,fontWeight:'bold', fontSize:20}:{marginTop:10, fontSize:20}}>Unlock</Text>
                                        </View>
                                    </Body>
                                </CardItem>
                                <CardItem footer>
                                    <Text>Last lock by : Justine</Text>
                                </CardItem>
                            </Card>
                       </View>
                       <View style={{display:'flex',flexDirection:'row',position:'absolute', top:450, width:'100%',padding:20}}>
          
                            <Card style={{width:'100%', height:270, justifyContent:'center',}}>
                                <CardItem header>
                                    <Text style={{fontWeight:'bold', fontSize:30,}}>Status of lock</Text>
                                </CardItem>
                                <CardItem>
                                    <Body style={{alignItems:'center'}}>
                                    <Icon type="FontAwesome5"name="camera-retro" style={{fontSize:80, color:'#0C2C43'}}/>
                                      <Text style={{fontWeight:'bold'}}> 
                                          Camera Active
                                      </Text>
                                      <Button style={{display:'flex', justifyContent:'center', height:60,padding:10, padding:5, backgroundColor:'#0C2C43'}} onPress={()=>this.setState({viewSnapshot:true})}> 
                                          <Text style={{color:'#fff'}}>Take a snapshot</Text>
                                      </Button>
                                    </Body>
                                </CardItem>
                            </Card>
                       </View>
                </View>
                }
            </View>
           
          );
    }
  }


