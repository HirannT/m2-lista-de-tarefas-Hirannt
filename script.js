var tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"}
];

renderElements(tasks);
addTaskOnList();

function renderElements(tasks) {
    
  let html = ``;
  
  for (var i = 0; i < tasks.length; i++) {
    
    let task = tasks[i];
    html += createTaskItem(task, i);
  }
  
  document.querySelector('.tasks__list').innerHTML = html;
}

function createTaskItem(task, i) {

  let classTypeTask = ``; 

  if(task.type == 'Urgente') {
    classTypeTask = `span-urgent`;
  }
  else if(task.type == 'Importante') {
    classTypeTask = `span-important`;
  }
  else if(task.type == 'Normal') {
    classTypeTask = `span-normal`; 
  }

  let html = `
    <li class="task__item">
      <div class="task-info__container">
        <span class="task-type ${classTypeTask}"></span>
        <p>${task.title}</p>
      </div>
      <button class="task__button--remove-task" onclick="removeTaskItem(${i})"></button>
    </li>  
  `; 

  return html;
}

function addTaskOnList() {
  
  let form = document.querySelector(".form__button--add-task");

  form.addEventListener('click',  function(event) {

    event.preventDefault();
  
    let task = {
      title: document.querySelector('.form__input--text').value,
      type: document.querySelector('.form__input--priority').value
    };

    tasks.push(task);

    renderElements(tasks);
  });
}

function removeTaskItem(i) {

  tasks.splice(i, 1);
  renderElements(tasks);
}

