import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class ReadStoryScreen extends Component{
  constructor(){
    super()
    this.state = {
      requestedStoryList: []
    }
  this.requestRef= null
  }

  getrequestedStoryList=()=>{
    this.requestRef = db.collection("my_story")
    .onSnapshot((snapshot)=>{
      var requestedStoryList= snapshot.docs.map(document => document.data());
      this.setState({
        requestedStoryList: requestedStoryList
      });
    })
  }

  componentDidMount(){
    this.getrequestedStoryList()
  }



  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.story_name}
        subtitle={item.story_content}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'#ffff'}}>View Story</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader title="Trade Item" navigation ={this.props.navigation}/>
        <View style={{flex:1}}>
          {
            this.state.requestedStoryList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List of stories ... </Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.requestedStoryList}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})
