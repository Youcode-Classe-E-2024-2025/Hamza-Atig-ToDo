let modal = document.querySelector("#modal");

function openModal() {
    modal.classList.remove("opacity-0", "translate-y-full");
    modal.classList.add("opacity-100", "translate-y-0");
}

function closeModal() {
    modal.classList.add("invisible");
}

function addtask() {
    if (document.querySelector("#title").value == "") {
        alert("Please enter a title");
    } else if (document.querySelector("#description").value == "") {
        alert("Please enter a description");
    } else if (new Date(document.querySelector("#date").value) <= new Date()) {
        alert("Please enter a valid future date");
    } else {
        let title = document.querySelector("#title").value;
        let description = document.querySelector("#description").value;
        let date = document.querySelector("#date").value;
        let priority = document.querySelector("#Priority").value;

        let task = document.createElement("div");
        task.className = "w-8/1 text-center font-bold rounded-md text-white p-4 mb-4";
        task.setAttribute("draggable", "true");

        if (priority === "p1") {
            task.classList.add("border", "bg-red-500");
        } else if (priority === "p2") {
            task.classList.add("border", "bg-yellow-500");
        } else if (priority === "p3") {
            task.classList.add("border", "bg-green-500");
        }

        task.innerHTML = `
            <h2 class="text-lg">${title}</h2>
            <p class="text-xs text-gray-300">${description}</p>
            <p class="text-xs text-gray-300">${date}</p>
            <div class="flex justify-center space-x-2 mt-2">
                <button class="bg-red-600 text-white rounded-md px-4 py-1" onclick="this.parentElement.parentElement.remove()">Delete</button>
                <button class="bg-blue-500 text-white rounded-md px-4 py-1" onclick="editTask(this)">Edit</button>
            </div>
        `;

        task.addEventListener("dragstart", () => task.classList.add("opacity-50"));
        task.addEventListener("dragend", () => task.classList.remove("opacity-50"));

        document.querySelector("#to-do").appendChild(task);

        document.querySelector("#title").value = "";
        document.querySelector("#description").value = "";
        document.querySelector("#date").value = "";
        document.querySelector("#Priority").value = "";
        closeModal();
    }
}

const sections = document.querySelectorAll(".To-Do, .Doing, .Done");

sections.forEach(section => {
    section.addEventListener("dragover", (e) => e.preventDefault());
    section.addEventListener("drop", function (e) {
        const draggedTask = document.querySelector(".opacity-50");
        if (draggedTask) {
            section.querySelector("div").appendChild(draggedTask);
        }
    });
});

function editTask(button) {
    alert('men ba3d');
}
