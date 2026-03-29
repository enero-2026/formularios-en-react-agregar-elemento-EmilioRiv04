import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import Agregar from './Agregar';
import { Searchbar } from 'react-native-paper';



export default function Alumno() {

  const [alumnos, setAlumnos] = useState([
    
    {
      nombre: 'CANDELARIA MORA SAMANTHA',
      matricula: '2114354'
    },
    {
      nombre: 'CANTU SILVA JAVIER',
      matricula: '2111889'
    },
    {
      nombre: 'CARMONA LOZANO ANGEL EMILIANO',
      matricula: '2069119'
    },
    {
      nombre: 'CASTILLO ACOSTA JORGE',
      matricula: '2132842'
    },
    {
      nombre: 'DAVILA GONZALEZ ALDO ADRIAN',
      matricula: '1994122'
    },
    {
      nombre: 'DURAN BARRIENTOS FABRIZIO',
      matricula: '2018230'
    },
    {
      nombre: 'FLORES GONZALEZ SEBASTIAN',
      matricula: '2104564'
    },
    {
      nombre: 'DURAN BARRIENTOS FABRIZIO',
      matricula: '2018230'
    },
    {
      nombre: 'FLORES GONZALEZ SEBASTIAN',
      matricula: '2104564'
    },
    {
      nombre: 'FLORES LÓPEZ DIEGO',
      matricula: '2066033'
    },
    {
      nombre: 'FLORES MARTINEZ ERICK ADRIAN',
      matricula: '2132976'
    },
    {
      nombre: 'GARZA AVALOS DIEGO',
      matricula: '2066114'
    },
    {
      nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL',
      matricula: '2031243'
    },
    {
      nombre: 'GRANJA PEÑA DIEGO',
      matricula: '2064733'
    },
    {
      nombre: 'IBARRA RODRIGUEZ ALEXIS',
      matricula: '2031243'
    },
    {
      nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN',
      matricula: '2064733'
    },
    {
      nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA',
      matricula: '2094647'
    },
    {
      nombre: 'MIRELES VELAZQUEZ ALEJANDRO',
      matricula: '2005102'
    },
    {
      nombre: 'MONSIVAIS SALAZAR ANDRES',
      matricula: '2064574'
    },
    {
      nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA',
      matricula: '2024783'
    },
    {
      nombre: 'PEÑA MUNGARRO LUIS ANGEL',
      matricula: '2066077'
    },
    {
      nombre: 'PUENTE REYNOSO JULIO CESAR',
      matricula: '2092151'
    },
    {
      nombre: 'RAMIREZ LOPEZ BRYAN',
      matricula: '2103708'
    },
    {
      nombre: 'RAMOS AVILA LILIANA VALERIA',
      matricula: '2115192'
    },
    {
      nombre: 'RICO JAUREGUI MAURICIO',
      matricula: '2037503'
    },
    {
      nombre: 'RIVERA LUNA ADRIAN',
      matricula: '2131513'
    },
    {
      nombre: 'RIVERA REYNA JOSE EMILIO',
      matricula: '2013503'
    },
    {
      nombre: 'RODRIGUEZ OLVERA ROSA ISELA',
      matricula: '2004613'
    },
    {
      nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL',
      matricula: '2133022'
    },
    {
      nombre: 'SANCHEZ GALARZA JUAN CARLOS',
      matricula: '2026061'
    },
    {
      nombre: 'SOLIS ORTIZ ALFREDO',
      matricula: '2095320'
    },
    {
      nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL',
      matricula: '2025350'
    },
    {
      nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL',
      matricula: '2103895'
    },
    {
      nombre: 'ZACATENCO OLIVE RODRIGO',
      matricula: '1857791'
    },
    {
      nombre: 'ZAVALA CANTU TERESA MARGARITA',
      matricula: '2025218'
    }

  ]);

  const [busqueda, setBusqueda] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modo, setModo] = useState('agregar'); // agregar | editar
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  //  FILTRO
  const alumnosFiltrados = alumnos.filter(a =>
    a.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    a.matricula.includes(busqueda)
  );

  //  AGREGAR
  const agregarAlumno = (nuevo) => {
    setAlumnos(prev => [...prev, nuevo]);
    setModalVisible(false);
  };

  //  EDITAR
  const editarAlumno = (actualizado) => {
    const nuevaLista = alumnos.map(a =>
      a.matricula === actualizado.matricula ? actualizado : a
    );
    setAlumnos(nuevaLista);
    setModalVisible(false);
  };

  // ELIMINAR
  const eliminarAlumno = (matricula) => {
    const nuevaLista = alumnos.filter(a => a.matricula !== matricula);
    setAlumnos(nuevaLista);
  };

  return (
    <View style={{ padding: 20 }}>

      {/*  BUSCADOR */}
      <TextInput
        placeholder="Buscar por nombre o matrícula"
        value={busqueda}
        onChangeText={setBusqueda}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      {/*  BOTON */}
      <Button mode="contained" onPress={() => {
        setModo('agregar');
        setAlumnoSeleccionado(null);
        setModalVisible(true);
      }}>
        Agregar alumno
      </Button>

      {/* LISTA */}
      <ScrollView>
        {alumnosFiltrados.map((alumno) => (
          <View key={alumno.matricula} style={{ marginVertical: 10 }}>

            <Text>{alumno.nombre}</Text>
            <Text>{alumno.matricula}</Text>

            {/*  EDITAR */}
            <TouchableOpacity onPress={() => {
              setModo('editar');
              setAlumnoSeleccionado(alumno);
              setModalVisible(true);
            }}>
              <Text style={{ color: 'blue' }}>Editar</Text>
            </TouchableOpacity>

            {/*  BORRAR */}
            <TouchableOpacity onPress={() => eliminarAlumno(alumno.matricula)}>
              <Text style={{ color: 'red' }}>Borrar</Text>
            </TouchableOpacity>

          </View>
        ))}
      </ScrollView>

      {/* 🧩 MODAL */}
      <Agregar
        visible={modalVisible}
        modo={modo}
        alumno={alumnoSeleccionado}
        onAdd={agregarAlumno}
        onEdit={editarAlumno}
        onCancel={() => setModalVisible(false)}
      />
        
    </View>
  );
}