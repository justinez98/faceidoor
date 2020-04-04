
import React, { Component } from 'react';
import {  View,Image,Text, ScrollView, Switch } from 'react-native';
import { Icon,Button, Card,CardItem,Body,Header, Right, Item,Input,Thumbnail,List, ListItem,Left} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import profileImage from '../../assets/image/undraw.png'

export default class Profile extends Component {
     constructor(props) {
        super(props);
        this.state = {
            lockStatus:false
        }

      }

      async logOut(){
        await AsyncStorage.removeItem('id')
        await AsyncStorage.removeItem('email')
        await AsyncStorage.removeItem('name')
        await AsyncStorage.removeItem('lock_id')
        await AsyncStorage.setItem('log_in','false')
        this.props.navigation.navigate('login')
      }

   
      

    render() {
        return (
            <View style={{height:'100%', backgroundColor:'#fff'}}>
                <Header style={{backgroundColor:'#0C2C43'}}>
                    <Right/>
                </Header>
                <View style={{height:'30%', backgroundColor:'#0C2C43', borderBottomLeftRadius:700,paddingHorizontal:20, }}>
                <Text style={{fontSize:30, color:'#fff', fontFamily:'monospace'}}>
                        Profile
                    </Text>
                    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <Thumbnail style={{height:80, width:80, marginTop:30}}   source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }} />
                    <View>
                        <Text style={{fontSize:20, color:'#fff', fontFamily:'monospace,', marginTop:30}}>
                         Justine Yong Jia Hao
                    </Text>
                    <Text style={{fontSize:20, color:'#fff', fontFamily:'monospace', marginTop:5}}>
                         juxez.yong@gmail.com
                    </Text>
                    <Text style={{fontSize:20, color:'#fff', fontFamily:'monospace', marginTop:5}}>
                         Role: Admin
                    </Text>
                    </View>
                    
                    </View>
                    
                </View>
                <View style={{height:'60%', justifyContent:'flex-end'}}>
                    <Image 
                    style={{ width: '100%', height: 300 }}
                    source={profileImage} />
                    <Button bordered danger style={{ width:200, display:'flex', justifyContent:'center',alignSelf:'center'}} onPress={()=>this.logOut()}>
                           <Text style={{fontSize:20, color:'red'}}> Log Out</Text>
                       </Button>
                </View>
                
            </View>
          );
    }
  }


