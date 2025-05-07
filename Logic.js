let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

// Load tasks from localStorage when the page is loaded
window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    createTask(task);
  });
};

// Add a new task and save it to localStorage
function Add() {
  if (inputs.value.trim() === "") {
    alert("Please enter a task");
  } else {
    let task = inputs.value;
    createTask(task);

    // Save tasks to localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    inputs.value = "";
  }
}

// Function to create a task item
function createTask(task) {
  let newEle = document.createElement("ul");
  newEle.innerHTML = `${task} <i class="fa-solid fa-trash" style="cursor:pointer; color:red;"></i>`;
  text.appendChild(newEle);

  // Add event listener to remove task
  newEle.querySelector("i").addEventListener("click", () => {
    newEle.remove();
    removeTaskFromStorage(task);
  });
}

// Remove task from localStorage
function removeTaskFromStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((t) => t !== task); // Filter out the task
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove all tasks from localStorage and the page
function REW() {
  text.innerHTML = ""; // Clears tasks from the page
  localStorage.removeItem("tasks"); // Clears tasks from localStorage
}
