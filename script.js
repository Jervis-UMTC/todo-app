//DOM Elements
const date = document.getElementById("date");
const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");
const tasksLeft = document.getElementById("tasks-left");
const clearButton = document.getElementById("clear-completed-btn");
const filters = document.querySelectorAll(".filter");
const emptyState = document.querySelector(".empty-state");

// Set current date
const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
const currentDate = new Date().toLocaleDateString('en-US', options);
date.textContent = currentDate;

// Initialize todos and filter
// Load todos from localStorage or initialize an empty array
let todos = loadTodos();
let currentFilter = "all";

// Storage helper functions
function loadTodos() {
  try {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (error) {
    console.warn("Failed to load todos from localStorage:", error);
    showStorageWarning("Failed to load saved tasks. Starting with empty list.");
    return [];
  }
}

function saveTodos() {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Failed to save todos to localStorage:", error);
    showStorageWarning("Unable to save tasks. Changes may be lost when you refresh the page.");
  }
  updateTasksLeft();
  checkEmptyState();
}

function showStorageWarning(message) {
  // Create a temporary warning message
  const warning = document.createElement("div");
  warning.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #ff6b6b;
    color: white;
    padding: 12px 16px;
    border-radius: 4px;
    font-size: 14px;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  `;
  warning.textContent = message;
  document.body.appendChild(warning);
  
  // Remove warning after 5 seconds
  setTimeout(() => {
    if (warning.parentNode) {
      warning.parentNode.removeChild(warning);
    }
  }, 5000);
}

// Test localStorage availability
function isLocalStorageAvailable() {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (error) {
    return false;
  }
}

// Event Listeners
window.addEventListener("DOMContentLoaded", () => {
  // Check if localStorage is available and warn user if not
  if (!isLocalStorageAvailable()) {
    showStorageWarning("Storage is not available. Your tasks won't be saved between sessions.");
  }
  
  renderTodos();
  updateTasksLeft();
  checkEmptyState();
});

filters.forEach(filter => {
  filter.addEventListener("click", (e) => {
    currentFilter = e.target.dataset.filter;
    filters.forEach(f => f.classList.remove("active"));
    e.target.classList.add("active");
    renderTodos();
    checkEmptyState();
  });
});

todoButton.addEventListener("click", () => {
  addTodo(todoInput.value);
});

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo(todoInput.value);
  }
});

clearButton.addEventListener("click", clearCompleted);

//Functions

function addTodo(todoText) {
  if (todoText.trim() === "") return;

  const todo = {
    id: Date.now(),
    text: todoText,
    completed: false
  };

  todos.push(todo);
  todoInput.value = ""; // Clear input field

  saveTodos();
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";

  const filteredTodos = filterTodos(currentFilter);

  filteredTodos.forEach(todo => {
    const li = document.createElement("li");
    const todoDiv = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";
    checkbox.addEventListener("change", () => toggleTodoCompletion(todo.id));
    if (todo.completed) checkbox.checked = true;

    const todoText = document.createElement("span");
    todoText.className = "todo-text";
    todoText.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn fa fa-times";
    deleteButton.addEventListener("click", () => deleteTodo(todo.id));

    todoDiv.appendChild(checkbox);
    todoDiv.appendChild(todoText);
    li.appendChild(todoDiv);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
  });
}

function deleteTodo(id) {
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    saveTodos();
    renderTodos();
  }
}

function toggleTodoCompletion(id) {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    renderTodos();
  }
}

function updateTasksLeft() {
  const tasksLeftCount = todos.filter(todo => !todo.completed).length;
  tasksLeft.textContent = `${tasksLeftCount} task${tasksLeftCount !== 1 ? 's' : ''} left`;
}

function checkEmptyState() {
  const filteredTodos = filterTodos(currentFilter);
  if (filteredTodos.length === 0) emptyState.classList.remove("hidden");
  else emptyState.classList.add("hidden");
}

function filterTodos(filter) {
  switch (filter) {
    case "active":
      return todos.filter(todo => !todo.completed).reverse();
    case "completed":
      return todos.filter(todo => todo.completed).reverse();
    default:
      return todos.reverse();
  }
}

function clearCompleted() {
  todos = todos.filter(todo => !todo.completed);
  saveTodos();
  renderTodos();
}