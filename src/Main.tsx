import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import ToDoForm from './components/ToDoForm';

function Main(): React.JSX.Element {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (taskText: string) => {
    if (tasks.includes(taskText)) {
      Alert.alert('This task already exists. Please add another task.');
    } else {
      setTasks([...tasks, taskText]);
      console.log(taskText);
    }
  };

  return (
    <View>
      <ToDoForm addTask={addTask} />
    </View>
  );
}

export default Main;
