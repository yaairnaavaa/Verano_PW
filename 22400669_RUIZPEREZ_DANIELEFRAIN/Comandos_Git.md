20 Comandos Esenciales de GitEste documento contiene una selección de 20 comandos fundamentales de Git para el control de versiones. Cada comando incluye una descripción de su función y un ejemplo de caso de uso para facilitar su comprensión y aplicación en proyectos reales.1. git initDescripción: Inicializa un nuevo repositorio de Git en un directorio existente. Crea una subcarpeta oculta .git que contiene todos los archivos necesarios para el repositorio.Ejemplo de uso:# Navega a la carpeta de tu proyecto
cd mi-proyecto

# Inicializa el repositorio
git init
2. git cloneDescripción: Crea una copia local de un repositorio remoto existente.Ejemplo de uso:# Clona un repositorio desde una URL de GitHub
git clone https://github.com/usuario/nombre-del-repositorio.git
3. git addDescripción: Agrega cambios del directorio de trabajo al área de "staging" (preparación). Los archivos en el área de staging son los que se incluirán en el próximo "commit".Ejemplo de uso:# Agrega un archivo específico
git add index.html

# Agrega todos los archivos nuevos y modificados en el directorio actual
git add .
4. git commitDescripción: Guarda los cambios preparados (del área de staging) en el historial del repositorio de forma permanente. Cada commit tiene un identificador único y un mensaje que describe los cambios.Ejemplo de uso:# Realiza un commit con un mensaje descriptivo
git commit -m "Agrega la estructura básica del archivo HTML"
5. git statusDescripción: Muestra el estado de los archivos en el directorio de trabajo y en el área de staging. Permite ver qué archivos están modificados, cuáles están preparados y cuáles no están siendo rastreados por Git.Ejemplo de uso:git status
6. git logDescripción: Muestra el historial de commits del repositorio, desde el más reciente al más antiguo. Es útil para revisar los cambios realizados.Ejemplo de uso:# Muestra el historial completo
git log

# Muestra un historial más conciso en una sola línea por commit
git log --oneline
7. git branchDescripción: Permite crear, listar y eliminar ramas. Las ramas son líneas de desarrollo independientes.Ejemplo de uso:# Lista todas las ramas locales
git branch

# Crea una nueva rama llamada "nueva-funcionalidad"
git branch nueva-funcionalidad

# Elimina una rama
git branch -d nombre-de-la-rama
8. git checkoutDescripción: Se utiliza para cambiar de una rama a otra. También se puede usar para restaurar archivos del directorio de trabajo a su estado del último commit.Ejemplo de uso:# Cambia a la rama "nueva-funcionalidad"
git checkout nueva-funcionalidad

# Crea una nueva rama y cambia a ella inmediatamente
git checkout -b otra-funcionalidad
9. git mergeDescripción: Fusiona los cambios de una rama en la rama actual. Es la forma más común de integrar el trabajo realizado en diferentes ramas.Ejemplo de uso:# Primero, asegúrate de estar en la rama que recibirá los cambios (ej. main)
git checkout main

# Fusiona los cambios de "nueva-funcionalidad" en "main"
git merge nueva-funcionalidad
10. git pullDescripción: Actualiza el repositorio local con los cambios del repositorio remoto. Es una combinación de los comandos git fetch y git merge.Ejemplo de uso:# Descarga y fusiona los cambios desde el repositorio remoto "origin" y la rama "main"
git pull origin main
11. git pushDescripción: Sube los commits locales al repositorio remoto. Esto permite compartir tus cambios con otros colaboradores.Ejemplo de uso:# Sube los commits de la rama local "main" al repositorio remoto "origin"
git push origin main
12. git remoteDescripción: Administra las conexiones a los repositorios remotos. Puedes agregar, ver y eliminar remotos.Ejemplo de uso:# Lista los repositorios remotos configurados
git remote -v

# Agrega un nuevo repositorio remoto llamado "upstream"
git remote add upstream https://github.com/otro-usuario/repositorio.git
13. git fetchDescripción: Descarga los cambios (commits, archivos, referencias) de un repositorio remoto a tu repositorio local, pero no los fusiona automáticamente. Te permite revisar los cambios antes de integrarlos.Ejemplo de uso:# Descarga todos los cambios del remoto "origin"
git fetch origin
14. git rebaseDescripción: Re-aplica los commits de una rama sobre otra. A diferencia de merge, rebase reescribe el historial del proyecto para crear una secuencia de commits lineal.Ejemplo de uso:# Estando en la rama "nueva-funcionalidad", aplica tus commits sobre la última versión de "main"
git checkout nueva-funcionalidad
git rebase main
15. git stashDescripción: Guarda temporalmente los cambios modificados y no "commiteados" para que puedas cambiar de rama o trabajar en otra cosa sin tener que hacer un commit de un trabajo incompleto.Ejemplo de uso:# Guarda los cambios actuales en el "stash"
git stash

# Para recuperar los cambios guardados
git stash pop
16. git resetDescripción: Deshace cambios. Puede usarse para quitar archivos del área de staging (--soft) o para descartar commits y cambios locales (--hard).Ejemplo de uso:# Quita el último commit del historial pero mantiene los cambios en el directorio de trabajo
git reset HEAD~1

# ¡CUIDADO! Descarta completamente el último commit y todos los cambios locales asociados a él
git reset --hard HEAD~1
17. git rmDescripción: Elimina archivos tanto del directorio de trabajo como del área de staging.Ejemplo de uso:# Elimina el archivo 'viejo.css' y lo prepara para el commit
git rm viejo.css
18. git tagDescripción: Se utiliza para marcar commits específicos con una etiqueta, generalmente para lanzamientos de versiones (ej. v1.0, v2.0).Ejemplo de uso:# Crea una etiqueta anotada para la versión 1.0
git tag -a v1.0 -m "Lanzamiento de la versión 1.0"

# Sube las etiquetas al repositorio remoto
git push origin --tags
19. git diffDescripción: Muestra las diferencias entre commits, el área de staging y el directorio de trabajo.Ejemplo de uso:# Muestra los cambios en el directorio de trabajo que no han sido preparados
git diff

# Muestra los cambios preparados (en staging) que se incluirán en el próximo commit
git diff --staged
20. git configDescripción: Permite configurar variables específicas del repositorio o globales para el usuario (como el nombre de usuario, el correo electrónico, el editor por defecto, etc.).Ejemplo de uso:# Configura tu nombre de usuario globalmente
git config --global user.name "Tu Nombre"

# Configura tu correo electrónico globalmente
git config --global user.email "tu.correo@example.com"
