const state = {
  groupName: "",
  participants: []
};

const groupNameInput = document.getElementById("group-name-input");

const participantsContainer = document.getElementById("participants-container");
const addParticipantsBtn = document.getElementById("add-participants-btn");

const groupForm = document.getElementById("group-form");

if (addParticipantsBtn) {
  addParticipantsBtn.addEventListener("click", addParticipant);
  addParticipantsBtn.addEventListener("click", updateFooterPosition);
}

if (groupForm) {
  groupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Grupo:", state.groupName);
    console.log("Participantes:", state.participants);
    saveGroupName();
  });
}

if (groupNameInput) {
  groupNameInput.addEventListener("input", (e) => {
    state.groupName = e.target.value;
  });
}

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
    input.placeholder = `Nombre del participante nº${index+1}`;
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

/* CAMBIAR POSICIÓN FOOTER */
const footer = document.getElementById("footer");

function updateFooterPosition() {
  const checkScroll =
    document.documentElement.scrollHeight > window.innerHeight;

  if (checkScroll) {
    footer.classList.remove("card-footer");
    footer.classList.add("card-footer-static");
  } else {
    footer.classList.add("card-footer");
    footer.classList.remove("card-footer-static");
  }
}

window.addEventListener("load", updateFooterPosition);
window.addEventListener("resize", updateFooterPosition);

/* GUARDAR EN LOCAL E IMPRIMIR NOMBRE DEL GRUPO */
function saveGroupName() {
  localStorage.setItem("groupName", state.groupName);
}

function loadGroupName() {
  const saved = localStorage.getItem("groupName");
  if (saved) {
    state.groupName = saved;
  }
}

function printGroupName () {
  const currentDiv = document.getElementById("group-list");
  if (!currentDiv) return;

  const link = document.createElement("a");
  link.href = `${state.groupName}.html`
  link.textContent = `${state.groupName}`;
  link.classList.add("card-button");

  currentDiv.appendChild(link);
}

const groupListDiv = document.getElementById("group-list");
if (groupListDiv){
  window.addEventListener("load", loadGroupName);
  window.addEventListener("load", printGroupName);
}