import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
class List extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const todosList = this.props.todos.map((todo) => {
      return (
        <View style={styles.listContainer}>
          <Text key={todo.id} style={styles.listItem}>
            {todo.value}
          </Text>
          <Icon
            onPress={() => this.props.deleteTodo(todo.id)}
            name="delete-outline"
            size={25}
            style={styles.listIcon}
            color="red"
          />
        </View>
      );
    });
    return <View>{todosList}</View>;
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#efefef',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  listItem: {
    color: '#333',
    paddingRight: 20,
  },
  listIcon: {
    backgroundColor: '#f3f3f3',
    borderRadius: 100 / 5,
    padding: 7,
  },
});

export default List;
