import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';

type toDoFormPropTypes = {
  addTask: (val: string) => void;
};

function ToDoForm(props: toDoFormPropTypes): React.JSX.Element {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText(''); // Clear input field after adding the task
    }
  };
  const {addTask} = props;
  return (
    <View>
      <TextInput
        style={styles.txtInput}
        placeholder="Add a next task..."
        value={taskText}
        onChangeText={text => setTaskText(text)}
      />
      <View style={styles.button}>
        {/* <Button title="Add Task" onPress={() => addTask(taskText)} /> */}
        <Button title="Add Task" onPress={handleAddTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtInput: {
    padding: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    margin: 10,
    fontSize: 25,
  },
  button: {
    margin: 10,
  },
});

export default ToDoForm;
