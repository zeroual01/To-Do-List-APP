const inputTask = document.getElementById('task');
const listTask = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    // Check if the input is empty
  if (inputTask.value === '') {
    alert('Tu dois écrire quelque chose');
  } else {
    // Create a new <li> element and set its inner HTML to the input value
    let li = document.createElement('li');
    li.innerHTML = inputTask.value;

   // Append the <li> to the task list
    listTask.appendChild(li);

    // Create a <span> element for task removal
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';

    // Append the <span> to the <li>
    li.appendChild(span);
  }
  
  // Clear the input field after adding a task
  inputTask.value = '';
}


// Event listener for the task list (for checking and removing tasks)
listTask.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      // Toggle the "checked" class when clicking on a <li> (for marking as done)
      e.target.classList.toggle("checked");
  
      // Save the updated task list to local storage
      saveData();
    } else if (e.target.tagName === "SPAN") {
      // Remove the parent <li> when clicking on the <span>
      e.target.parentElement.remove();
  
      // Save the updated task list to local storage
      saveData();
    }
  }, false);
  
  // Function to save the task list to local storage
  function saveData() {
      localStorage.setItem("data", listTask.innerHTML);
  }
  
  // Function to retrieve and display tasks from local storage
  function showTasks() {
      listTask.innerHTML = localStorage.getItem("data");
  }
  
  // Load and display tasks from local storage when the page is initially loaded
  showTasks();