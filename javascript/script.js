let modal = document.querySelector("#modal");
let blur = document.querySelector("#blur-1");
let blur2 = document.querySelector("#blur-2");
let blur3 = document.querySelector("#blur-3")
const dateInput = document.querySelector("#date");
const dateInput1 = document.querySelector("#date1");
let multi = document.querySelector("#Multi");
let currentTask = null;


function openModal() {
    modal.classList.remove("opacity-0", "translate-y-full");
    modal.classList.add("opacity-100", "translate-y-0");
    blur.classList.add("blur-xl");
    blur2.classList.add("blur-xl");
    blur3.classList.add("blur-xl");
}

function closeModal() {
    modal.classList.add("opacity-0", "translate-y-full");
    modal.classList.remove("opacity-100", "translate-y-0");
    blur.classList.remove("blur-xl");
    blur2.classList.remove("blur-xl");
    blur3.classList.remove("blur-xl");

    currentTask = null;
}

function addtask() {
    if (document.querySelector("#title").value == "") {
        alert("Please enter a title");
    } else if (document.querySelector("#description").value == "") {
        alert("Please enter a description");
    } else if (!dateInput.value) {
        alert("Please select a date.");
    } else if (new Date(dateInput.value) <= new Date()) {
        alert("Please enter a valid future date.");
    } else if (document.querySelector("#Priority").value == "") {
        alert("Please select a priority.");
    }

    else {
        let title = document.querySelector("#title").value;
        let description = document.querySelector("#description").value;
        let date = document.querySelector("#date").value;
        let priority = document.querySelector("#Priority").value;

        let task = document.createElement("div");
        task.className = "task w-8/1 pr-4 pl- text-center font-bold rounded-md text-white p-4 mb-4 cursor-move";
        task.setAttribute("draggable", "true");
        
        if (priority === "p1") {
            task.classList.add("border", "bg-red-500");
        } else if (priority === "p2") {
            task.classList.add("border", "bg-yellow-500");
        } else if (priority === "p3") {
            task.classList.add("border", "bg-green-500");
        }

        task.innerHTML = `
            <h2 class="text-[16px]">${title}</h2>
            <p class="text-[6px] text-gray-300" maxlength="10">${description}</p>
            <p class="text-xs text-gray-300">${date}</p>
            <div class="flex justify-center space-x-2 mt-2">
                <button class="bg-red-600 text-white rounded-md px-4 py-1" onclick="this.parentElement.parentElement.remove()">Delete</button>
                <button class="bg-blue-500 text-white rounded-md px-4 py-1" onclick="editTask(this)">Edit</button>
            </div>
        `;

        task.addEventListener("dragstart", () => task.classList.add("opacity-50"));
        task.addEventListener("dragend", () => task.classList.remove("opacity-50"));

        if (currentTask) {
            currentTask.replaceWith(task);
        } else {
            document.querySelector("#to-do").appendChild(task);
        }

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
    currentTask = button.parentElement.parentElement;

    const title = currentTask.querySelector("h2").innerText;
    const description = currentTask.querySelector("p").innerText;
    const date = currentTask.querySelectorAll("p")[1].innerText;

    document.querySelector("#title").value = title;
    document.querySelector("#description").value = description;
    document.querySelector("#date").value = date;
    document.querySelector("#Priority").value = currentTask.classList.contains("bg-red-500") ? "p1" :
        currentTask.classList.contains("bg-yellow-500") ? "p2" : "p3";

    openModal();
}



function openMuli() {
    multi.classList.remove("opacity-0", "translate-y-full");
    multi.classList.add("opacity-100", "translate-y-0");
    blur.classList.add("blur-xl");
    blur2.classList.add("blur-xl");
    blur3.classList.add("blur-xl");
}

function closeMulti() {
    multi.classList.add("opacity-0", "translate-y-full");
    multi.classList.remove("opacity-100", "translate-y-0");
    blur.classList.remove("blur-xl");
    blur2.classList.remove("blur-xl");
    blur3.classList.remove("blur-xl");

    currentTask = null;
}

function addMulti() {
    const title1 = document.querySelector("#title1").value;
    const description1 = document.querySelector("#description1").value;
    const date1 = document.querySelector("#date1").value;
    const priority1 = document.querySelector("#Priority1").value;

    if (!title1) {
        alert("Please enter a title");
        return;
    }

    if (!description1) {
        alert("Please enter a description");
        return;
    }

    if (!date1) {
        alert("Please select a date.");
        return;
    }

    if (new Date(date1) <= new Date()) {
        alert("Please enter a valid future date.");
        return;
    }

    if (!priority1) {
        alert("Please select a priority.");
    }

    else {
        const task1 = document.createElement("div");
        task1.className = "task w-8/1 text-center font-bold rounded-md text-white p-4 mb-4 cursor-move";
        task1.setAttribute("draggable", "true");

        if (priority1 === "p1") {
            task1.classList.add("border", "bg-red-500");
        } else if (priority1 === "p2") {
            task1.classList.add("border", "bg-yellow-500");
        } else if (priority1 === "p3") {
            task1.classList.add("border", "bg-green-500");
        }

        task1.innerHTML = `
            <h2 class="text-[16px]">${title1}</h2>
            <p class="text-[6px] text-gray-300" maxlength="10">${description1}</p>
            <p class="text-xs text-gray-300">${date1}</p>
            <div class="flex justify-center space-x-2 mt-2">
                <button class="bg-red-600 text-white rounded-md px-4 py-1" onclick="this.parentElement.parentElement.remove()">Delete</button>
                <button class="bg-blue-500 text-white rounded-md px-4 py-1" onclick="editTask(this)">Edit</button>
            </div>
        `;
        task1.addEventListener("dragstart", () => task1.classList.add("opacity-50"));
        task1.addEventListener("dragend", () => task1.classList.remove("opacity-50"));

        if (currentTask) {
            currentTask.replaceWith(task1);
        } else {
            document.querySelector("#to-do").appendChild(task1);
        }
        document.querySelector("#title1").value = "";
        document.querySelector("#description1").value = "";
        document.querySelector("#date1").value = "";
        document.querySelector("#Priority1").value = "";
    }
}


function searchTasks() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const tasks = document.querySelectorAll('.task');
    let found = false;

    tasks.forEach(task => {
        task.classList.remove("bg-opacity-10", "border-red-500", "border-yellow-500", "border-green-500");

        if (searchTerm === "" || task.textContent.toLowerCase().includes(searchTerm)) {
            task.classList.remove('hidden');
            if (searchTerm) {
                task.classList.add("bg-opacity-10");
            }
            found = true;
        } else {
            task.classList.add('hidden');
        }
    });

    if (!found && searchTerm !== "") {
        alert('No task found with title "' + searchTerm + '"');
    }
}



// sortting
document.getElementById("sort").addEventListener("change", sortTasks);
function sortTasks() {
    const sortOption = document.getElementById("sort").value;
    const sections = ["to-do", "doing", "done"];

    sections.forEach(sectionId => {
        const taskContainer = document.getElementById(sectionId);
        const tasks = Array.from(taskContainer.children);

        tasks.sort((a, b) => {
            const dateA = new Date(a.querySelector(".text-xs").innerText);
            const dateB = new Date(b.querySelector(".text-xs").innerText);
            const priorityA = a.classList.contains("bg-red-500") ? 1 : a.classList.contains("bg-yellow-500") ? 2 : 3;
            const priorityB = b.classList.contains("bg-red-500") ? 1 : b.classList.contains("bg-yellow-500") ? 2 : 3;

            if (sortOption === "Date") return dateA - dateB;
            if (sortOption === "Datereverse") return dateB - dateA;
            if (sortOption === "Priority") return priorityA - priorityB;
            if (sortOption === "Priorityreverse") return priorityB - priorityA;
            return 0;
        });

        taskContainer.innerHTML = ""; 
        tasks.forEach(task => taskContainer.appendChild(task));
    });
}


// test data

document.addEventListener("DOMContentLoaded", () => {
    const sampleTasks = [
        { title: "Complete Project Proposal", description: "Finish the first draft of the project proposal.", date: "2024-11-15T10:00", priority: "p1" },
        { title: "Weekly Team Meeting", description: "Prepare slides and reports for the team meeting.", date: "2024-11-10T09:00", priority: "p2" },
        { title: "Grocery Shopping", description: "Buy ingredients for the weekend barbecue.", date: "2024-11-05T16:00", priority: "p3" },
        { title: "Code Review", description: "Review recent pull requests and provide feedback.", date: "2024-11-07T14:00", priority: "p1" },
        { title: "Book Dentist Appointment", description: "Schedule a cleaning appointment.", date: "2024-11-20T12:00", priority: "p2" },
        { title: "Plan Birthday Party", description: "Organize activities, send invitations, and arrange catering.", date: "2024-11-25T18:00", priority: "p3" }
    ];

    sampleTasks.forEach(taskData => {
        let task = document.createElement("div");
        task.className = "task w-8/1 text-center font-bold rounded-md text-white p-4 mb-4 cursor-move";
        task.setAttribute("draggable", "true");

        if (taskData.priority === "p1") {
            task.classList.add("border", "bg-red-500");
        } else if (taskData.priority === "p2") {
            task.classList.add("border", "bg-yellow-500");
        } else if (taskData.priority === "p3") {
            task.classList.add("border", "bg-green-500");
        }

        task.innerHTML = `
            <h2 class="text-[16px]">${taskData.title}</h2>
            <p class="text-[6px] text-gray-300">${taskData.description}</p>
            <p class="text-xs text-gray-300">${taskData.date}</p>
            <div class="flex justify-center space-x-2 mt-2">
                <button class="bg-red-600 text-white rounded-md px-4 py-1" onclick="this.parentElement.parentElement.remove()">Delete</button>
                <button class="bg-blue-500 text-white rounded-md px-4 py-1" onclick="editTask(this)">Edit</button>
            </div>
        `;

        task.addEventListener("dragstart", () => task.classList.add("opacity-50"));
        task.addEventListener("dragend", () => task.classList.remove("opacity-50"));

        document.querySelector("#to-do").appendChild(task);
    });
});
