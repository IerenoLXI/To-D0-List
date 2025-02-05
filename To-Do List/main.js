// Get input field and task list container
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Function to add a task
function addTask() {
  if (inputBox.value.trim() === '') {
    alert('Input box cannot be empty!'); // Prevent adding empty tasks
  } else {
    let li = document.createElement('li'); // Create a new list item
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li); // Append the new task to the list

    // Create and append delete button (×)
    let span = document.createElement('span');
    span.innerHTML = '\u00d7'; // Unicode for '×'
    li.appendChild(span);

    inputBox.value = ''; // Clear input field after adding task
    saveData(); // Save tasks in local storage
  }
}

// Allow pressing "Enter" to add a task
inputBox.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask(); // Calls addTask() when Enter is pressed
  }
});

// Event listener for marking tasks as completed and deleting them
listContainer.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked'); // Toggle completed task
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove(); // Remove task when delete button is clicked
      saveData();
    }
  },
  false
);

// Save tasks in local storage
function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

// Show saved tasks when page loads
function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}
showTask(); // Load stored tasks on page refresh
