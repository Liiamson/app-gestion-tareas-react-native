import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/PerfileCard';
import TaskCard from '../components/TaskCard';
import ButtonCustom from '../components/ButtonCustom';

export default function Home() {
  const navigation = useNavigation();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleEdit = (task) => {
    navigation.navigate('FormPage', { task });
  };

  const handleAddTask = () => {
    navigation.navigate('FormPage');
  };

  const taskCount = tasks.length;
  const pendingCount = tasks.filter(t => t.status === 'Pendiente').length;
  const completedCount = tasks.filter(t => t.status === 'Completada').length;

  return (
    <View style={styles.container}>
      <Header 
        title="Mis Tareas" 
        subtitle={`${taskCount} ${taskCount === 1 ? 'tarea' : 'tareas'} • ${pendingCount} pendiente${pendingCount !== 1 ? 's' : ''} • ${completedCount} completada${completedCount !== 1 ? 's' : ''}`}
      />
      <ScrollView style={styles.scrollView}>
        {tasks.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📝</Text>
            <Text style={styles.emptyTitle}>No hay tareas</Text>
            <Text style={styles.emptyText}>Agrega tu primera tarea para comenzar</Text>
          </View>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} onEdit={handleEdit} />
          ))
        )}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <ButtonCustom 
          title="Agregar Tarea" 
          onPress={handleAddTask}
          style={styles.addButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  scrollView: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 16,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#BBDEFB',
    shadowColor: '#1E88E5',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 6,
  },
  addButton: {
    width: '100%',
  },
});
