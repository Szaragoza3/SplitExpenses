from core import add_participants, add_expense, calculate_balances, show_balances, look_for_expense

participants = []
expenses = []

add_participants(["Sergio", "Juan", "María"], participants)
add_expense("Sergio", 120, ["Juan", "María", "Sergio"], "Préstamo", expenses, participants)
add_expense("Juan", -30, ["María", "Sergio", "Juan"], "Devolución", expenses, participants)
look_for_expense(expenses)
balances = calculate_balances(participants, expenses)

print("Grupo de participantes:\n", ', '.join(participants))
print("Gastos registrados:\n", expenses)
show_balances(balances)