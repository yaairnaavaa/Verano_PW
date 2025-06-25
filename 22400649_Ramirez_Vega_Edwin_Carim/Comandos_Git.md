#1. git init

- Descripción: El comando git init crea un nuevo repositorio Git o reinicia uno existente.  

Cuando ejecutas el comando, tu directorio actual se convierte en un repositorio Git, lo que te permite seguir sus cambios. Añade una carpeta oculta .git en el directorio, donde Git almacena todos los metadatos, el historial de versiones y los registros relacionados con el proyecto.

- Ejemplo: cd Documentos/Programacion_Web/
git init 

En este ejemplo primero entro a la carpeta Documentos/Programacion_Web y una vez dentro de esa carpeta ejecuto el comando git init para inicializar ese directorio como un repositorio de git

#2. git clone

- Descripción: Para copiar un repositorio Git de una ubicación a otra, utilizamos el comando git clone. Normalmente copia un repositorio existente, incluyendo registros y versiones, desde servidores remotos como GitHub o GitLab a tu máquina local. 

- Ejemplo: git clone https://github.com/yaairnaavaa/Verano_PW

Aquí estoy indicando que se cree una copia del repositorio indicado en el link dentro del comando, la copia se creara dentro de la carpeta en donde me encuentre al momento de ejecutar el comando

#3. git status

- Descripción: El comando git status nos muestra detalles sobre: 

  -- archivos modificados (archivos modificados pero no puestos en escena).
  -- archivos no rastreados (archivos que Git no está rastreando).
  -- archivos preparados (archivos preparados y listos para ser enviados). 
 
- Ejemplo: git status

#4. git add

- Descripción: El comando git add añade tus cambios al área de preparación. Indica a Git que el repositorio debe actualizar estos cambios una vez que el usuario ejecute el comando confirmar.

    git add . : escenifica los cambios realizados en todos los archivos. 
    git add : incluye sólo los cambios realizados en un archivo concreto del área de preparación.

- Ejemplo: git add 22400649_Ramirez_Vega_Edwin_Carim

Con este comando agrego todos los cambios hechos dentro de la carpeta indicada dentro del comando, delimita los cambios que se realizaran con los comandos 
commit y push mas adelante

#5. git commit

- Descripción: Un comando git commit guarda los cambios que has realizado (o puesto en escena) en el repositorio local. Cada vez que ejecutas git commit, Git crea una instantánea de tu repositorio en ese momento. Esto te permite volver a una confirmación anterior siempre que sea necesario. 

- Ejemplo: git commit -m "Cambios Carim Ramirez"

Confirmo los cambios que agregue previamente e indico el mensaje que quiero que se muestre para esta instancia

#6. git remote add

- Descripción: El comando git remote add crea una conexión entre tu repositorio Git local y el repositorio Git remoto, permitiéndote introducir y extraer cambios entre ellos:

- Ejemplo: git remote add <repo_name> <remote_url>

Donde repo_name es el apodo que le damos al repositorio remoto ("origen" por default) y remote_url es la URL del repositorio remoto

#7. git push

- Descripción: El comando git push sincroniza tu repositorio remoto con el repositorio local. Una vez que ejecutes este comando, el repositorio remoto reflejará todos los cambios que hayas confirmado localmente.

- Ejemplo: git push <remote> <branch>

Donde remote es el apodo que le asignamos al repositorio remoto ("origen" por default) y branch es el nombre de la rama que queremos empujar

Tambien se puede ejecutar de las siguientes formas

git push ---all origin
Este comando empuja todas las ramas locales al repositorio remoto

git push --force origin main
Este comando sobrescribe la rama main del repositorio remoto con mi rama local main, tener cuidado al utilizar este comando ya que se puede perder información

#8. git pull

- Descripción: El comando git pull recupera y fusiona los cambios del repositorio remoto con los del repositorio local. 

El comando git pull combina dos comandos: git fetch y git merge. 

En primer lugar, git fetch recupera todos los cambios del repositorio remoto, incluidos los nuevos commits, etiquetas y ramas. A continuación, se ejecuta git merge, integrando esos cambios en la rama local actual. 

- Ejemplo: git pull origin feature-branch
Donde feature-branch es la rama del repositorio remoto la cual se quiere obtener

#9. git fetch

- Descripción: El comando git fetch te permite revisar los cambios en el repositorio remoto antes de fusionarlos en el local. Descarga los cambios y actualízalos en ramas de seguimiento remotas. Para los que no estén familiarizados, las ramas de seguimiento remoto son copias de ramas de repositorios remotos. 

- Ejemplo: git fetch origin

Este comando descarga los cambios en el repositorio remoto y los actualiza en ramas de seguimiento remotas bajo origin

#10. git branch

- Descripción: El comando git branch lista, crea o elimina ramas. Una rama es otra versión de tu repositorio. 

Si estás desarrollando una nueva función para tu aplicación, puedes crear y trabajar en una nueva rama. Puedes fusionar todo a la rama principal una vez que todo esté listo y probado. Esto te permite trabajar en nuevas funciones de forma independiente, sin alterar directamente la línea principal.  

- Ejemplo: 
   -- git branch: muestra la lista de todas las ramas del repositorio.
   -- git branch nombre_rama: crea una nueva rama llamada "nombre_rama".
   -- git branch -d nombre_rama: Elimina la rama llamada "nombre_rama".

#11. git checkout

- Descripción: Elcomando git checkout puede hacer dos cosas: cambiar entre ramas o restaurar archivos a un estado anterior. 

- Ejemplo: git checkout -b feature_branch
Este comando crea una nueva rama llamada "feature_branch" y cambia a ella

#12. git merge

- Descripción: Si has realizado algún trabajo en una nueva rama, puedes fusionarla con la rama principal utilizando git merge para implementar los cambios. Git realiza la fusión de dos formas:

   -- Fusión rápida: Supongamos que has creado una nueva rama llamada "feature_x" a partir de la rama principal y has trabajado en ella. Si la rama principal no ha tenido ninguna actualización desde que creaste "feature_x", en lugar de confirmar los cambios de "feature_x" en la rama principal, Git actualiza la rama principal para que apunte a la última versión de "feature_x". En este caso, no se crea ninguna nueva confirmación de fusión. 
   -- Fusión a tres bandas: Si tanto "feature_x" como la rama principal tienen ediciones, Git combina los cambios y crea una nueva confirmación de fusión en la rama principal. 
 

- Ejemplo: 
      C---D---F (feature-branch)
     /
A---B---E---G (main)

En el commit B, se crea la rama de características C. La rama principal tiene commits adicionales, E y G, incluso después de crear la rama de características. Por lo tanto, la característica se fusiona con la principal, creando una nueva confirmación de fusión M como sigue:

      C---D---F (feature-branch)
     /         \         
A---B---E---G---M (main)

#13. git rebase

- Descripción: git rebase es otra forma de integrar cambios entre ramas, pero funciona de forma distinta a git merge. Fusionar conserva el historial completo tanto de la rama principal como de la rama de características. Rebase, por otro lado, sobrescribe el historial de confirmaciones para hacerlo lineal y limpio.

Además, fusionar requiere una confirmación de fusión adicional, mientras que rebase no crea ninguna confirmación nueva. Git rebase realiza dos pasos: 

   1. Cambiar a una rama de características 
   2. Rebase en main.


- Ejemplo: 
      C---D---F (feature-branch)
     /
A---B---E---G (main)


   -- Paso 1: ejecuta git checkout feature_branch.
   -- Paso 2: Ejecuta git rebase main: Mover toda la rama de características a la rama principal reaplicando los commits C, D, F como C’, D’, y F’ sobre el último commit G en la rama principal. Esto crea un historial de confirmaciones lineal como el siguiente

A---B---E---G---C'---D'---F' (main)

#14. git log

- Descripción: El comando git log muestra todo el historial de confirmaciones de tu rama actual. Incluye cuatro campos clave: confirmación, autor, fecha y mensaje de confirmación. 

   -- Compromiso: un identificador único.
   -- Autor: nombre y correo electrónico de la persona.
   -- Fecha: La fecha y hora en que se confirmó el cambio.
   -- Mensaje de confirmación: descripción de la confirmación. 

- Ejemplo: git log

#15. git diff

- Descripción: La página git diff muestra las diferencias entre varios estados de tu repositorio, ya sea comparando tu directorio actual con el área de preparación, el área de preparación con la última confirmación, o incluso dos archivos o ramas, lo que especifiques.

- Ejemplo: 
   -- git diff - muestra la diferencia entre tu directorio de trabajo actual y el área de preparación. 
   -- git diff -- cached: muestra las diferencias entre la zona de preparación y la última confirmación.
   -- git diff commit1 commit2 - la diferencia entre commit 1 y commit 2.
   -- git diff branch1..branch2 - compara las diferencias entre branch 1 y branch 2.

#16. git reset

- Descripción: El comando git reset te permite deshacer cambios restableciendo el HEAD actual a un estado anterior específico. Para mover el HEAD a un commit anterior, tienes tres variantes: "suave", "mixta" y "dura" para utilizarlas con el comando reiniciar. 

- Ejemplo: 
	-- Suave: retrocede a una confirmación anterior pero mantiene los cambios actuales, permitiéndote volver a confirmarlos más tarde cuando sea necesario. 
	-- git reset --soft HEAD~1

	-- Mixto: retrocede a una confirmación anterior y elimina los cambios de la confirmación actual del área del escenario. Sin embargo, esos cambios no se verán afectados en tu directorio de trabajo.
	-- git reset --mixed HEAD~1

	-- Duro: Esto apuntará a una confirmación anterior, a la vez que eliminará las actualizaciones de la confirmación actual del directorio de trabajo y del área de preparación. 
	-- git reset --hard HEAD~1

#17. git stash

- Descripción: Si has guardado algunos cambios en el pasado y quieres incluirlos en tu directorio de trabajo, utiliza el comando git stash pop. Esto aplicará los últimos cambios almacenados al directorio actual y los eliminará de la lista de cambios almacenados. 

- Ejemplo: git stash

#18. git stash pop

- Descripción: Si has guardado algunos cambios en el pasado y quieres incluirlos en tu directorio de trabajo, utiliza el comando git stash pop. Esto aplicará los últimos cambios almacenados al directorio actual y los eliminará de la lista de cambios almacenados. 

- Ejemplo: git stash pop

#19. git clean

- Descripción: El comando git clean borra los archivos sin seguimiento del repositorio Git. Utiliza el comando git clean -n para previsualizar lo que se borrará antes de ejecutar el comando borrar

- Ejemplo: git clean

#20. git config

- Descripción: El comando git config te permite personalizar la configuración de Git según tus necesidades. Puedes configurar los ajustes a tres niveles: local, del sistema y global. 

   -- A nivel de sistema: Es el nivel de configuración más amplio con acceso a nivel raíz.
   -- Nivel global: Las configuraciones de este nivel se aplican a todos los repositorios del usuario actual. 
   -- A nivel local: En este nivel se pueden personalizar los ajustes relevantes para el repositorio Git actual. 

- Ejemplo: 
   -- git config -list: Muestra los ajustes Git de todos los niveles.
   -- git config --global user.name "Your_name": Establece el nombre de usuario Git para todos los repositorios de tu sistema en "Tu_nombre".
   -- git config --global user.email "your.email@example.com": Establece la dirección de correo electrónico para todos los repositorios de tu sistema.
