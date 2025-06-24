 # Comandos de Git

|**No.**| **Comando** | **Descripción** | **Ejemplo de uso** |
|--------|-------------|-----------------|--------------------|
| 1|`git add`|Añade archivos al área de preparación.|`git add`, `git add .`|
| 2|`git branch`|Lista, crea o elimina ramas.|`git branch`, `git branch new_branch`, `git branch -d old_branch`|
| 3|`git checkout`|Cambiar entre ramas o restaurar archivos (método antiguo).|`git checkout`, `git checkout -b feature_branch`, `git checkout -- <file-name>`, `git checkout <branch-name> -- <file-name>`|
| 4|`git clean`|Elimina los archivos sin seguimiento del repositorio.|`git clean`, `git clean -n`|
| 5|`git clone`|Clona un repositorio Git existente.|`git clone <copied_URL>`|
| 6|`git commit`|Consigna los cambios por etapas en el repositorio local.|`git commit -m "commit_message"`|
| 7|`git config`|Configura las opciones de Git a nivel de sistema, global o local.|`git config`, `git config -list`, `git config --global user.name "Your Name"`, `git config --global user.email "your@email.com"`|
| 8|`git diff`|Muestra las diferencias entre los distintos estados del depósito.|`git diff`, `git diff -- cached`, `git diff commit1 commit2`, `git diff branch1..branch2`|
| 9|`git fetch`|Obtener cambios de un repositorio remoto sin fusionar.|`git fetch origin`|
|10|`git init`|Inicializa un nuevo repositorio Git.|`git init`|
|11|`git log`|Ver el historial de confirmaciones.|`git log`|
|12|`git merge`|Fusiona los cambios de una rama en otra.|`git merge`|
|13|`git pull`|Obtener y fusionar cambios de un repositorio remoto.|`git pull origin`, `git pull origin feature-branch`|
|14|`git push`|Empuja los cambios confirmados a un repositorio remoto.|`git push origin`, `git push <remote> <branch>`|
|15|`git rebase`|Vuelve a aplicar los commits de una rama a otra para tener un historial más limpio.|`git rebase`, `git rebase main`|
|16|`git remote add`|Añade una conexión de repositorio remoto.|`git remote add origin`, `git remote add <repo_name> <remote_url>`|
|17|`git reset`|	Deshacer los cambios restableciendo HEAD a un estado anterior.|`git reset --hard HEAD~1`, `git reset --mixed HEAD~1`, `git reset --soft HEAD~1`|
|18|`git stash`|Guarda temporalmente los cambios no comprometidos y restablece el directorio de trabajo.|`git stash`|
|19|`git stash pop`|Aplica los últimos cambios almacenados al directorio de trabajo.|`git stash pop`|
|20|`git status`|Comprueba el estado de los archivos del directorio de trabajo.|`git status`|
|21|`git switch`|Pasar de una rama a otra (preferible en versiones más recientes).|`git switch`|