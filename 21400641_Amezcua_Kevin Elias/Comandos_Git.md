# Comandos Principales de Git.

# 1. git init
- Descripción: Inicializa un nuevo repositorio Git en el directorio actual (crea la carpeta .git).
- Ejemplo:
    mkdir mi-proyecto
    cd mi-proyecto
    git init

# 2. git clone
- Descripción: Clona un repositorio remoto a una máquina local.
- Ejemplo:
    git clone https://github.com/usuario/proyecto.git

# 3. git config --global user.name / git config --global user.email
- Descripción: Configura el nombre y correo que se usarán en todos los commits.
- Ejemplo:
    git config --global user.name "Nombre"  
    git config --global user.email "correo@email.com"

# 4. git status
- Descripción Muestra el estado actual del repositorio: archivos modificados sin seguimiento.
- Ejemplo
    git status

# 5. git add
- Descripción: Añade archivos o cambios al área de staging para que sean incluidos en el próximo commit.
- Ejemplo:
    git add archivo.txt  
    git add .

# 6. git diff
- Descripción: Muestra las diferencias entre el directorio de trabajo y el área de staging, o entre staging y el último commit.
- Ejemplo:
    git diff  
    git diff --staged

# 7. git commit
- Descripción: Registra los cambios preparados en el repositorio local con un mensaje descriptivo.
- Ejemplo:
    git commit -m "Agrega función de login"

# 8. git commit --amend
- Descripción: Modifica el último commit.
- Ejemplo:
    git add prueba.txt  
    git commit --amend -m "Mensaje"

# 9. git branch
- Descripción: Lista, crea o elimina ramas.
- Ejemplo:
    git branch             (lista todas las ramas)  
    git branch feature-x   (crea rama)   
    git branch -d vieja    (elimina rama)

# 10. git switch / git checkout
- Descripción: Cambia de rama o crea y cambia a una nueva.
- Ejemplo:
    git switch develop         (cambia a la rama develop)  
    git switch -c nueva-rama   (crea y cambia a nueva-rama)  
    git checkout -b otra-rama

# 11. git merge
- Descripción: Fusiona otra rama en la rama actual, agregando sus commits.
- Ejemplo:
    git checkout main  
    git merge feature-x

# 12. git rebase
- Descripción: Reaplica los commits de la rama actual sobre la punta de otra rama.
- Ejemplo:
    git checkout feature-x  
    git rebase main

# 13. git fetch
- Descripción: Descarga todos los objetos y referencias desde el repositorio remoto, sin fusionarlos automáticamente.
- Ejemplo:
    git fetch origin

# 14. git pull
- Descripción: Trae cambios del repositorio remoto y los fusiona con la rama actual.
- Ejemplo:
    git pull origin main

# 15. git push
- Descripción: Sube los commits locales a un repositorio remoto.
- Ejemplo:
    git push origin feature-x

# 16. git remote
- Descripción: Gestiona repositorios remotos: los lista, añade nuevas URLs o elimina existentes.
- Ejemplo:
    git remote -v                     (lista remotos y sus URLs)  
    git remote add origin <url>       (añade un remoto llamado origin)  
    git remote remove origin          (elimina el remoto origin)

# 17. git reset
- Descripción: Mueve la referencia de HEAD a otro commit.
- Ejemplo:
    git reset HEAD~1          (deshace el último commit pero conserva los cambios)  
    git reset --hard HEAD     (borra todos los cambios no confirmados)

# 18. git revert
- Descripción: Crea un nuevo commit que deshace los cambios introducidos por un commit anterior, sin alterar el historial.
- Ejemplo:
    git revert a1b2c3d4

# 19. git stash
- Descripción: Guarda temporalmente los cambios no confirmados y limpia el directorio de trabajo, para recuperarlos luego.
- Ejemplo:
    git stash        (guarda y limpia)  
    git stash list   (muestra la lista de stashes)  
    git stash apply  (reaplica el stash más reciente)

# 20. git tag
- Descripción: Crea etiquetas que marcan puntos específicos en el historial.
- Ejemplo:
    git tag v1.0.0  
    git push origin v1.0.0