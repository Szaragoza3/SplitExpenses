let participants = [];

const input = document.getElementById("participants-input");
const button = document.getElementById("add-participants-btn");
const list = document.getElementById("participants-list");

console.log(button);
button.addEventListener("click", onAddParticipantsClick);

function onAddParticipantsClick() {
    console.log("CLICK DETECTADO");
    let rawValue = input.value;

    if (rawValue.trim() === "") {
        return;
    }

    let names = rawValue.split(",");

    let cleanedNames = [];

    for (let name of names) {
        cleanedNames.push(name.trim());
    }

    add_participants(cleanedNames, participants);

    input.value = "";

    renderParticipants();
}

function renderParticipants() {
    list.innerHTML = "";

    for (let person of participants) {
        let li = document.createElement("li");
        li.innerText = person;
        list.appendChild(li);
    }
}