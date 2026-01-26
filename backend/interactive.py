from core import add_participants, add_expense, calculate_balances, show_balances, look_for_expense

def show_menu():
    print("\n¡Bienvenido a SplitExpenses!\nLa app n.º 1 en gestión y control de gastos compartidos.")
    print("\n--- MENÚ ---")
    print("1. Añadir participantes")
    print("2. Ver lista de participantes")
    print("3. Añadir gasto")
    print("4. Ver balances")
    print("5. Buscar gasto")
    print("6. Salir")

participants = []
expenses = []

while True:
    show_menu()
    option = input("\nElige una opción: ")

    if option == "1":
        print("Opción añadir participantes.\n")
    elif option == "2":
        print("Opción ver lista de participantes.\n")
    elif option == "3":
        print("Opción añadir gasto.\n")
    elif option == "4":
        print("Opción ver balances.\n")
    elif option == "5":
        print("Opción buscar gasto.\n")
    elif option == "6":
        print("Saliendo del programa...")
        break
    else:
        print("Opción no válida\n")

    if option == "1":
        names = input("Introduce los nombres separados por coma: ")
        name_list = names.split(",")
        for i in range(len(name_list)):
            name_list[i] = name_list[i].strip()
        add_participants(name_list, participants)

    elif option == "2":
        if not participants:
                print("Error: Aún no existe ningún participante.")
        else:
            for i in range(len(participants)):
                print(f"- {participants[i]}")

    elif option == "3":
        paid_by = input("¿Quién pagó? ").strip()
        amount_text = input("Importe del gasto: ")
        involved_text = input("Personas involucradas (separadas por coma): ")
        concept = input("¿Concepto del gasto? ").strip()

        try:
            amount = float(amount_text)
        except ValueError:
            print("Importe no válido")
            continue

        involved = involved_text.split(",")
        for i in range(len(involved)):
            involved[i] = involved[i].strip()

        add_expense(paid_by, amount, involved, concept, expenses, participants)

    elif option == "4":
        balances = calculate_balances(participants, expenses)
        show_balances(balances)

    elif option == "5":
        look_for_expense(expenses)

    option_check = input("\n¿Desea volver al menú? (S/N) ")
    if option_check == "N":
        break