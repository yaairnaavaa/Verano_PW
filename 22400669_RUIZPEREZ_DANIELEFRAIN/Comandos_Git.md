__20 comandos fundamentales para el control de versiones con Git.__

1. git init
Descripción: Inicializa un nuevo repositorio de Git en un directorio, creando una subcarpeta oculta .git.

Caso de uso: git init en la carpeta de un nuevo proyecto para empezar a rastrear cambios.

2. git clone
Descripción: Crea una copia local de un repositorio remoto existente.

Caso de uso: git clone <URL_del_repositorio> para descargar un proyecto de GitHub y empezar a trabajar en él.

3. git add
Descripción: Agrega cambios del directorio de trabajo al área de preparación (staging area).

Caso de uso: git add . para preparar todos los archivos modificados para el siguiente commit.

4. git commit
Descripción: Guarda los cambios preparados en el historial del repositorio de forma permanente.

Caso de uso: git commit -m "Agrega nueva funcionalidad de inicio de sesión" para guardar los cambios con un mensaje descriptivo.

5. git status
Descripción: Muestra el estado de los archivos en el directorio de trabajo y el área de preparación.

Caso de uso: Ejecutar git status para ver qué cambios están listos para ser "commiteados".

6. git log
Descripción: Muestra el historial de commits del repositorio.

Caso de uso: git log --oneline para ver una lista compacta de todos los cambios realizados en el proyecto.

7. git branch
Descripción: Permite crear, listar y eliminar ramas de desarrollo.

Caso de uso: git branch nueva-feature para crear una nueva rama sin afectar la línea principal de desarrollo.

8. git checkout
Descripción: Se utiliza para cambiar de una rama a otra o para crear una nueva y moverse a ella.

Caso de uso: git checkout -b fix-bug-login para crear una nueva rama para arreglar un error y empezar a trabajar en ella inmediatamente.

9. git merge
Descripción: Fusiona los cambios de una rama en la rama actual.

Caso de uso: Después de terminar una nueva-feature, cambias a la rama main y ejecutas git merge nueva-feature para integrar los cambios.

10. git pull
Descripción: Actualiza el repositorio local con los cambios del repositorio remoto (combina fetch y merge).

Caso de uso: git pull origin main al inicio de tu jornada para asegurarte de tener la última versión del código.

11. git push
Descripción: Sube los commits locales al repositorio remoto.

Caso de uso: git push origin main para compartir tus cambios con el resto del equipo.

12. git remote
Descripción: Administra las conexiones a los repositorios remotos.

Caso de uso: git remote -v para ver las URLs de los repositorios remotos a los que está conectado tu proyecto.

13. git fetch
Descripción: Descarga cambios de un remoto, pero no los fusiona. Permite revisar los cambios antes de integrarlos.

Caso de uso: git fetch origin para ver si hay nuevos cambios en el remoto sin que afecten tu trabajo actual.

14. git rebase
Descripción: Re-aplica commits sobre otra rama, creando un historial lineal y más limpio.

Caso de uso: git rebase main desde tu rama de feature para actualizarla con los últimos cambios de main antes de fusionar.

15. git stash
Descripción: Guarda temporalmente cambios no "commiteados" para poder cambiar de rama limpiamente.

Caso de uso: Si estás a mitad de un cambio y necesitas arreglar un bug urgente en otra rama, usas git stash, cambias de rama, arreglas el bug y luego vuelves y aplicas git stash pop para recuperar tus cambios.

16. git reset
Descripción: Deshace cambios. git reset --hard HEAD descarta todos los cambios locales no "commiteados".

Caso de uso: Si hiciste cambios incorrectos y quieres volver al estado del último commit, git reset --hard es tu opción (¡úsa con cuidado!).

17. git rm
Descripción: Elimina archivos del directorio de trabajo y del área de preparación.

Caso de uso: git rm --cached archivo_secreto.txt para dejar de rastrear un archivo sin eliminarlo de tu disco.

18. git tag
Descripción: Marca commits específicos, usualmente para lanzamientos de versiones.

Caso de uso: git tag -a v1.0 -m "Lanzamiento versión 1.0" para marcar el commit actual como una versión estable.

19. git diff
Descripción: Muestra las diferencias entre commits, el área de preparación y el directorio de trabajo.

Caso de uso: git diff antes de git add para revisar exactamente qué líneas de código has modificado.

20. git config
Descripción: Configura variables específicas del repositorio o globales para el usuario.

Caso de uso: git config --global user.name "Daniel Ruiz" para asegurarte de que todos tus commits lleven tu nombre.