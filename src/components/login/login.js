
import React, { Component } from 'react';
import {  View,Image,Text, ScrollView, } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Form,Item,Label,Input,Icon, CheckBox,Button ,Spinner} from 'native-base';
import loginImage from '../../assets/image/bg.jpg'
import logo from '../../assets/image/logo.jpg'
import axios from 'axios';


export default class Login extends Component {
     constructor(props) {
        super(props);
        this.state = {
            checkRememberme:false,
            email:'',
            password:'',
            loading:false
        }

        this.signIn = this.signIn.bind(this)
        this.handleLoginEmailForm = this.handleLoginEmailForm.bind(this)
        this.handleLoginPasswordForm = this.handleLoginPasswordForm.bind(this)
      }


      handleLoginEmailForm(text){
          this.setState({
              email: text
          })

      }
      handleLoginPasswordForm(text){
        this.setState({
            password: text
        })
    }

    async componentDidMount(){
        const temp = await AsyncStorage.getItem('log_in')
        console.log(temp)
        if(temp==='true'){
            this.props.navigation.navigate('home')
        }
    }

     signIn( ){
         if(this.state.email===""||this.state.password===""){
            alert('Please fill up required information')
            return
         }
        this.setState({
            loading:true
        })
        axios.post('http://35.247.190.138/faceidoor/user/login.php', {
            email: this.state.email,
            password: this.state.password 
          })
          .then(async(response) => {
              console.log(response)
              if(response.data.response==="201"){
                await AsyncStorage.setItem('id', response.data.user.id)
                await AsyncStorage.setItem('email', response.data.user.email)
                await AsyncStorage.setItem('name', response.data.user.name)
                await AsyncStorage.setItem('lock_id', response.data.user.lock_id)
                await AsyncStorage.setItem('log_in', 'true')
                this.setState({
                    loading:false,
                    email:'',
                    password:'',
                })
                this.props.navigation.navigate('home')
              }else{
                this.setState({
                    loading:false
                })
                alert('Incorrect email or password')
              }
           
          }, (error) => {
            console.log(error);
          });
    }

    render() {
        return (
            <ScrollView style={{backgroundColor:'#fff',height:'100%'}}>
                <Image
                    style={{height:200,width:'100%',resizeMode:'cover'}}
                    source={loginImage}
                />
                <View style={{justifyContent: 'center',alignItems: 'center',marginTop:20}}>
                     <Image 
                        source={logo}
                />
                <View style={{width:'100%', padding:20,}}>
                <Form >
                    <Label style={{position:'relative',left:25,top:5, fontWeight:'bold',backgroundColor:'#fff',letterSpacing:2,color:'#0C2C43'}}>Email</Label>
                        <Item  rounded >
                            <Input type="email" style={{marginLeft:20}} Value={this.state.email} onChangeText={(e)=>this.handleLoginEmailForm(e)}/>
                        </Item>
                    </Form>
                    <Form style={{marginTop:10}}>
                    <Label style={{position:'relative',left:25,top:5, fontWeight:'bold',backgroundColor:'#fff',letterSpacing:2,color:'#0C2C43'}}>
                        Password
                    </Label>
                        <Item rounded  >
                            <Input secureTextEntry={true} value={this.state.password}  style={{marginLeft:10}}  onChangeText={(e)=>this.handleLoginPasswordForm(e)} />
                        </Item>
                    </Form>
                    <View style={{display:'flex',flexDirection:'row',marginTop:10, justifyContent:'space-between' }}>
                        <View style={{display:'flex', flexDirection:'row'}}>
                           <CheckBox checked={this.state.checkRememberme} color="#0C2C43" onPress={()=>this.setState({checkRememberme:!this.state.checkRememberme})}/>
                            <Text style={{color:'#0C2C43', marginLeft:15}}>Remember me</Text>
                        </View>
                       
                         {/* <Text style={{fontWeight:'bold', color:'#0C2C43'}}>
                             Forget password?
                         </Text> */}
                    </View>
                    <View style={{display:'flex',marginTop:10,justifySelf:'center'}}>
                        <Text style={{textAlign:'center', color:'#56C8EA', fontSize:20}}>
                            Don't have an account yet?
                        </Text>
                        <Text style={{textAlign:'center', color:'#0C2C43', fontSize:20, fontWeight:'bold'}} onPress={()=>this.props.navigation.navigate('signup')}>
                            Sign up now!
                        </Text>
                        {this.state.loading?
                        <Button  primary rounded style={{marginTop:30,display:'flex', justifyContent:'center', backgroundColor:'#0C2C43'}} disabled>
                             <Spinner animation="border" variant="primary" />
                      </Button>
                      :
                      <Button primary rounded style={{marginTop:30,display:'flex', justifyContent:'center', backgroundColor:'#0C2C43'}} onPress={()=>this.signIn()}>
                           <Text style={{textAlign:'center', color:'#fff', fontSize:20,width:'100%'}} >Sign in</Text>
                       </Button>
                        }
                    </View>
                    
                </View>
                </View>

            </ScrollView>
          );
    }
  }


