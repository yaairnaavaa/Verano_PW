# Comandos Git
# Juan Carlos Gonzalez Delgado

| Comando | Descripción | Ejemplo de uso |
|-----------------------------------------------------------------------------------------------------------------------------------|
| 'git init' | Inicializa un nuevo repositorio Git en el directorio actual. | 'git init' |
| 'git clone url' | Clona un repositorio remoto en tu máquina local. | 'git clone https://github.com/yaairnaavaa/Verano_PW.git' |
| 'git status' | Muestra el estado actual del repositorio (archivos modificados, sin seguimiento, etc.). | 'git status' |
| 'git add <archivo>' | Añade un archivo al área de preparación (staging area). | 'git add index.html' |
| 'git add .' | Añade todos los archivos modificados al área de preparación. | 'git add .' |
| 'git commit -m "mensaje" ' | Crea un nuevo commit con los archivos del área de preparación. | 'git commit -m "Actualizacion"' |
| 'git log' | Muestra el historial de commits. | 'git log' |
| 'git diff' | Muestra los cambios entre los archivos sin hacer commit. | 'git diff' |
| 'git branch' | Muestra las ramas disponibles en el repositorio. | 'git branch' |
| 'git branch <nombre>' | Crea una nueva rama. | 'git branch feature-login' |
| 'git checkout <rama>' | Cambia a otra rama. | 'git checkout main' |
| 'git merge <rama>' | Fusiona una rama con la actual. | 'git merge feature-login' |
| 'git pull' | Descarga y fusiona los cambios del repositorio remoto con el local. | 'git pull origin main' |
| 'git push' | Sube los cambios confirmados (commits) al repositorio remoto. | 'git push origin main' |
| 'git remote -v' | Muestra las URLs de los repositorios remotos asociados. | 'git remote -v' |
| 'git reset' | Deshace cambios en el área de preparación. | 'git reset archivo.txt' |
| 'git rm <archivo>' | Elimina un archivo del repositorio y del sistema de archivos. | 'git rm archivo.txt' |
| 'git stash' | Guarda temporalmente los cambios no confirmados. | 'git stash' |
| 'git stash pop' | Restaura los cambios guardados con `stash`. | 'git stash pop' |
| 'git revert <hash>' | Crea un nuevo commit que revierte uno anterior. | 'git revert a1b2c3d' |
