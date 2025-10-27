import React, { useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { addTask, updateTask } from '../store/tasksSlice';
import Header from '../components/PerfileCard';
import ButtonCustom from '../components/ButtonCustom';
import useAlert from '../hooks/useAlert';

export default function FormPage() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const { showAlert } = useAlert();
  const task = route.params?.task;

  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: {
      title: task?.title || '',
      description: task?.description || '',
      status: task?.status || 'Pendiente',
    },
  });

  useEffect(() => {
    if (task) {
      setValue('title', task.title);
      setValue('description', task.description);
      setValue('status', task.status);
    }
  }, [task]);

  const onSubmit = (data) => {
    if (task) {
      dispatch(updateTask({ id: task.id, ...data }));
      showAlert('Tarea actualizada exitosamente');
    } else {
      dispatch(addTask(data));
      showAlert('Tarea agregada exitosamente');
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header 
        title={task ? 'Editar Tarea' : 'Nueva Tarea'} 
        subtitle="Completa el formulario"
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.form}>
          <Text style={styles.label}>Título (obligatorio)</Text>
          <Controller
            control={control}
            rules={{
              required: 'El título es obligatorio',
              minLength: { value: 3, message: 'Mínimo 3 caracteres' },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, errors.title && styles.inputError]}
                placeholder="Ingresa el título"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="title"
          />
          {errors.title && <Text style={styles.errorText}>{errors.title.message}</Text>}

          <Text style={styles.label}>Descripción (opcional)</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Ingresa la descripción"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline
                numberOfLines={4}
              />
            )}
            name="description"
          />

          <Text style={styles.label}>Estado (Switch o Checkbox)</Text>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <View style={styles.statusContainer}>
                <ButtonCustom
                  title="Pendiente"
                  variant={value === 'Pendiente' ? 'primary' : 'secondary'}
                  onPress={() => onChange('Pendiente')}
                  style={styles.statusButton}
                />
                <ButtonCustom
                  title="Completada"
                  variant={value === 'Completada' ? 'primary' : 'secondary'}
                  onPress={() => onChange('Completada')}
                  style={styles.statusButton}
                />
              </View>
            )}
            name="status"
          />

          <View style={styles.buttonGroup}>
            <ButtonCustom
              title={task ? 'Guardar Cambios' : 'Agregar Tarea'}
              onPress={handleSubmit(onSubmit)}
              style={styles.submitButton}
            />
            <ButtonCustom
              title="Cancelar"
              variant="secondary"
              onPress={() => navigation.goBack()}
              style={styles.cancelButton}
            />
          </View>
        </View>
      </ScrollView>
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
  },
  form: {
    padding: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  inputError: {
    borderColor: '#F44336',
    borderWidth: 2,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
    paddingTop: 14,
  },
  errorText: {
    color: '#F44336',
    fontSize: 13,
    marginTop: 6,
    fontWeight: '500',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusButton: {
    flex: 1,
    marginHorizontal: 6,
  },
  buttonGroup: {
    marginTop: 32,
  },
  submitButton: {
    width: '100%',
    marginBottom: 14,
  },
  cancelButton: {
    width: '100%',
  },
});
