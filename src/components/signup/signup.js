
import React, { Component } from 'react';
import {  View,Image,Text, ScrollView } from 'react-native';
import { Form,Item,Label,Input,Icon, CheckBox,Button, Spinner } from 'native-base';
import loginImage from '../../assets/image/bg.jpg'
import logo from '../../assets/image/logo.jpg'
import axios from 'axios';

export default class SignUp extends Component {
     constructor(props) {
        super(props);
        this.state = {
            username:'',
            email:'',
            lockid:'',
            password:'',
            confirmPassword:'',
            loading:false
        }

        this.signUp = this.signUp.bind(this)
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

    handleConfirmPassword(text){
        this.setState({
            confirmPassword: text
        })

    }
    handleLockID(text){
        this.setState({
            lockid: text
        })

    }
    handleUserName(text){
        this.setState({
            username: text
        })

    }

    signUp( ){
        if(this.state.confirmPassword!==this.state.password){
            alert('Confirm password does not match')
            return
        }else{
            if(this.state.confirmPassword===""||this.state.password===""||this.state.email===""||this.state.lockid===""||this.state.username===""){
                alert('Plase fill in all the field')
                return
            }
            this.setState({
                loading:true
            })
            axios.post('http://35.213.139.175/faceidoor/user/createUser.php', {
                name: this.state.username,
                lock_id: this.state.lockid,
                email: this.state.email,
                password: this.state.password
              })
              .then(async(response) => {
                  console.log(response)
                  if(response.data.response==="201"){
                      this.setState({
                          loading:false
                      })
                        alert('Account sucessfully created!')
                    this.props.navigation.navigate('login')
                  }else if(response.data.response==="400"){
                      alert('Email address already taken')
                      this.setState({
                        loading:false
                    })
                  }
                  else{
                    alert('Network Error! Please try again')
                    this.setState({
                        loading:false
                    })
                  }
               
              }, (error) => {
                console.log(error);
              });
        }

        
    }

    render() {
        return (
            <ScrollView style={{backgroundColor:'#fff',height:'100%'}}>
               
                <View style={{justifyContent: 'center',alignItems: 'center',marginTop:20}}>
                     <Image 
                        source={logo}
                />
                <View style={{width:'100%', padding:20,marginTop:30}}>
                <Form >
                    <Label style={{position:'relative',left:25,top:5, fontWeight:'bold',backgroundColor:'#fff',letterSpacing:2,color:'#0C2C43'}}>Username</Label>
                        <Item  rounded >
                            <Input type="email" style={{marginLeft:20}} Value={this.state.email} onChangeText={(e)=>this.handleUserName(e)} placeholder="username"/>
                        </Item>
                    </Form>
                    <Form >
                    <Label style={{position:'relative',left:25,top:5, fontWeight:'bold',backgroundColor:'#fff',letterSpacing:2,color:'#0C2C43'}}>Email</Label>
                        <Item  rounded >
                            <Input type="email" style={{marginLeft:20}} Value={this.state.email} onChangeText={(e)=>this.handleLoginEmailForm(e)} placeholder="email@gmail.com"/>
                        </Item>
                    </Form>
                    <Form >
                    <Label style={{position:'relative',left:25,top:5, fontWeight:'bold',backgroundColor:'#fff',letterSpacing:2,color:'#0C2C43'}}>Lock ID</Label>
                        <Item  rounded >
                            <Input type="number" style={{marginLeft:20}} Value={this.state.email} onChangeText={(e)=>this.handleLockID(e)}  placeholder="Refer to arduino lock"/>
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
                    <Form style={{marginTop:10}}>
                    <Label style={{position:'relative',left:25,top:5, fontWeight:'bold',backgroundColor:'#fff',letterSpacing:2,color:'#0C2C43'}}>
                        Confirm password
                    </Label>
                        <Item rounded  >
                            <Input secureTextEntry={true} value={this.state.confirmPassword}  style={{marginLeft:10}}  onChangeText={(e)=>this.handleConfirmPassword(e)} />
                        </Item>
                    </Form>
         
                    <View style={{display:'flex',marginTop:10,justifySelf:'center'}}>
                    {this.state.loading?
                        <Button  primary rounded style={{marginTop:30,display:'flex', justifyContent:'center', backgroundColor:'#0C2C43'}} disabled>
                             <Spinner animation="border" variant="primary" />
                      </Button>
                      :
                        <Button primary rounded style={{marginTop:30,display:'flex', justifyContent:'center', backgroundColor:'#0C2C43'}} onPress={()=>this.signUp()}>
                           <Text style={{textAlign:'center', color:'#fff', fontSize:20,width:'100%'}} >Sign Up</Text>
                       </Button>
                       }
                    </View>
                    
                </View>
                </View>

            </ScrollView>
          );
    }
  }


