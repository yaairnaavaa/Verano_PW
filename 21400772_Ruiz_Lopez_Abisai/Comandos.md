1. # git init  
   Inicializa un nuevo repositorio Git en el directorio actual.  
   ## Ejemplo: 
   git init

2. # git clone
   Crea una copia local de un repositorio remoto.  
   ## Ejemplo: 
   git clone https://github.com/usuario/proyecto.git

3. # git status
   Muestra el estado actual del repositorio: archivos modificados, sin seguimiento, etc.  
   ## Ejemplo:
   git status

4. # git add (con archivo)
   Añade un archivo específico al área de preparación (staging).  
   ## Ejemplo: 
   git add index.html

5. # git add .
   Añade todos los archivos modificados al área de preparación.  
   ## Ejemplo:
   git add .

6. # git commit -m (mensaje)  
   Registra los cambios preparados con un mensaje descriptivo.  
   ## Ejemplo: 
   git commit -m "Corrige validación del formulario"

7. # git log  
   Muestra el historial de commits del repositorio.  
   ## Ejemplo: 
   git log

8. # git diff  
   Compara los cambios entre archivos o commits.  
   ## Ejemplo: 
   git diff index.html

9. # git branch  
   Lista las ramas existentes o crea una nueva.  
   ## ejemplo:
   git branch nueva-funcionalidad

10. # git checkout (rama)  
    Cambia a la rama especificada.  
    ## Ejemplo: 
    git checkout main

11. # git checkout -b (nueva-rama)  
    Crea una nueva rama y cambia a ella inmediatamente.  
    ## Ejemplo: 
    git checkout -b hotfix-login

12. # git merge (rama)  
    Fusiona la rama indicada con la rama actual.  
    ## Ejemplo:
    git merge desarrollo

13. # git pull  
    Descarga y fusiona los cambios del repositorio remoto.  
    ## Ejemplo: 
    git pull origin main

14. # git push  
    Envía tus commits locales al repositorio remoto.  
    ## Ejemplo:
    git push origin main

15. # git remote -v  
    Muestra las URLs de los repositorios remotos configurados.  
    ## Ejemplo: 
    git remote -v

16. # git reset  
    Revierte cambios en el área de preparación o en commits anteriores.  
    ## Ejemplo: 
    git reset HEAD archivo.txt

17. # git rm (archivo)  
    Elimina un archivo del repositorio y del sistema de archivos.  
    ## Ejemplo: 
    git rm viejo_script.js

18. # git stash  
    Guarda temporalmente los cambios no confirmados para limpiar el área de trabajo.  
    ## Ejemplo: 
    git stash

19. # git tag
    Crea una etiqueta para marcar una versión específica del proyecto.  
    ## Ejemplo: 
    git tag v1.0

20. # git config  
    Configura opciones de usuario como nombre y correo electrónico.  
    ## Ejemplo:
    git config --global user.name "RuiloAbyss"
