# Comandos Básicos de Git

| Comando                    | Descripción                                                                 | Ejemplo de Caso de Uso                                                                |
|---------------------------|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| `git init`                | Inicializa un nuevo repositorio Git en un directorio                        | Crear un nuevo proyecto Git local en una carpeta: `git init`                         |
| `git clone <url>`         | Clona un repositorio remoto al equipo local                                 | Clonar un proyecto de GitHub: `git clone https://github.com/usuario/proyecto.git`    |
| `git status`              | Muestra el estado actual del repositorio                                    | Ver archivos modificados y sin seguir: `git status`                                   |
| `git add <archivo>`       | Añade archivos específicos al área de preparación (staging)                 | Agregar un archivo editado: `git add index.html`                                      |
| `git add .`               | Añade todos los archivos modificados o nuevos al área de preparación        | Preparar todos los archivos para el commit: `git add .`                               |
| `git commit -m "mensaje"` | Crea un commit con los cambios en el área de staging                        | Guardar los cambios con un mensaje: `git commit -m "Agrega página de contacto"`       |
| `git log`                 | Muestra el historial de commits del repositorio                             | Ver historial de cambios: `git log`                                                   |
| `git diff`                | Muestra las diferencias entre archivos no confirmados                       | Comparar cambios antes de hacer commit: `git diff`                                    |
| `git branch`              | Lista, crea o elimina ramas                                                  | Ver ramas existentes: `git branch`                                                    |
| `git branch <nombre>`     | Crea una nueva rama                                                         | Crear una rama para una nueva característica: `git branch nueva-feature`              |
| `git checkout <rama>`     | Cambia a otra rama                                                          | Cambiar a la rama de desarrollo: `git checkout develop`                               |
| `git merge <rama>`        | Fusiona una rama en la rama actual                                          | Unir los cambios de `feature` a `main`: `git merge feature`                           |
| `git pull`                | Descarga y fusiona cambios del repositorio remoto                           | Actualizar la rama local con los últimos cambios del remoto: `git pull origin main`   |
| `git push`                | Sube los cambios confirmados al repositorio remoto                          | Subir cambios a GitHub: `git push origin main`                                        |
| `git remote -v`           | Muestra las URL de los repositorios remotos configurados                    | Ver URL del repositorio remoto: `git remote -v`                                       |
| `git reset <archivo>`     | Quita archivos del área de staging                                           | Quitar un archivo antes de hacer commit: `git reset index.html`                       |
| `git rm <archivo>`        | Elimina un archivo del repositorio y lo prepara para el commit              | Eliminar un archivo del proyecto: `git rm viejo.txt`                                  |
| `git stash`               | Guarda cambios temporales para restaurarlos después                         | Guardar progreso temporal antes de cambiar de rama: `git stash`                       |
| `git stash pop`           | Aplica los cambios guardados con `stash` y los elimina del stash            | Restaurar los cambios guardados: `git stash pop`                                      |
| `git revert <commit>`     | Revierte un commit específico sin borrar el historial                       | Deshacer un commit erróneo: `git revert 4f5e6d7`                                      |