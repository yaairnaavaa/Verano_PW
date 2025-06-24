
## Comandos de  git basicos
git init 

El comando git init crea un nuevo repositorio Git o reinicia uno existente.  
ejemplo: git init

git clone

El comando git clone copia un repositorio existende desde github o gitlab
ejemplo: git clone https://github.com/yaairnaavaa/Verano_PW.git

git status
el cmando git status nos muestra detalles sobre: 
* archivos modificados
* archivos no rastreados
* archivos preparados

ejemplo: git status

git add
EL comando git add añade los cambios a preparacion lo que indica que el repositorio actualizara los cambios al ejecutar el commando commit
ejemplo: git add

git commit
el comando git commit guarda los cambios que se han agregado con el comando git add
git commit -m "Perfil Samir"

git remote add
crea una conexion entre el repositorio local y el positorio remoto
git remote add <repo_name> <remote_url>

git push
El comando git push sincroniza el repositorio remto con el repositorio local

ejemplo :git push <remote> <branch>

git pull
el comando git pull recupera y fusiona los cambios del repositorio remoto con el repositorio local

ejemplo: git pull origin

git fetch
 te permite revisar los cambios en el repositorio remoto antes de fusionarlos en el local

ejemplo: git fetch origin

git branch
El comando git branch lista crea o elimina  ramas
* git branch: muestra la lista de todas las ramas del repositorio
* git branch <nombre de la rama>: crea una nueva rama con el nombre de la roma
* git branch -d: elimina la rama llamada "nombre de la rama"

git checkout 
El comando git checkout  puede cambiar entre ramas o restaurar archivos a un estado anterior
para cambiar ramas:
git checkout -b rama

git merge

Fusiona los cambios de una rama en otra.

git merge

git rebase

Vuelve a aplicar los commits de una rama a otra para tener un historial más limpio.

git rebase

git log

Ver el historial de confirmaciones.

git log

git diff

Muestra las diferencias entre los distintos estados del depósito.

git diff

git reset

Deshacer los cambios restableciendo HEAD a un estado anterior.

git reset --soft HEAD~1

git stash

Guarda temporalmente los cambios no comprometidos y restablece el directorio de trabajo.

git stash

git stash pop

Aplica los últimos cambios almacenados al directorio de trabajo.

git stash pop

git clean

Elimina los archivos sin seguimiento del repositorio.

git clean -n

git config

Configura las opciones de Git a nivel de sistema, global o local.

git config --global user.name 'Your Name'