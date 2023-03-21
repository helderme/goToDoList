function setLocalStorage(object) {
  // eslint-disable-next-line no-undef
  localStorage.setItem("toDoList", JSON.stringify(object));
}

function getLocalStorage() {
  // eslint-disable-next-line no-undef
  const object = localStorage.getItem("toDoList");
  const defaultInfo = {
    categories: ['Default', 'Home', 'Work', 'Garden'],
    lastId: 0,
    tasksList: []
  }
  return object ? JSON.parse(object) : defaultInfo
}


export { setLocalStorage, getLocalStorage }