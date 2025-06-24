# Comandos Git - Jesús Antonio Robles Loera - 21400759

## 1. git init
**Descripción:** Inicializa un nuevo repositorio Git en el directorio actual.  
**Ejemplo:** `git init`

## 2. git clone <url>
**Descripción:** Clona un repositorio remoto a tu máquina local.  
**Ejemplo:** `git clone https://github.com/usuario/proyecto.git`

## 3. git status
**Descripción:** Muestra el estado actual de los archivos (modificados, sin seguimiento, etc.).  
**Ejemplo:** `git status`

## 4. git add <archivo>
**Descripción:** Agrega un archivo específico al área de preparación.  
**Ejemplo:** `git add index.html`

## 5. git add .
**Descripción:** Agrega todos los archivos modificados al área de preparación.  
**Ejemplo:** `git add .`

## 6. git commit -m "mensaje"
**Descripción:** Crea un commit con los cambios agregados y un mensaje descriptivo.  
**Ejemplo:** `git commit -m "Agregando sección de contacto"`

## 7. git log
**Descripción:** Muestra el historial de commits realizados en el repositorio.  
**Ejemplo:** `git log`

## 8. git diff
**Descripción:** Muestra las diferencias entre los archivos modificados y los confirmados.  
**Ejemplo:** `git diff index.html`

## 9. git branch
**Descripción:** Muestra todas las ramas existentes.  
**Ejemplo:** `git branch`

## 10. git branch <nombre>
**Descripción:** Crea una nueva rama con el nombre especificado.  
**Ejemplo:** `git branch desarrollo`

## 11. git checkout <rama>
**Descripción:** Cambia a la rama especificada.  
**Ejemplo:** `git checkout desarrollo`

## 12. git checkout -b <rama>
**Descripción:** Crea una nueva rama y cambia a ella automáticamente.  
**Ejemplo:** `git checkout -b login-feature`

## 13. git merge <rama>
**Descripción:** Fusiona la rama especificada con la rama actual.  
**Ejemplo:** `git merge desarrollo`

## 14. git pull
**Descripción:** Descarga y fusiona los cambios desde el repositorio remoto.  
**Ejemplo:** `git pull origin main`

## 15. git push
**Descripción:** Sube tus commits al repositorio remoto.  
**Ejemplo:** `git push origin main`

## 16. git remote -v
**Descripción:** Muestra las URLs del repositorio remoto.  
**Ejemplo:** `git remote -v`

## 17. git reset <archivo>
**Descripción:** Quita un archivo del área de preparación sin eliminar su contenido.  
**Ejemplo:** `git reset index.html`

## 18. git rm <archivo>
**Descripción:** Elimina un archivo del repositorio y del sistema de archivos.  
**Ejemplo:** `git rm archivo.txt`

## 19. git stash
**Descripción:** Guarda temporalmente los cambios no confirmados.  
**Ejemplo:** `git stash`

## 20. git config --global user.name "JesusRobles"
**Descripción:** Configura tu nombre de usuario de forma global para todos los repositorios.  
**Ejemplo:** `git config --global user.name "Jesús Robles"`
