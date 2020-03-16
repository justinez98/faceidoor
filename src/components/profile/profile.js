
import React, { Component } from 'react';
import {  View,Image,Text, ScrollView, Switch } from 'react-native';
import { Icon,Button, Card,CardItem,Body,Header, Right, Item,Input,Thumbnail,List, ListItem,Left} from 'native-base';



export default class Profile extends Component {
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
                    <Right/>
                </Header>
                <View style={{height:'60%', backgroundColor:'#0C2C43', borderBottomRightRadius:700,paddingHorizontal:20}}>
                <Text style={{fontSize:30, color:'#fff', fontFamily:'monospace'}}>
                        Profile
                    </Text>
                    <Thumbnail style={{height:80, width:80, marginTop:30}}   source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }} />
                    <Text style={{fontSize:20, color:'#fff', fontFamily:'monospace,', marginTop:30}}>
                         Justine Yong Jia Hao
                    </Text>
                    <Text style={{fontSize:20, color:'#fff', fontFamily:'monospace', marginTop:5}}>
                         Email: juxez.yong@gmail.com
                    </Text>
                    <Text style={{fontSize:20, color:'#fff', fontFamily:'monospace', marginTop:5}}>
                         Role: Admin
                    </Text>
                    <Text style={{fontSize:20, color:'#fff', fontFamily:'monospace', marginTop:5}}>
                         Allowed : 10 person
                    </Text>
                </View>
                <Button style={{left:180,top:150, width:200, display:'flex', justifyContent:'center', backgroundColor:'#0C2C43',position:'relative'}} onPress={()=>this.props.navigation.navigate('login')}>
                           <Text style={{fontSize:20, color:'#fff'}}> Log Out</Text>
                       </Button>
                

            </View>
          );
    }
  }


