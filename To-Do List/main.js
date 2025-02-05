const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Function to add a task
function addTask() {
  if (inputBox.value.trim() === '') {
    alert('Input box cannot be empty!');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Add delete button (×)
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);

    inputBox.value = ''; // Clear input field
    saveData();
  }
}

// Allow pressing "Enter" to add a task
inputBox.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Event listener for marking as completed and deleting
listContainer.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
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
showTask();
