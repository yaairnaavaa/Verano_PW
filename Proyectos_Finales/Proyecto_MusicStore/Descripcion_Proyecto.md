# 🎵 MUSIC STORE - Descripción del Proyecto - Tienda enfocada: Discos Stu

**Music Store** es una aplicación web fullstack diseñada para la gestión completa de un inventario de discos musicales. Este proyecto combina tecnologías modernas para ofrecer una experiencia de usuario intuitiva y funcional.

Permite administrar una colección de discos de manera eficiente y moderna. Está pensada para tiendas de música, coleccionistas o cualquier persona que necesite organizar y gestionar un catálogo de música física.


**Integrantes**
- Ruiz Campos Jose Fernando - 20400819
- Cardenas Gaméz Samir Adrian - 20400712
- Bautista Meza Ulises Alejandro - 20400703

### 🌟 Características Principales

- **📀 Gestión Completa de Inventario**: Administra discos con información detallada
- **🔍 Búsqueda Inteligente**: Encuentra discos por título, artista o género
- **📊 Estadísticas en Tiempo Real**: Visualiza métricas del inventario automáticamente
- **🎨 Interfaz Moderna**: Diseño responsivo y fácil de usar
- **⚡ Operaciones Rápidas**: Agregar, editar y eliminar discos de forma instantánea
- **📱 Responsivo**: Funciona perfectamente en desktop, tablet y móvil

## 🏗️ Arquitectura y Tecnologías

**🎨 Frontend (Cliente)**
- **HTML5**: Estructura semántica y moderna
- **CSS3**: Estilos avanzados con Flexbox y Grid
- **JavaScript ES6+**: Lógica modular y moderna
- **Font Awesome**: Iconografía profesional
- **Google Fonts**: Tipografías web optimizadas

**⚙️ Backend (Servidor)**
- **Node.js**: Runtime de JavaScript del lado del servidor
- **Express.js**: Framework web rápido y minimalista
- **Mongoose**: ODM para MongoDB con esquemas y validaciones

**💾 Base de Datos**
- **MongoDB**: Base de datos NoSQL flexible y escalable

**🛠️ Herramientas de Desarrollo**
- **Nodemon**: Auto-recarga durante desarrollo
- **dotenv**: Gestión de variables de entorno
- **CORS**: Manejo de políticas de origen cruzado

### Arquitectura del Sistema

┌─────────────────┐    HTTP/JSON    ┌─────────────────┐    Mongoose    ┌─────────────────┐
│   NAVEGADOR     │   ◄──────────►  │   SERVIDOR      │   ◄─────────►  │   MONGODB       │
│   (Frontend)    │                 │   (Backend)     │                │  (Base Datos)   │
│                 │                 │                 │                │                 │
│ • HTML5         │                 │ • Node.js       │                │ • Colección     │
│ • CSS3          │                 │ • Express.js    │                │   Discos        │
│ • JavaScript    │                 │ • API REST      │                │ • Validaciones  │
└─────────────────┘                 └─────────────────┘                └─────────────────┘
```

---

## 🎵 Funcionalidades Principales

### 📀 Gestión de Discos

**Información Completa por Disco:**
- **📝 Título**: Nombre del álbum o disco
- **🎤 Artista**: Nombre del intérprete o banda
- **🎭 Género**: Categoría musical (Rock, Pop, Jazz, etc.)
- **📅 Año**: Año de lanzamiento
- **💿 Formato**: Vinilo, CD, Casette, Digital
- **💰 Precio**: Valor monetario del disco
- **📦 Stock**: Cantidad disponible en inventario
- **🖼️ Imagen**: Portada del álbum (opcional)

**Operaciones CRUD:**
- ✅ **Crear**: Agregar nuevos discos al inventario
- 👁️ **Leer**: Visualizar todos los discos registrados
- ✏️ **Actualizar**: Modificar información de discos existentes
- 🗑️ **Eliminar**: Remover discos del inventario

### 🔍 Sistema de Búsqueda y Filtros

**Búsqueda por Texto:**
- Buscar por **título** del disco
- Buscar por **nombre del artista**
- Búsqueda en tiempo real mientras escribes

**Filtros Especializados:**
- **Por Formato**: Vinilo, CD, Casette, Digital
- **Por Disponibilidad**: Disponibles, Agotados, Todos
- **Combinación de Filtros**: Múltiples criterios simultáneos

### 📊 Dashboard de Estadísticas

**Métricas en Tiempo Real:**
- **📈 Total de Discos**: Cantidad total en el inventario
- **🎨 Formatos Únicos**: Variedad de formatos disponibles
- **💵 Valor del Inventario**: Valor total de todo el stock
- **✅ Discos Disponibles**: Cantidad con stock mayor a 0

### 🎨 Experiencia de Usuario

**Vistas Flexibles:**
- **🔲 Vista Grid**: Tarjetas visuales con imágenes
- **📋 Vista Lista**: Información compacta y detallada
- **💾 Preferencias Guardadas**: Recuerda tu vista preferida

**Interfaz Intuitiva:**
- **📱 Diseño Responsivo**: Perfecto en cualquier dispositivo
- **⚡ Carga Rápida**: Optimizado para performance
- **🎭 Modales Elegantes**: Formularios en ventanas emergentes
- **🔄 Actualizaciones Instantáneas**: Cambios reflejados inmediatamente

---

## �️ Información Técnica

### 📂 Estructura del Proyecto

```
MusicStore/
├── 📋 package.json              # Configuración de Node.js
├── 📄 Readme                    # Documentación básica
├── 📖 FUNCIONAMIENTO.md         # Descripción del proyecto
└── 📁 src/                      # Código fuente
    ├── 🚀 server.js             # Servidor principal
    ├── 📁 Backend/              # Lógica del servidor
    │   ├── 📁 config/           # Configuración de BD
    │   ├── 📁 models/           # Esquemas de datos
    │   └── 📁 routes/           # Endpoints de la API
    └── 📁 Frontend/             # Interfaz de usuario
        ├── 📁 HTML/             # Páginas web
        ├── 📁 CSS/              # Estilos
        ├── 📁 JS/               # Lógica del cliente
        └── 📁 img/              # Imágenes
```

### 🔌 API REST

**Base URL**: `http://localhost:3000/api`

| Método | Endpoint | Función |
|--------|----------|---------|
| `GET` | `/discos` | Obtener todos los discos |
| `GET` | `/discos/:id` | Obtener disco específico |
| `POST` | `/discos/add` | Agregar nuevo disco |
| `PUT` | `/discos/:id` | Actualizar disco existente |
| `DELETE` | `/discos/:id` | Eliminar disco |


**Clonar el repositorio:**
   git clone https://github.com/DemonsamG/MusicStore.git

   **Video **
   https://youtu.be/e8Wx4UT4Q7E?si=FcYBzjC7JM-Acmu8
  
