export const Task = (props) => {
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

