# 📘 Comandos Git  
**Autor:** Juan Carlos González Delgado

---

## ✅ 1. `git init`
- **Descripción:** Inicializa un nuevo repositorio Git en el directorio actual.
- **Ejemplo de uso:**  
  ```bash
  git init
  ```

## ✅ 2. `git clone <url>`
- **Descripción:** Clona un repositorio remoto en tu máquina local.
- **Ejemplo de uso:**  
  ```bash
  git clone https://github.com/yaairnaavaa/Verano_PW.git
  ```

## ✅ 3. `git status`
- **Descripción:** Muestra el estado actual del repositorio.
- **Ejemplo de uso:**  
  ```bash
  git status
  ```

## ✅ 4. `git add <archivo>`
- **Descripción:** Añade un archivo al área de preparación (staging).
- **Ejemplo de uso:**  
  ```bash
  git add index.html
  ```

## ✅ 5. `git add .`
- **Descripción:** Añade todos los archivos modificados al área de preparación.
- **Ejemplo de uso:**  
  ```bash
  git add .
  ```

## ✅ 6. `git commit -m "mensaje"`
- **Descripción:** Crea un commit con los archivos preparados.
- **Ejemplo de uso:**  
  ```bash
  git commit -m "Actualización"
  ```

## ✅ 7. `git log`
- **Descripción:** Muestra el historial de commits del repositorio.
- **Ejemplo de uso:**  
  ```bash
  git log
  ```

## ✅ 8. `git diff`
- **Descripción:** Muestra los cambios realizados en los archivos.
- **Ejemplo de uso:**  
  ```bash
  git diff
  ```

## ✅ 9. `git branch`
- **Descripción:** Lista todas las ramas del repositorio.
- **Ejemplo de uso:**  
  ```bash
  git branch
  ```

## ✅ 10. `git branch <nombre>`
- **Descripción:** Crea una nueva rama.
- **Ejemplo de uso:**  
  ```bash
  git branch feature-login
  ```

## ✅ 11. `git checkout <rama>`
- **Descripción:** Cambia de rama.
- **Ejemplo de uso:**  
  ```bash
  git checkout main
  ```

## ✅ 12. `git merge <rama>`
- **Descripción:** Fusiona una rama con la actual.
- **Ejemplo de uso:**  
  ```bash
  git merge feature-login
  ```

## ✅ 13. `git pull`
- **Descripción:** Trae y fusiona cambios desde el repositorio remoto.
- **Ejemplo de uso:**  
  ```bash
  git pull origin main
  ```

## ✅ 14. `git push`
- **Descripción:** Sube los commits al repositorio remoto.
- **Ejemplo de uso:**  
  ```bash
  git push origin main
  ```

## ✅ 15. `git remote -v`
- **Descripción:** Muestra los repositorios remotos configurados.
- **Ejemplo de uso:**  
  ```bash
  git remote -v
  ```

## ✅ 16. `git reset`
- **Descripción:** Quita archivos del área de preparación.
- **Ejemplo de uso:**  
  ```bash
  git reset archivo.txt
  ```

## ✅ 17. `git rm <archivo>`
- **Descripción:** Elimina un archivo del repositorio y del sistema.
- **Ejemplo de uso:**  
  ```bash
  git rm archivo.txt
  ```

## ✅ 18. `git stash`
- **Descripción:** Guarda temporalmente los cambios sin hacer commit.
- **Ejemplo de uso:**  
  ```bash
  git stash
  ```

## ✅ 19. `git stash pop`
- **Descripción:** Recupera los cambios guardados con `stash`.
- **Ejemplo de uso:**  
  ```bash
  git stash pop
  ```

## ✅ 20. `git revert <hash>`
- **Descripción:** Revierte un commit específico sin eliminarlo del historial.
- **Ejemplo de uso:**  
  ```bash
  git revert a1b2c3d
  ```

