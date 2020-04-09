import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, StyleSheet, View, ScrollView, Alert} from 'react-native';
import {Toast, H1, H3} from 'native-base';
import {addGoal, deleteGoal} from '../redux/actions/listActions';
import TodoInput from './TextInput';
import TodosList from './List';

class Todo extends Component {
  deleteTodo = (id) => {
    Alert.alert(
      'Delete Item',
      'Item will be deleted',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Deletion Aborted'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            const newtodos = this.props.todos.filter(
              (todos) => todos.id !== id,
            );
            this.props.deleteGoal(newtodos);
            Toast.show({
              text: 'Item Removed',
            });
          },
        },
      ],
      {cancelable: true},
    );
  };
  addTodo = (value) => {
    if (value === '') {
      Toast.show({
        text: 'Please Enter Something First',
        type: 'warning',
      });
      return;
    }
    const newItem = {
      id: Math.random().toString(),
      value,
    };
    // this.setState({todos: [...this.state.todos, newItem]});
    this.props.addGoal(newItem);
    Toast.show({
      text: 'Item Added',
    });
  };
  render() {
    return (
      <View style={{paddingVertical: 20}}>
        <H1 style={{textAlign: 'center', marginTop: 40, color: 'purple'}}>
          DAILY GOAL'S
        </H1>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 30,
            color: 'skyblue',
            fontFamily: '',
          }}>
          Be Productive
        </Text>
        <TodoInput placeholder="Type away..." addTodo={this.addTodo} />
        <ScrollView style={{marginVertical: 25, marginBottom: 200}}>
          <TodosList todos={this.props.todos} deleteTodo={this.deleteTodo} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
const mapStateToProps = (state) => {
  console.log(state.list.todos);
  return {
    todos: state.list.todos,
  };
};
export default connect(mapStateToProps, {addGoal, deleteGoal})(Todo);
