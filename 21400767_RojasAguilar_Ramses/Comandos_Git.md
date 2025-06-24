| **Comando**    | **Descripción**                                                       | **Ejemplo de uso**                                          |
| -------------- | --------------------------------------------------------------------- | ----------------------------------------------------------- |
| `git init`     | Crea un nuevo repositorio Git en un directorio.                       | `git init` para iniciar control de versiones en tu carpeta. |
| `git clone`    | Copia un repositorio remoto a tu máquina local.                       | `git clone https://github.com/user/proyecto.git`            |
| `git status`   | Muestra el estado de los archivos (cambios, sin seguimiento, etc.).   | `git status` para ver qué archivos modificaste.             |
| `git add`      | Agrega archivos al área de preparación (staging).                     | `git add index.html`                                        |
| `git commit`   | Guarda los cambios del staging en el historial de versiones.          | `git commit -m "Agrega navbar responsive"`                  |
| `git log`      | Muestra el historial de commits.                                      | `git log --oneline`                                         |
| `git diff`     | Muestra diferencias entre archivos modificados y los últimos commits. | `git diff` para ver qué cambiaste sin hacer commit aún.     |
| `git branch`   | Lista, crea o elimina ramas.                                          | `git branch feature/login`                                  |
| `git checkout` | Cambia de rama o revierte archivos.                                   | para crear una rama y cambiar a ella: `git checkout -b feature/login` para restaurar un archivo a la última version confirmada: `git checkout -- archivo.txt`                                          |
| `git merge`    | Une cambios de una rama con otra.                                     | `git merge feature/footer`                                  |
| `git pull`     | Descarga y fusiona cambios del repositorio remoto.                    | `git pull origin main`                                      |
| `git push`     | Sube tus commits al repositorio remoto.                               | `git push origin main`                                      |
| `git remote`   | Administra repositorios remotos.                                      | `git remote -v` para ver a qué URLs estás conectado.        |
| `git reset`    | Quita archivos del staging o deshace commits.                         | `git reset archivo.html`                                    |
| `git rm`       | Elimina archivos del proyecto y del seguimiento de Git.               | `git rm script.js`                                          |
| `git stash`    | Guarda temporalmente cambios no listos para commit.                   | `git stash` antes de hacer un pull sin perder tu trabajo.   |
| `git rebase`   | Mueve commits actuales encima de otra rama, como si se hubieran hecho después de los cambios en esa rama.          | `git pull --rebase origin main`                             |
| `git tag`      | Marca versiones importantes. Es como un marcador permanente para un commit. | `git tag v1.0.0`                                            |
| `git fetch`    | Descarga cambios del remoto sin fusionarlos.                          | `git fetch origin`                                          |
| `git show`     | Muestra detalles de un commit, tag o archivo.                         | `git show HEAD` para ver el último commit.                  |
