
// Esperamos a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos los elementos del DOM necesarios
  const text = document.getElementById("messageText");
  const taskInput = document.getElementById("taskInput"); // Campo de entrada para las tareas
  const addTaskButton = document.getElementById("addTask"); // Botón para agregar tareas
  const taskList = document.getElementById("taskList"); // Lista donde se mostrarán las tareas
  const message = document.getElementById("message"); // Elemento para mostrar mensajes temporales

  // Inicializamos el array de tareas desde localStorage o como un array vacío si no hay datos
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Función para guardar el estado actual de las tareas en localStorage
  function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks)); // Convertimos el array a JSON y lo guardamos
  }

  // Función para renderizar todas las tareas en la lista
  function renderTasks() {
      taskList.innerHTML = ""; // Limpiamos el contenido actual de la lista

      // Iteramos sobre cada tarea en el array
      tasks.forEach((task, index) => {
          const li = document.createElement("li"); // Creamos un elemento <li> para la tarea
          li.textContent = task.text; // Establecemos el texto de la tarea
          li.className = task.completed ? "completed" : ""; // Añadimos una clase si está completada

          // Evento para marcar/desmarcar la tarea como completada
          li.addEventListener("click", () => {
              tasks[index].completed = !tasks[index].completed; // Cambiamos el estado de completado
              saveTasks(); // Guardamos los cambios
              renderTasks(); // Repintamos la lista
          });

          // Botón para eliminar la tarea
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "X"; // Texto del botón
          deleteButton.classList.add("delete"); // Clase para estilizar
          deleteButton.addEventListener("click", (e) => {
              e.stopPropagation(); // Evitamos que el clic afecte al elemento <li>
              tasks.splice(index, 1); // Eliminamos la tarea del array
              saveTasks(); // Guardamos los cambios
              renderTasks(); // Repintamos la lista
              text .textContent = "Tarea eliminada", 2000; // Limpiamos el campo de entrada
              
          });

          // Botón para completar/descompletar la tarea
          const completeButton = document.createElement("button");
          completeButton.textContent = task.completed ? "Descompletar" : "Completar"; // Cambia el texto según el estado
          completeButton.classList.add("complete"); // Clase para estilizar
          completeButton.addEventListener("click", (e) => {
              e.stopPropagation(); // Evitamos que el clic afecte al elemento <li>
              tasks[index].completed = !tasks[index].completed; // Cambiamos el estado de completado
              saveTasks(); // Guardamos los cambios
              renderTasks(); // Repintamos la lista
          });

          // Agregamos los botones al elemento <li>
          li.appendChild(deleteButton);
          li.appendChild(completeButton);

          // Agregamos el elemento <li> a la lista
          taskList.appendChild(li);
      });
  }

 

  // Escucha del evento del botón "Agregar Tarea"
  addTaskButton.addEventListener("click", () => {
      const taskText = taskInput.value.trim(); // Obtenemos el texto ingresado por el usuario
      if (taskText === "") {
          showMessage("Ingresa una tarea válida"); // Mostramos un mensaje si el campo está vacío
          return;
      }

      // Agregamos la nueva tarea al array
      tasks.push({ text: taskText, completed: false });
      saveTasks(); // Guardamos los cambios
      renderTasks(); // Repintamos la lista
      taskInput.value = ""; // Limpiamos el campo de entrada
      taskInput.focus(); // Volvemos a enfocar el campo de entrada
      showMessage("Tarea añadida"); // Mostramos un mensaje temporal
  });

  // Renderizamos las tareas almacenadas cuando se carga la página
  renderTasks(); 
  
  
  
  
  // Función para mostrar mensajes temporales
  function showMessage(msg) {
      message.textContent = msg; // Establecemos el mensaje
      setTimeout(() => (msg.textContent = ''), 2000); // Lo borramos después de 2 segundos
  }
});