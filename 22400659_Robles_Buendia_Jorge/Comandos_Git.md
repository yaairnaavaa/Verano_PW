## Comandos básicos de Git

### Configuración inicial
- `git config --global user.name "Nombre"`  
  Configura tu nombre de usuario

- `git config --global user.email "correo@ejemplo.com"`  
  Configura tu correo electrónico

### Inicializar y clonar repositorios
- `git init`  
  Crea un nuevo repositorio Git local

- `git clone [enlace-del-repositorio]`  
  Clona un repositorio remoto.

### Estados y preparación de archivos
- `git status`  
  Muestra el estado actual del repositorio

- `git add [archivo-o-carpeta]`  
  Agrega archivos al área de preparación o staging

- `git add .`  
  Agrega todos los archivos modificados

### Confirmar y ver historial
- `git commit -m "mensaje"`  
  Guarda los cambios con un mensaje

- `git log`  
  Muestra el historial de commits

- `git diff`  
  Muestra diferencias entre archivos modificados

### Ramas
- `git branch`  
  Lista las ramas existentes

- `git branch [nombre]`  
  Crea una nueva rama

- `git checkout [rama]`  
  Cambia a otra rama

- `git merge [rama]`  
  Fusiona una rama con la actual

### Repositorios remotos
- `git remote -v`  
  Muestra las URLs de los repositorios remotos

- `git push origin main`  
  Envía cambios a la rama principal del repositorio

- `git pull origin main`  
  Descarga y fusiona cambios de la rama principal

### Otros comandos 
- `git rm [archivo]`  
  Elimina un archivo del repositorio

- `git reset [archivo]`  
  Quita un archivo del área de preparación

- `git stash`  
  Guarda temporalmente cambios no confirmados
