1. git init:  se utiliza para inicializar un nuevo repositorio Git en el directorio actual. Por ejemplo, si acabas de empezar un proyecto y quieres usar control de versiones, ejecutas `git init` en la carpeta del proyecto.

2. git clone <url>: clona un repositorio remoto en tu máquina local. Es útil cuando quieres trabajar en un proyecto alojado en GitHub o GitLab, como por ejemplo `git clone https://github.com/usuario/proyecto.git`.

3. git status: muestra el estado actual de los archivos en tu repositorio, indicando cuáles han sido modificados, agregados o están pendientes de agregar. Es ideal para revisar tus cambios antes de hacer un commit.

4. git add <archivo>: agrega un archivo específico al área de staging para ser incluido en el próximo commit. Por ejemplo, `git add index.html` prepara ese archivo para ser confirmado.

5. git add: agrega todos los archivos modificados del proyecto al área de staging. Es útil cuando quieres confirmar todos los cambios de una sola vez.

6. git commit -m "mensaje": guarda los cambios del staging en el historial del repositorio con un mensaje descriptivo. Por ejemplo, `git commit -m "Corrige error en el login"`.

7. git push: envía los commits realizados en tu repositorio local al repositorio remoto. Por ejemplo, después de hacer commits, usas `git push origin main` para subirlos a la rama principal en GitHub.

8. git pull: descarga y fusiona los cambios desde el repositorio remoto al repositorio local. Sirve para mantener tu repositorio actualizado con los cambios que otros han hecho.

9. git log: muestra el historial de commits del repositorio, incluyendo mensajes, autores y fechas. Es útil para revisar la evolución del proyecto o identificar cambios.

10. git diff: compara los cambios entre archivos o commits, mostrando las diferencias. Por ejemplo, `git diff index.html` te permite ver qué líneas han cambiado en ese archivo.

11. git checkout <rama>: cambia a otra rama del repositorio. Por ejemplo, `git checkout develop` te permite moverte a una rama secundaria para desarrollar nuevas funciones.

14. git branch: muestra todas las ramas disponibles, y también permite crear o eliminar ramas. Por ejemplo, `git branch nueva-funcionalidad` crea una nueva rama para trabajar aisladamente.

15. git merge <rama>: integra los cambios de una rama secundaria en la rama actual. Por ejemplo, después de terminar una funcionalidad en la rama `feature`, puedes integrarla a `main` con `git merge feature`.

16. git remote -v: muestra las URLs de los repositorios remotos configurados. Es útil para verificar si estás empujando cambios al servidor correcto.

17. git reset <archivo>: elimina un archivo del área de staging, es decir, deshace un `git add`. Por ejemplo, `git reset styles.css` lo saca del commit pendiente.

18. git rm <archivo>: elimina un archivo del repositorio y lo marca para ser borrado en el próximo commit. Por ejemplo, `git rm archivo.txt` borra ese archivo del historial.

19. git stash: guarda temporalmente los cambios sin necesidad de hacer commit, permitiendo que cambies de rama sin perder trabajo. Es útil si estás en medio de algo y necesitas moverte.

20. git stash pop: recupera los cambios guardados con `git stash` y los vuelve a aplicar al proyecto. Sirve para retomar el trabajo temporal guardado.
