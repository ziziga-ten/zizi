document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Kindly Enter Task Name!!!!")
    }

    else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <div>
                    <button class="check">
                        +
                    </button>
                    <button class="delete">
                        X
                    </button>
                </div>
            </div>
        `;

        let current_tasks = document.querySelectorAll(".delete");
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.parentNode.remove();
            }
        }
        let checked_tasks = document.querySelectorAll(".task");
        for (let i = 0; i < checked_tasks.length; i++) {
            let checked = false;
            let checkbutton = checked_tasks[i].querySelector('.check')
            checkbutton.onclick = function () {
                if (!checked) {
                    checked_tasks[i].style.backgroundColor = '#1dd320';
                } else {
                    checked_tasks[i].style.backgroundColor = '#c5e1e6';
                }
                checked = !checked;
            }
        }
    }
}