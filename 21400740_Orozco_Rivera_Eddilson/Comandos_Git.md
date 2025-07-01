1.
Comando: git init 
Descripcion: Crear un repositorio de Git vacío o reinicializar uno ya existente
Ejemplo: Crear un reprositorio Git nuevo para código fuente existente

    $ cd /ruta/a/mi/código
    $ git init      (1)
    $ git add .     (2)
    $ git commit    (3)


2.
Comando: git add 
Descripcion: Añadir contenido de un fichero al índice
Ejemplo: Añade el contenido de todos los ficheros *.txt del directorio Documentacion y sus subdirectorios.

$ git add Documentacion/\*.txt



3.
Comando: git status
Descripcion: Muestra el estatus del arbol de trabajo
Ejemplo:


4. 
Comando: git diff
Descripcion: Muestra los cambios entre confirmaciones, confirmación y árbol de trabajo, etc.
Ejemplo: Varias formas de revisar tu árbol de trabajo

    $ git diff            (1)
    $ git diff --cached   (2)
    $ git diff HEAD       (3)
    $ git diff AUTO_MERGE (4)

5. 
Comando: git-commit 
Descripcion: Registra cambios en el repositorio.
Ejemplo: Cuando grabas tu propio trabajo, el contenido de los ficheros modificados en tu árbol de trabajo es almacenado temporalmente en un área de presentación llamada "índice" con git add. Después de construir el estado a ser confirmado incrementalmente con esos comandos, se usa git commit(sin algún parámetro de nombre de ruta) para registrar lo que ha sido presentado al momento. Esta es la forma más básica del comando. 

$ edit hola.c
$ git rm adios.c
$ git add hola.c
$ git commit

6.
Comando: git log
Descripción: Muestra el historial de confirmaciones (commits).
Ejemplo: Ver el historial con detalles.

$ git log --oneline --graph

7. 
Comando: git branch
Descripción: Lista, crea o borra ramas.
Ejemplo: Crear una rama nueva.

$ git branch nueva-rama

8.  
Comando: git checkout
Descripción: Cambia entre ramas o restaura archivos.
Ejemplo: Cambiar a una rama existente.

$ git checkout main

9. 
Comando: git merge
Descripción: Fusiona una rama con la rama actual.
Ejemplo: Fusionar rama-feature en main.

$ git checkout main
$ git merge rama-feature

10. 
Comando: git clone
Descripción: Clona un repositorio remoto localmente.
Ejemplo: Clonar un repo desde GitHub.

$ git clone https://github.com/usuario/repo.git

11. 
Comando: git pull
Descripción: Obtiene cambios del remoto y los fusiona.
Ejemplo: Actualizar el repo local con cambios remotos.

$ git pull origin main

12. 
Comando: git push
Descripción: Envía cambios locales al repositorio remoto.
Ejemplo: Subir commits a GitHub.

$ git push origin main

13. 
Comando: git remote
Descripción: Gestiona conexiones con repositorios remotos.
Ejemplo: Añadir un remoto.


$ git remote add origin https://github.com/usuario/repo.git

14. 
Comando: git stash
Descripción: Guarda cambios temporales sin hacer commit.
Ejemplo: Guardar cambios en stash.

$ git stash

15. 
Comando: git tag
Descripción: Crea etiquetas para versiones específicas.
Ejemplo: Etiquetar un commit.

$ git tag -a v1.0 -m "Versión 1.0"

16. 
Comando: git reset
Descripción: Deshace commits o cambios en el staging area.
Ejemplo: Eliminar un commit del historial (soft reset).

$ git reset --soft HEAD~1

17. 
Comando: git revert
Descripción: Crea un nuevo commit que deshace cambios previos.
Ejemplo: Revertir un commit específico.

$ git revert abc1234

18. 
Comando: git fetch
Descripción: Descarga cambios del remoto sin fusionarlos.
Ejemplo: Obtener cambios remotos sin modificar el working directory.

$ git fetch origin

19. 
Comando: git rebase
Descripción: Reaplica commits sobre otra rama (reescribe historial).
Ejemplo: Rebase interactivo para limpiar commits.

$ git rebase -i HEAD~3

20. 
Comando: git cherry-pick
Descripción: Aplica un commit específico de otra rama.
Ejemplo: Traer un commit de rama-feature a main.

$ git cherry-pick abc123