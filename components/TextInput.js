import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Alert} from 'react-native';
import {Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const InputHandler = (props) => {
  const [goal, setGoal] = useState('');

  const goalHandler = (text) => {
    setGoal(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={props.placeholder}
        style={styles.input}
        onChangeText={goalHandler}
        value={goal}
      />
      <Button
        onPress={() => {
          props.addTodo(goal);
          setGoal('');
        }}>
        <Text>
          <Icon name="md-add" color="white" size={15} />
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingTop: 5,
    marginHorizontal: 10,
    width: '60%',
    borderBottomWidth: 2,
    borderColor: '#efefef',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InputHandler;
