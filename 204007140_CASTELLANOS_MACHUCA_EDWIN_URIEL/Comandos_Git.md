Configuración Básica 

git config --global user.name
Nombre que sale en los commits
git config --global user.name "User"
______________________________________________
git config --global user.emai
Configurar Email
git config --global user.email user@gamil.com
______________________________________________
git config  --global color.ui
Marco de colores para los comandos 
git config  --global color.ui true 

________________________________________________


Inicializando repo

git init
Iniciamos git en la carpeta donde esta el proyecto
git init
___________________________________________
git clone
Clonar repositorio de github
git clone <URL>
___________________________________________
git add 
Añadimos los archivos para el commit 
git add ./<archivo>/-all/*.txt
__________________________________________
git commit -m
Hace un commit 
git commit -m "Commit 1"
__________________________________________
git push
Sube al repositorio los cambios, en la rama master
git push origin master 
__________________________________________
git log
Muestra todos los commits realizados en un repositorio en orden cronologico 
git log 
__________________________________________
git log --online --stat 
Resume cada comit en una sola linea
Ejemplo: git log --oneline --stat

_________________________________________

git log --online --graph 
Agrega un grafico de ramas
Ejemplo: git log --oneline --graph



git diff
Muestra los cmabios en los archivos que no han sido indexados
Ejemplo: git diff
___________________________________

git diff --staged
Muestra las diferencias entre los archivos que ya han sido guardados al staging 
Ejemplo: git diff --staged

_________________________________

git reset HEAD
Saca un archivo del commit 
git reset HEAD <archivo>
Ejemplo: git reset HEAD index.html


_______________________________________________________________________

Tiene algunas variantes como 

git reset --soft  HEAD^
Devuelve el ultimo commit que se hizo y pone los cambios en staging
Ejemplo: git reset --soft HEAD^

__________________________________

git reset --hard HEAD^
Devuelve el ultimo commit y todos los cambios
Ejemplo: git reset --hard HEAD^

___________________________________

git reset --hard HEAD^^
Devuelve los 2 ultimo commit y todos los cambios 
Ejemplo: git reset --hard HEAD^^



_____________________________________________________________

Git remote 

git remote add origin 
Agregar repositorio remoto
git remote add origin <URL>

______________________________________________

git remote set-url origin
Cambiar de remote 
git remote set-url origin <URL>
__________________________________________

git remote rm 
Mover repositorio 
git remote rm <name/origin>


___________________________________________________________


Git Branch

git brach
Crea un branch
git brach <nameBrach>


_____________________________________________________________

git tag
muestra la lista de todos los tag 
Ejemplo: git tag


______________________________________________________________
git coflicto 

git rebase 
Aqui actua ante algun concfligto y dependiendo de la opcion hace varias cosas
Ejemplo: git rebase main

_____________________________________________________

git rebase --continue
Continia la secuencia del rebase donde se pauso
Ejemplo: git rebase --continue

_______________________________________________

git rebase --skip
omite el confligto y continua 
Ejemplo: git rebase --skip

_______________________________________________

git reabse --abort
Devuelve todo al principio del rebase 
Ejemplo: git rebase --abort




_________________________________________________________


Otros comandos

git status 
Lista un estado actual del repositorio con lista de archivos modificados o agregados
Ejemplo: git status

________________________________________________

git pull origin <nameBrach>
Busca nuevos cambios y actualiza el repositorio 
Ejemplo: git pull origin master














