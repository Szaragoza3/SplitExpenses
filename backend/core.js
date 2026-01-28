function add_participants(names, participants) {
    for (let name of names) {
        if (participants.includes(name)) {
            console.log(name + " ya está en el grupo.");
        } else {
            participants.push(name);
            console.log(name + " ha sido añadido al grupo.");
        }
    }
}

function add_expense(paid_by, amount, involved, concept, expenses, participants) {
    if (!participants.includes(paid_by)) {
        console.log(paid_by + " no está en el grupo.");
        return;
    }
    if (amount < 0) {
        console.log("Error: El gasto " + concept + " de " + amount + "€ no se añadió por valor negativo");
        return;
    }
    for (let person of involved) {
        if (!participants.includes(person)) {
            console.log(person + " no está en el grupo.");
            return;
        }
    }
    let expense = {
        paid_by: paid_by,
        amount: amount,
        involved: involved,
        concept: concept
    }
    expenses.push(expense);

    console.log(
        "El gasto " + concept + " de" + amount + "€ se añadió, fue pagado por " + paid_by + ", para" + involved.join(", ")
    );
}