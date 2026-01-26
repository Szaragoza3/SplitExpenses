print("Bienvenido a SplitExpenses V.0\n")

participants = []
expenses = []

def add_participants(names, participants):
    for name in names:
        if name in participants:
            print(f"{name} ya está en el grupo.\n")
        else:
            participants.append(name)
            print(f"{name} ha sido añadido al grupo.\n")

def add_expense(paid_by, amount, involved, expenses):
    if paid_by not in participants:
        print(f"Error: {paid_by} no está en el grupo.\n")
        return
    if amount < 0:
        print(f"Error: El gasto de {amount}€ no se añadió por valor negativo.\n")
        return
    for person in involved:
        if person not in participants:
            print(f"Error: {person} no está en el grupo.\n")
            return
    expense = {
        "paid_by": paid_by,
        "amount": amount,
        "involved": involved
    }
    expenses.append(expense)
    print(f"Gasto de {amount}€ añadido, pagado por {paid_by} para {', '.join(involved)}.\n")

def calculate_balances(participants, expenses):
    balances = {}
    for person in participants:
       balances[person] = 0
    for expense in expenses:
        debt = expense["amount"] / len(expense["involved"])
        for person in expense["involved"]:
            balances[person] = balances[person] - debt
        balances[expense["paid_by"]] = balances[expense["paid_by"]] + expense["amount"]
    return balances

def show_balances(balances):
    print("\nRESUMEN DE BALANCES:\n")
    for person, balance in balances.items():
        if balance > 0:
            print(f"{person} debe recibir {balance:.2f}€\n")
        elif balance < 0:
            print(f"{person} debe pagar {-balance:.2f}€\n")
        else:
            print(f"{person} no tiene deudas\n")

add_participants(["Sergio", "Juan", "María"], participants)
add_expense("Sergio", 120, ["Juan", "María", "Sergio"], expenses)
add_expense("Juan", -30, ["María", "Sergio", "Juan"], expenses)
balances = calculate_balances(participants, expenses)

print("Grupo de participantes:\n", ', '.join(participants))
print("Gastos registrados:\n", expenses)
show_balances(balances)