import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class WriteStoryScreen extends Component{
  constructor(){
    super();
    this.state ={
      userId : firebase.auth().currentUser.email,
      StoryName:"",
      StoryContent:""
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }



  addStory =(StoryName,StoryContent)=>{
    var userId = this.state.userId
    var randomRequestId = this.createUniqueId()
    db.collection('my_story').add({
        "user_id": userId,
        "story_name":StoryName,
        "story_content":StoryContent,
        "request_id"  : randomRequestId,
    })

    this.setState({
        StoryName :'',
        StoryContent : ''
    })

    return Alert.alert("Your story has been submitted !! :-) ")
  }


  render(){
    return(
        <View style={{flex:1}}>
          <MyHeader title="Write a Story ! " navigation ={this.props.navigation}/>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Enter story title ... "}
                onChangeText={(text)=>{
                    this.setState({
                        StoryName:text
                    })
                }}
                value={this.state.StoryName}
              />
              <TextInput
                style ={[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines ={8}
                placeholder={"Type your story here ... "}
                onChangeText ={(text)=>{
                    this.setState({
                        StoryContent:text
                    })
                }}
                value ={this.state.StoryContent}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addStory(this.state.StoryName,this.state.StoryContent)}}
                >
                <Text>Submit your story!</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"pink",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)
