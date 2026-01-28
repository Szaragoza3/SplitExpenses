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