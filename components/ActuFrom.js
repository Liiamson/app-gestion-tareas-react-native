import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import ButtonCustom from './ButtonCustom';

const UpdateForm = ({ onUpdate }) => {
  const [newNombre, setNewNombre] = useState('');
  const [newCarrera, setNewCarrera] = useState('');

  const actualizarFrom = () => {
   
   
      onUpdate(newNombre, newCarrera);

      setNewNombre('');
      setNewCarrera('');
    
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nuevo Nombre"
        value={newNombre}
        onChangeText={setNewNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Nueva Carrera"
        value={newCarrera}
        onChangeText={setNewCarrera}
      />
      <ButtonCustom title="Guardar Datos" onPress={actualizarFrom} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default UpdateForm;