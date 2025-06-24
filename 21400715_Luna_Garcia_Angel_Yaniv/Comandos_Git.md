# Comandos

 | Comandos | Descripción | Ejemplo de uso |
 |----------|----------|----------|
 |git ini|Inicializa un nuevo repositorio Git en el directorio actual.|git ini|
 |git clone|Clona un repositorio remoto en tu máquina local.|git clone https://github.com/usuario/proyecto.git|
 |git status|Muestra el estado actual del repositorio, cambios sin agregar o sin confirmar.|git status|
 |git status|Añade archivos al área de preparación (staging area).|git add archivo.txt|
 |git commit -m|Crea un commit con los cambios preparados y un mensaje.|git commit -m "Agrega nueva funcionalidad de login"|
 |git log|Muestra el historial de commits del repositorio.|git log|
 |git diff|Muestra las diferencias entre archivos modificados y el último commit.|git diff|
 |git branch|Lista las ramas existentes o crea una nueva rama.|git branch / git branch nueva-rama|
 |git checkout|Cambia de rama o restaura archivos.|git checkout main /git checkout -b nueva-rama|
 |git merge|Fusiona otra rama con la rama actual.|git merge nueva-rama|
 |git push|Envía los commits locales al repositorio remoto.|git push origin main|
 |git remote|Administra repositorios remotos.|git remote -v  # Ver remotos configurados git remote add origin \n https://github.com/usuario/proyecto.git|
 |git reset|Deshace commits o saca archivos del área de preparación.|git reset archivo.txt \n git reset --hard HEAD~1   # Borra el último commit|
 |git rm| Elimina archivos del repositorio y del área de preparación.|git rm archivo.txt \n git commit -m "Elimina archivo innecesario"|
 |git stash|Guarda cambios no confirmados para aplicarlos después.|git stash \n git stash pop   # Recupera los cambios guardados|
 |git tag|Crea etiquetas (tags), normalmente para marcar versiones.|git tag v1.0 \n git push origin v1.0|
 |git show|Muestra información detallada de un commit o tag.|git show HEAD \n git show v1.0|
 |git fetch|Descarga cambios del repositorio remoto sin fusionarlos.|git fetch origin|
 |git config|Configura opciones de usuario y repositorio.|git config --global user.name "Tu Nombre" \n git config --global user.email "tuemail@example.com"|
