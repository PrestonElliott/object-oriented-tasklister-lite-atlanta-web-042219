document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList()
  const newTaskForm = document.getElementById("create-task-form")
  const newTaskDescription = document.getElementById("new-task-description")
  const listContainer = document.getElementById("list")

  const renderApp = () => (listContainer.innerHTML = taskList.render())

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    taskList.createNewTask(newTaskDescription.value)
    e.target.reset()
    renderApp()
  })

  listContainer.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description)
      renderApp()
    }
  })

  renderApp()
})