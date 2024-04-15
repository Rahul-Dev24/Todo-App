let todo_list = document.querySelector(".todo-list");
let listArr = JSON.parse(localStorage.getItem("todo_list")) || [];

const showTodo = (item) => {
  todo_list.innerHTML += ` <div class="item">
      <h4>${item}</h4><button class="btn">Delete</button>
    </div>`;
};

(() => {
  listArr.forEach((element) => {
    showTodo(element);
  });
})();

document.querySelector("#add-todo-btn").addEventListener("click", () => {
  let val = document.querySelector("#input").value;
  if (!listArr.includes(val)) {
    listArr.push(val);
    localStorage.setItem("todo_list", JSON.stringify(listArr));
    showTodo(val);
    document.querySelector("#input").value = "";
  } else {
    alert(`This Element is Already Add`);
    document.querySelector("#input").value = "";
  }
});

todo_list.addEventListener("click", (e) => {
  let data = e.target.previousSibling.innerText;
  if (localStorage.getItem("todo_list").includes(data)) {
    listArr.splice(listArr.indexOf(data), 1);
    localStorage.setItem("todo_list", JSON.stringify(listArr));
    e.target.previousSibling.parentNode.remove();
  }
});
