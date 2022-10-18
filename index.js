const Task = (props) => {
    let { name, due } = props;

    return (`
    <div class="task">
        <div class="task__body">
          <div class="task__name">${name}</div>
          <div class="task__due">${due}</div>
        </div>
        <div class="task__done">✓</div>
      </div>
    `)
}

fetch("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let element = document.querySelector(".todo__tasks");
        element.innerHTML = data
            .map((task) => Task(task))
            .join("");
    });


let isChecked = true;
const getUndo = () => {
    if (isChecked === true) {
        fetch("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let element = document.querySelector(".todo__tasks");
                element.innerHTML = data
                    .filter((task) => task.done === false)
                    .map((task) => Task(task))
                    .join("");
            });
        isChecked = false;
    } else {
        fetch("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let element = document.querySelector(".todo__tasks");
                element.innerHTML = data
                    .map((task) => Task(task))
                    .join("");
            });
        isChecked = true;
    }

}

document.getElementById("checkbox-undone").addEventListener("click", getUndo)