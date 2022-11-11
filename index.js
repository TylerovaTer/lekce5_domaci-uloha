import { Task } from "./Task/Task.js"

const renderTask = (tasks) => {
    let element = document.querySelector(".todo__tasks");
    element.innerHTML = tasks
        .map((task) => Task(task))
        .join("");
}

fetch("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks")
    .then((response) => {
        return response.json();
    })
    .then((data) => { renderTask(data) });

const checkbox = document.getElementById("checkbox-undone")

const getUndo = () => {
    if (checkbox.checked) {
        fetch("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false")
            .then((response) => {
                return response.json();
            })
            .then((data) => { renderTask(data) });
    } else {
        fetch("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks")
            .then((response) => {
                return response.json();
            })
            .then((data) => { renderTask(data) });
    }
}

document.getElementById("checkbox-undone").addEventListener("click", getUndo)