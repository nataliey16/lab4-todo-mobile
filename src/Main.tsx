import React, {useState} from 'react';
import {View} from 'react-native';
import ToDoForm from './components/ToDoForm';

function Main(): React.JSX.Element {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (taskText: string) => {
    setTasks([...tasks, taskText]);
    console.log(taskText);
  };

  return (
    <View>
      <ToDoForm addTask={addTask} />
    </View>
  );
}

export default Main;
