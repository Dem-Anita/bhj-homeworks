document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.querySelector('.tasks__input');
  const tasksList = document.querySelector('.tasks__list');
  const tasksForm = document.querySelector('.tasks__control');

  taskInput.focus();

  tasksForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
  });

  document.querySelector('.tasks__add').addEventListener('click', function(e) {
    e.preventDefault();
    addTask();
  });

  taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTask();
    }
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    taskInput.value = '';
    
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.innerHTML = `
      <div class="task__title">${taskText}</div>
      <a href="#" class="task__remove">&times;</a>
    `;
    
    tasksList.appendChild(taskElement);
  }

  tasksList.addEventListener('click', function(e) {
    if (e.target.classList.contains('task__remove')) {
      e.preventDefault();
      const taskElement = e.target.closest('.task');
      if (taskElement) {
        taskElement.remove();
      }
    }
  });
});