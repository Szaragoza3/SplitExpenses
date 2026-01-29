let participants = [];
let expenses = [];

const add_participants_input = document.getElementById("participants-input");
const add_participants_button = document.getElementById("add-participants-btn");
const add_participants_list = document.getElementById("participants-list");

const expenses_paid_by_input = document.getElementById("expenses-paid_by-input");
const expenses_amount_input = document.getElementById("expenses-amount-input");
const expenses_involved_input = document.getElementById("expenses-involved-input");
const expenses_concept_input = document.getElementById("expenses-concept-input");
const add_expense_button = document.getElementById("add-expense-btn");
const expenses_list = document.getElementById("expenses-list");1

const delete_participants_input = document.getElementById("participants-input");
const delete_participants_button = document.getElementById("delete-participants-btn");

add_participants_button.addEventListener("click", onAddParticipantsClick);
add_expense_button.addEventListener("click", onAddExpenseClick);
delete_participants_button.addEventListener("click", onDeleteParticipantsClick);

function onAddParticipantsClick() {
    let form_Value = add_participants_input.value;

    if (form_Value.trim() === "") {
        return;
    }

    let names = form_Value.split(",");

    let cleanedNames = [];

    for (let name of names) {
        cleanedNames.push(name.trim());
    }

    add_participants(cleanedNames, participants);

    add_participants_input.value = "";

    renderParticipants();
}

function renderParticipants() {
    add_participants_list.innerHTML = "";

    for (let person of participants) {
        let li = document.createElement("li");
        li.innerText = person;
        add_participants_list.appendChild(li);
    }
}

function onAddExpenseClick () {
    let paid_by_Value = expenses_paid_by_input.value;
    let amount_Value = expenses_amount_input.value;
    let involved_Value = expenses_involved_input.value;
    let concept_Value = expenses_concept_input.value;

    if (paid_by_Value === "" || amount_Value === "" || involved_Value === "" || concept_Value === "") {
        console.log("Falta campo por rellenar.")
        return;
    }

    let persons_involved = involved_Value.split(",");

    let cleaned_involed_Value = [];

    for (let person of persons_involved) {
        cleaned_involed_Value.push(person.trim());
    }

    add_expense(paid_by_Value, amount_Value, cleaned_involed_Value, concept_Value, expenses, participants);

    expenses_paid_by_input.value = "";
    expenses_amount_input.value = "";
    expenses_involved_input.value = "";
    expenses_concept_input.value = "";

    renderExpenses ();
}

function renderExpenses () {
    expenses_list.innerHTML = "";

    for (let expense of expenses) {
        let li = document.createElement("li");
        li.innerText = `${expense.concept}: ${expense.amount}€ pagado por ${expense.paid_by}, para ${expense.involved.join(", ")}`;
        expenses_list.appendChild(li);
    }
}

function onDeleteParticipantsClick () {
    let form_Value = delete_participants_input.value;

    if (form_Value.trim() === "") {
        return;
    }

    let names = form_Value.split(",");

    let cleanedNames = [];

    for (let name of names) {
        cleanedNames.push(name.trim());
    }

    delete_participants(cleanedNames, participants);

    delete_participants_input.value = "";

    renderParticipants();
}