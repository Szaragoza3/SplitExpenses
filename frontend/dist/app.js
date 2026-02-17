const state = {
    groupName: "",
    participants: []
};

const groupNameInput = document.getElementById("group-name-input");

const participantsContainer = document.getElementById("participants-container");
const addParticipantsBtn = document.getElementById("add-participants-btn");

const form = document.getElementById("group-form");

addParticipantsBtn.addEventListener("click", addParticipant)

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Grupo:", state.groupName);
  console.log("Participantes:", state.participants);
});

groupNameInput.addEventListener("input", (e) => {
  state.groupName = e.target.value;
});

const firstParticipantInput = document.querySelector(".participant-input");
if (firstParticipantInput) {
  attachParticipantListener(firstParticipantInput);
  state.participants[0] = "";
}

function addParticipant() {
    const currentInputs = participantsContainer.querySelectorAll(".participant-input");
    const index = currentInputs.length; 
    const input = document.createElement("input");
    input.type = "text";
    input.id = `participant-${index}`;
    input.classList.add("participant-input");
    input.placeholder = "Nombre del participante";
    input.dataset.index = index;

    participantsContainer.appendChild(input);

    attachParticipantListener(input);
    state.participants[index] = "";
}

function attachParticipantListener(input) {
  input.addEventListener("input", (e) => {
    const index = Number(e.target.dataset.index);
    state.participants[index] = e.target.value;
  });
}