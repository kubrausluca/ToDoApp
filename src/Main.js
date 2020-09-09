import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, FlatList, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Colors from './components/Colors';
import tempData from './tempData';
import ToDoList from './components/ToDoList';
import AddListModal from './components/AddListModal';

export default class Main extends React.Component {

  state = {
    addTodoVisible: false
  }

  toggleAddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible })
  }

  render() {
    return (
      <>
      <Modal 
        animationType="slide" 
        visible={this.state.addTodoVisible}
        onRequestClose={() => this.toggleAddTodoModal()}
      >
        <AddListModal closeModal={() => this.toggleAddTodoModal()} />
      </Modal>

      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Todo <Text style={{ fontWeight: "300", color: Colors.blue }}>Lists</Text>
          </Text>
          <View style={styles.divider} />
        </View>

        <View style={{ marginVertical: 48 }}>

          <TouchableOpacity 
            style={styles.addList} 
            onPress={() => this.toggleAddTodoModal()}
          >
            <Icon name="plus" size={16} color={Colors.blue} />
          </TouchableOpacity>

          <Text style={styles.add}>Add List</Text>

        </View>

        <View style={{ height: 275, paddingLeft: 32 }}>

          <FlatList 
            data={tempData}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={ ({ item }) => <ToDoList list={item} />}
          />

        </View>

      </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent:  "center",
  },
  divider: {
    backgroundColor: Colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: Colors.black,
    paddingHorizontal: 64,
  },
  addList: {
    borderWidth: 2,
    padding: 16,
    borderColor: Colors.lightBlue,
    borderRadius: 4,
    alignItems: "center",
    justifyContent :"center",
  },
  add: {
    color: Colors.blue,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  }
});

