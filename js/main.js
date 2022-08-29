document.getElementById('add-task').addEventListener('click', () => {
    let inpTask = document.getElementById('inp-task');
    if (!inpTask.value == '') {
        let taskCode = `
                <div class="ctn-task">
                    <div class="delete-task"><span class="material-icons">delete</span></div>
                    <div class="task">
                        <div class="task-text" contenteditable="false">${inpTask.value}</div>
                        <div class="icons-task">
                            <div class="delete-icon"><span class="material-icons">close</span></div> 
                            <div class="edit-icon"><span class="material-icons">edit</span></div>
                        </div>
                    </div>
                </div>`;
        document.getElementById('tasks-container').innerHTML += taskCode;
        let editIcon = document.querySelectorAll('.edit-icon');
        editIcon.forEach((icon) => {
            let edit = false;
            icon.addEventListener('click', (e) => {
                let txtTask = e.target
                        .parentElement
                        .parentElement
                        .parentElement
                        .firstElementChild;
                if (edit == false) {
                    icon.firstElementChild.style.color = "#fff";
                    txtTask.setAttribute('contenteditable', 'true');
                    txtTask.style.cursor = "inherit";
                    edit = true;
                } else {
                    icon.firstElementChild.style.color = "rgba(208,181,0,0.75)";
                    txtTask.setAttribute('contenteditable', 'false');
                    txtTask.style.cursor = "pointer";
                    edit = false;
                };
            }); 
        }); 
        let deleteIcon = document.querySelectorAll('.delete-icon');
        deleteIcon.forEach((icon) => {
            icon.addEventListener('click', (e) => {
                let deleteTask = e.target
                            .parentElement
                            .parentElement
                            .parentElement
                            .parentElement;
                deleteTask.remove();
            });
        });
        let txtTaskContainer = document.querySelectorAll('.task-text');
        txtTaskContainer.forEach((task) => {
            let complete = false;
            task.addEventListener('click', (e) => {
                if (e.target.contentEditable == 'false') {
                    if (complete == false) {
                        e.target.classList.add('complete');
                        complete = true;
                    } else {
                        e.target.classList.remove('complete');
                        complete = false;
                    };
                };
            });
        });
        inpTask.value = '';
    } else {
        let noTaskContainer = document.getElementById('no-task');
        noTaskContainer.style.opacity = "1";
        let noTaskCode = `
                <div class="no-task">
                    <p>You need to add a task</p>
                    <span class="material-icons close-alert">close</span>
                </div>`;
        noTaskContainer.innerHTML = noTaskCode;
        let timeOut = setTimeout(() => {
            noTaskContainer.style.opacity = "0";
            setTimeout(() => {
                noTaskContainer.innerHTML = null;
            }, 400);
        }, 1500);
        document.querySelector('.close-alert').addEventListener('click', () => {
            noTaskContainer.innerHTML = null;
            clearTimeout(timeOut);
        });
    };
});
