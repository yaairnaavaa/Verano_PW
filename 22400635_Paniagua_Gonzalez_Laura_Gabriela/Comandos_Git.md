
# Comandos Git esenciales

## Gestión de archivos y stage

### Agregar archivos al stage
```
git add archivo
```
Agrega un archivo específico a la etapa de staging para incluirlo en el próximo commit.

**Ejemplo:**
```
git add index.html
```

### Agregar todos los archivos al stage
```
git add .
```
Agrega todos los archivos nuevos y modificados en el directorio actual a la etapa de staging.

**Ejemplo:**
```
git add .
```

### Ver estado del repositorio
```
git status
```
Muestra el estado actual del repositorio, incluyendo los archivos modificados, en stage o sin seguimiento.

**Ejemplo:**
```
git status
```

### Estado resumido del repositorio
```
git status -s
```
Muestra un estado simplificado del repositorio con símbolos para cambios y staging.

**Ejemplo:**
```
git status -s
```

### Ver diferencias en staging
```
git diff --staged
```
Muestra las diferencias entre los archivos en la etapa de staging y la última confirmación (commit).

**Ejemplo:**
```
git diff --staged
```

### Confirmar cambios (commit)
```
git commit -m "mensaje"
```
Crea un nuevo commit con los archivos en staging y registra un mensaje descriptivo.

**Ejemplo:**
```
git commit -m "Actualiza el archivo de estilos"
```

### Eliminar un archivo localmente
```
rm archivo
```
Elimina un archivo del sistema local. Luego se debe hacer `git add` y `git commit` para registrar el cambio.

**Ejemplo:**
```
rm imagen.png
```

### Eliminar archivo y agregarlo a staging
```
git rm archivo
```
Elimina un archivo del directorio y lo agrega directamente a staging para el próximo commit.

**Ejemplo:**
```
git rm datos.csv
```

### Eliminar archivo del repositorio pero conservarlo localmente
```
git rm --cached archivo
```
Elimina un archivo del repositorio pero lo mantiene en el equipo local.

**Ejemplo:**
```
git rm --cached config.env
```

### Quitar un archivo del stage
```
git restore --staged archivo
```
Quita un archivo de la etapa de staging y lo deja en el directorio de trabajo sin cambios en la confirmación anterior.

**Ejemplo:**
```
git restore --staged index.html
```

### Restaurar archivo a su última versión confirmada
```
git restore archivo
```
Restaura el archivo a su último estado confirmado, descartando cambios locales.

**Ejemplo:**
```
git restore main.css
```

### Renombrar archivo localmente
```
mv archivo nuevoNombre
```
Renombra o mueve un archivo en el sistema de archivos local.

**Ejemplo:**
```
mv logo.png logo-nuevo.png
```

### Renombrar archivo y agregarlo a staging
```
git mv archivo nuevoNombre
```
Renombra o mueve un archivo y lo agrega automáticamente al staging.

**Ejemplo:**
```
git mv style.css estilo.css
```
___

## Ramas 

### Ver ramas existentes y rama actual
```
git branch
```
Muestra todas las ramas disponibles y resalta la rama en la que estás posicionado.

**Ejemplo:**
```
git branch
```

### Cambiar de rama
```
git checkout nombreRama
```
Cambia la rama activa a otra rama existente.

**Ejemplo:**
```
git checkout main
```

### Crear y cambiar a una nueva rama
```
git checkout -b nombreRama
```
Crea una nueva rama y cambia a ella en un solo paso.

**Ejemplo:**
```
git checkout -b cabeceraNueva
```

### Renombrar una rama
```
git branch -m nuevoNombre
```
Cambia el nombre de la rama actual.

**Ejemplo:**
```
git branch -m desarrollo
```

### Fusionar ramas
```
git merge nombreRama
```
Fusiona los cambios de otra rama a la rama activa actual.

**Ejemplo:**
```
git merge cabeceraNueva
```
___

## Conexión con repositorio remoto

### Conectar con repositorio remoto
```
git remote add origin URL
```
Asocia el repositorio local con un repositorio remoto en GitHub.

**Ejemplo:**
```
git remote add origin https://github.com/usuario/miProyecto.git
```

### Enviar cambios al repositorio remoto
```
git push
```
Envía los commits locales de la rama actual al repositorio remoto configurado.

**Ejemplo:**
```
git push
```

### Enviar nueva rama al repositorio remoto
```
git push -u origin nombreRama
```
Envía una nueva rama al repositorio remoto y establece su seguimiento para futuros `push`.

**Ejemplo:**
```
git push -u origin cabeceraNueva
```

## Consultas de historial y archivos

### Ver historial de commits
```
git log
```
Muestra el historial completo de commits con autor, fecha y mensajes.

**Ejemplo:**
```
git log
```

### Ver historial resumido de commits
```
git log --oneline
```
Muestra un historial de commits resumido, con un identificador abreviado y el mensaje.

**Ejemplo:**
```
git log --oneline
```

### Ver archivos rastreados por Git
```
git ls-files
```
Muestra todos los archivos que actualmente están bajo control de versiones en el repositorio.

**Ejemplo:**
```
git ls-files
```

### Obtener ramas remotas sin fusionar
```
git fetch
```
Descarga los cambios y ramas desde el repositorio remoto, pero no los fusiona.

**Ejemplo:**
```
git fetch
```

### Ver contenido de un archivo
```
cat archivo
```
Muestra el contenido de un archivo directamente en la consola.

**Ejemplo:**
```
cat README.md
```
