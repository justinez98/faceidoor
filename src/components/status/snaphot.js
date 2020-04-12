
import React, { Component } from 'react';
import {  View,Image,Text, ScrollView, Switch,ImageBackground } from 'react-native';
import { Icon,Button, Card,CardItem,Body,Header, Right,Left} from 'native-base';
import axios from 'axios';
import loadingGif from '../../assets/image/loading.gif'

export default class Snaphot extends Component {
     constructor(props) {
        super(props);
        this.state = {
            snapshotlink:'',
            loading:true
        }
      }

      async componentDidMount(){

         this.updateImage()
         this.setState({
             loading:false
         })
      }


    async updateImage(){
        axios.post('http://35.213.139.175/faceidoor/snapshot/snapshot.php')
          .then(async(response) => {
              if(response.data.response==="201"){
                this.setState({
                    snapshotlink: response.data.link
                })
                setTimeout(() =>this.updateImage(), 1000);
              }else{
                alert('Network error')
              }
           
          }, (error) => {
            console.log(error);
          });
      } 


    render() {
        return (
            <View style={{height:'100%', width:'100%'}}>
                 {
                     this.state.loading?
                     <View style={{display:'flex',justifyContent:'center', alignContent:'center', height:'100%', backgroundColor:'#fff'}}>
                                    <ImageBackground
                                        style={{ width: '100%', height: 300 }}
                                        source={loadingGif}
                                    />
                    </View>
                     :
                     <View>
                          <Header style={{ backgroundColor: '#0C2C43' }}>
                                <Left>
                                    <Icon type="MaterialIcons" name="arrow-back" style={{ color: '#fff' }} onPress={() => this.props.back()} />
                                </Left>
                                <Body/>
                                <Right/>
                            </Header>
                            <View style={{height:120, backgroundColor:'#0C2C43', borderBottomRightRadius:210,paddingHorizontal:20}}>
                                <Text style={{ fontSize: 30, color: '#fff', fontFamily: 'monospace' }}>
                                    Snapshot
                                </Text>
                            </View>
                            {this.state.snapshotlink?
                             <Image
                     key={Date.now()}
                    style={{height:300,width:'90%',marginTop:30,borderRadius:10,alignSelf:'center'}}
                    source={{
                        uri: this.state.snapshotlink,
                    }}
                />:
                <View></View>
                            }
               
                     </View>
                 }
            </View>
           
          );
    }
  }


