import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Modal, Portal, TextInput, Button } from 'react-native-paper';

export default function Agregar({ visible, modo, alumno, onAdd, onEdit, onCancel }) {

  const [matricula, setMatricula] = useState('');
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    if (modo === 'editar' && alumno) {
      setMatricula(alumno.matricula);
      setNombre(alumno.nombre);
    } else {
      setMatricula('');
      setNombre('');
    }
  }, [visible]);

  const handleGuardar = () => {
    if (!matricula || !nombre) return;

    const nuevo = { matricula, nombre };

    if (modo === 'agregar') {
      onAdd(nuevo);
    } else {
      onEdit(nuevo);
    }

    setMatricula('');
    setNombre('');
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onCancel} contentContainerStyle={styles.container}>

        <TextInput
          label="Matrícula"
          value={matricula}
          onChangeText={setMatricula}
          style={styles.input}
        />

        <TextInput
          label="Nombre"
          value={nombre}
          onChangeText={setNombre}
          style={styles.input}
        />

        <Button mode="contained" onPress={handleGuardar}>
          {modo === 'agregar' ? 'Agregar' : 'Guardar'}
        </Button>

        <Button onPress={onCancel}>Cancelar</Button>

      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10
  },
  input: {
    marginBottom: 10
  }
});