let inputField = document.getElementById("inputField");
let tasks = document.getElementById("tasks");
console.log(inputField);
const addTask = () => {
  let task = inputField.value.trim();
  const li = document.createElement("li");
  li.innerHTML = `
<label>
    <input type="checkbox">
    <span>${task}</span>
</label>
<span class="editBtn" title ="Modifier"><i class="fa-solid fa-pen-to-square"></i></span>
<span class="deleteBtn" title="Supprimer"><i class="fa-solid fa-trash"></i></span>
`
  tasks.appendChild(li);
  inputField.value = "";
  //console.log(li);

  const checkBox = li.querySelector("input");
  let span1 = li.querySelector("span");
  const editBtn = li.querySelector(".editBtn");
  console.log(span1.textContent);


  //console.log(checkBox);
  checkBox.addEventListener("click", () => {
    span1.classList.toggle("checked");
    counter();
  })

  editBtn.addEventListener("click", function () {
    const taskUpdate = prompt("editer tâche:", span1.textContent)
    if (taskUpdate !== null) {
      span1.textContent = taskUpdate;
      checkBox.checked = false;
      span1.classList.remove("checked");
      counter();
    }
  })
  const deleteBtn = li.querySelector(".deleteBtn");

  deleteBtn.addEventListener("click", function () {
    if (confirm("est ce que vous etiez sûre de supprimer")) {
      li.remove();
    }
  })

  // Clic sur les filtres
  /*const filtersClick = (callback) => wrapper(
      '#filters',
      'click',
      callback,
      'e.target.matches(\'input[type="radio"]\')'
      
    );
    // Clic sur le bouton de purge
    const cleanClick = (callback) => wrapper(
      '#footer',
      'click',
      callback,
      "e.target.matches('button')"
    );*/

  // Ajout d'une tâche
  /*document.querySelector('input').addEventListener('keydown', e => {
      if(e.key === 'Enter')  {
        // On ajoute la tâche dans le dictionnaire
        tasks.set(e.target.value, false)  
        // On ajoute la ligne dans le tableau
        document.querySelector('tbody').appendChild(createLine(e.target.value, false))
        // Actualisation du local storage
        setStorage() 
      }
    })
  
    // Commutation tâche
  const toggleTask = (complete, target) => {
      const parent = target.parentNode
      const sibling = parent.previousSibling
      const text = sibling.textContent
      // Mise à jour du dictionnaire
      tasks.set(text, complete)
      // Changement du bouton
      parent.innerHTML = complete ? buttonsComplete : buttonsNoComplete
      // Barrage du texte
      sibling.innerHTML = complete ? `<del>${text}</del>` : text
    }*/
}
const counter = () => {
  let competedTasks = document.querySelectorAll(".checked").length;
  console.log(competedTasks)
  let Counter = document.getElementById("completedCounter");
  Counter.innerText = competedTasks;
}
counter();
