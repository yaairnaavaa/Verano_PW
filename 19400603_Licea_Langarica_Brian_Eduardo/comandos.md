## COMANDOS DE GITHUB

##  Git init
#   descripcion
-   crea un nuevo repositorio Git o reinicia uno existente
#   ejemplo
-   git init

##  git clone
#   descripcion
-   Para copiar un repositorio Git de una ubicación a otra
#   ejemplo
-   git clone https://github.com/yaairnaavaa/Verano_PW.git

##  git status
#   descripcion
-   Comprueba el estado de los archivos del directorio de trabajo.
#   ejemplo
-   git status

##  git add
#   descripcion
-   El comando git add añade tus cambios al área de preparación. 
-   Indica a Git que el repositorio debe actualizar estos cambios 
-   una vez que el usuario ejecute el comando confirmar.
#   ejemplo
-   git add .

##  git commit
#   descripcion
-   Un comando git commit guarda los cambios que has realizado 
-   (o puesto en escena) en el repositorio local.
#   ejemplo
-   git commit -m "commit_message"

##  git remote add
#   descripcion
-   El comando git remote add crea una conexión entre tu repositorio 
-   Git local y el repositorio Git remoto, permitiéndote introducir
-   y extraer cambios entre ellos:
#   ejemplo
-   git remote add origin https://github.com/yaairnaavaa/Verano_PW.git

##  git push
#   descripcion
-   El comando git push sincroniza tu repositorio remoto con el
-   repositorio local
#   ejemplo
-   git push

##  git pull
#   descripcion
-   El comando git pull recupera y fusiona los cambios del
-   repositorio remoto con los del repositorio local
#   ejemplo
-   git pull

##  git fetch
#   descripcion
-   El comando git fetch te permite revisar los cambios en
-   el repositorio remoto antes de fusionarlos en el local
#   ejemplo
-   git fetch origin

##  git branch
#   descripcion
-   El comando git branch lista, crea o elimina ramas
#   ejemplo
-   git branch: muestra la lista de todas las ramas del repositorio.
-   git branch : crea una nueva rama llamada "nombre_rama".
-   git branch -d : Elimina la rama llamada "nombre_rama".

##  git checkout
#   descripcion
-   El comando  git checkout puede hacer dos cosas: cambiar entre 
-   ramas o restaurar archivos a un estado anterior
#   ejemplo
-   git checkout main
-   git checkout -b nueva-rama
-   git checkout -b feature/login

##  git merge
#   descripcion
-   Si has realizado algún trabajo en una nueva rama, puedes 
-   fusionarla con la rama principal utilizando git merge para 
-   implementar los cambios
#   ejemplo
-   git merge nombre-de-la-rama


##  git rebase
#   descripcion
-   git rebase es otra forma de integrar cambios entre ramas,
-   pero funciona de forma distinta a git merge. Fusionar 
-   conserva el historial completo tanto de la rama principal
-   como de la rama de características.
#   ejemplo
-   git rebase main

##  git log
#   descripcion
-   El comando git log muestra todo el historial de confirmaciones 
-   de tu rama actual.
#   ejemplo
-   git log

##  git diff
#   descripcion
-   muestra las diferencias entre varios estados de tu repositorio, 
-   ya sea comparando tu directorio actual con el área de preparación,
-   el área de preparación con la última confirmación
#   ejemplo
-   git diff

##  git stash
#   descripcion
-   Supongamos que quieres moverte a un estado anterior 
-   pero no quieres comprometer tu progreso actual
#   ejemplo
-   git stash

##  git stash pop
#   descripcion
-   Si has guardado algunos cambios en el pasado y quieres 
-   incluirlos en tu directorio de trabajo, utiliza el 
-   comando git stash pop
#   ejemplo
-   git stash pop

##  git clean 
#   descripcion
-    borra los archivos sin seguimiento del repositorio Git.
#   ejemplo
-   git clean -f

##  git reset
#   descripcion
-   Deshacer los cambios restableciendo HEAD a un estado anterior.
#   ejemplo
-   git reset --soft HEAD~1

##  git config
#   descripcion
-   Configura las opciones de Git a nivel de sistema, global o local.
#   ejemplo
-   git config --global user.name 'Brian'



