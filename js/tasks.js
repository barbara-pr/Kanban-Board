import { aplicarDrag } from "./dragDrop.js";

export function initTasks() {
    const botoes = document.querySelectorAll(".btn");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const status = botao.dataset.status;
            criarInputTask(botao, status);
        });
    });
}

function criarInputTask(botao, status) {
    const coluna = botao.closest(".kanban-div");
    const cardsField = coluna.querySelector(".cards-field");

    if (cardsField.querySelector(".task-input")) return;

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task", "task-input", classeStatus(status));

    const input = document.createElement("input");
    input.placeholder = "Nova tarefa...";

    taskDiv.appendChild(input);
    cardsField.appendChild(taskDiv);
    input.focus();

    input.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            const texto = input.value.trim();
            if (!texto) return;

            criarTaskFinal(cardsField, texto, status);
            taskDiv.remove();
        }
    });
} 

function criarTaskFinal(cardsField, texto, status) {
    const task = document.createElement("div");
    task.classList.add("task", classeStatus(status));
    aplicarDrag(task);

    const span = document.createElement("span");
    span.textContent = texto;

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn-delete");
    btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
    btnDelete.addEventListener("click", () => task.remove());

    task.append(span, btnDelete);
    cardsField.appendChild(task);
}

function classeStatus(status) {
    if (status === "ToDo") return "todo";
    if (status === "InProgress") return "in-progress";
    if (status === "Done") return "done";
}
