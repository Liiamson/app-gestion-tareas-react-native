# Aplicación de Gestión de Tareas - React Native

Aplicación móvil desarrollada con React Native que permite gestionar tareas personales y actividades universitarias.

## ✨ Funcionalidades

- ✅ **Crear tareas** con título, descripción y estado
- ✏️ **Editar tareas** existentes
- 🗑️ **Eliminar tareas** con un toque
- 🔄 **Cambiar estado** entre Pendiente y Completada
- 📊 **Contador en tiempo real** de tareas totales, pendientes y completadas
- ✅ **Validación de formularios** (título obligatorio, mínimo 3 caracteres)
- 📦 **Estado global con Redux** - datos sincronizados en toda la app

## 🛠️ Stack Técnico

| Tecnología | Uso en el Proyecto |
|------------|--------------------|
| **React Native 0.79** | Framework principal |
| **Redux Toolkit 2.0** | Gestión de estado global (store, slices, actions) |
| **React Redux 9.0** | Hooks: `useSelector`, `useDispatch` |
| **React Navigation** | Navegación entre pantallas (Stack Navigator) |
| **React Hook Form 7.49** | Validación de formularios con `Controller` |
| **Expo SDK 54** | Desarrollo y testing |
| **StyleSheet API** | Estilos nativos de React Native |

## � Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en Expo
npm start

# O ejecutar en plataforma específica
npm run android  # Android
npm run ios      # iOS
npm run web      # Web
```

**Nota:** Todos los archivos necesarios (`store/`, `hooks/`, `components/`) ya están incluidos en el proyecto.

## 📝 Estructura del Proyecto

```
ejercicio-de-componentes/
├── App.js                    # Punto de entrada, Provider de Redux
├── components/               # Componentes reutilizables
│   ├── TaskCard.js           # Tarjeta de tarea individual
│   ├── PerfileCard.js        # Header con título y contador
│   └── ButtonCustom.js       # Botón personalizado (primary/secondary)
├── pages/                    # Pantallas principales
│   ├── home.js               # Lista de tareas con Redux
│   └── login.js              # Formulario crear/editar con validación
├── store/                    # Redux - Estado global
│   ├── store.js              # Configuración del store
│   └── tasksSlice.js         # Slice de tareas (actions + reducer)
├── hooks/                    # Custom Hooks
│   └── useAlert.js           # Hook para alertas
├── routes/                   # Navegación
│   └── routes.js             # Stack Navigator
└── package.json              # Dependencias
```

## 🏛️ Arquitectura Redux

### Flujo de Datos

```
Componente (TaskCard)
    │
    │ dispatch(deleteTask(id))
    ↓
Action (deleteTask)
    │
    ↓
Reducer (tasksSlice)
    │
    │ state.tasks = state.tasks.filter(...)
    ↓
Store (estado actualizado)
    │
    │ useSelector detecta cambio
    ↓
Componente se re-renderiza
```

### Acciones Disponibles

| Acción | Descripción | Uso |
|--------|-------------|-----|
| `addTask(data)` | Crea nueva tarea | `dispatch(addTask({ title, description, status }))` |
| `updateTask(data)` | Actualiza tarea existente | `dispatch(updateTask({ id, title, description, status }))` |
| `deleteTask(id)` | Elimina tarea por ID | `dispatch(deleteTask(taskId))` |

## 🎨 Diseño y UX

### Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Azul Material | `#1E88E5` | Primario (botones, header, bordes) |
| Azul Claro | `#E3F2FD` | Fondo de pantallas |
| Verde | `#00C853` | Badge "Completada" |
| Naranja | `#FFA726` | Badge "Pendiente" |
| Rojo | `#EF5350` | Botón "Eliminar" |

### Características Visuales

- 📊 **Contador dinámico** en header (ej: "2 tareas • 1 pendiente • 1 completada")
- 🎯 **Badges con iconos** (✓ completada, ⏱ pendiente)
- 🌈 **Borde lateral de color** en cada tarjeta
- 💫 **Sombras sutiles** en botones y tarjetas
- 📱 **Diseño optimizado** para móviles
- 🎭 **Feedback táctil** con opacidad al presionar
- 📝 **Estado vacío** con mensaje amigable

## � Conceptos Aplicados

- **Estado Global**: Redux Toolkit con `createSlice`
- **Hooks de Redux**: `useSelector` (leer), `useDispatch` (escribir)
- **Custom Hooks**: `useAlert` para lógica reutilizable
- **Validación**: React Hook Form con `Controller`
- **Navegación**: Stack Navigator con parámetros
- **Inmutabilidad**: Uso de `filter`, `map`, spread operator
- **Componentes Funcionales**: Sin clases, solo hooks
- **Composición**: Componentes pequeños y reutilizables

## 💻 Tecnologías Utilizadas

- React Native
- Redux Toolkit
- React Redux
- React Navigation
- React Hook Form
- Expo

---

## 👥 Autores

| Nombre | Rol | Contacto |
|--------|-----|----------|
| **[Tu Nombre]** | Desarrollador Principal | [email@ejemplo.com](mailto:email@ejemplo.com) |
| **[Nombre Compañero]** | Colaborador | [email@ejemplo.com](mailto:email@ejemplo.com) |

---

<div align="center">

**Proyecto Académico - React Native**

📚 Universidad • 📅 Octubre 2025

Hecho con ❤️ y ☕ por el equipo

</div>
