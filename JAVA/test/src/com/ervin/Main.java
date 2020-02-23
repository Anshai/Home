package com.ervin;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        BankManager manager = new BankManager();
        UiManager uiManager = new UiManager();
        InputManager inputManager = new InputManager();

        int userInput = 10;

        uiManager.welcomeMsg();
        uiManager.bankManagerMenu();

        while (userInput != 0) {
            userInput = inputManager.menuInput();

            switch (userInput) {
                case 1:
                    manager.printBanks();
                    break;
                case 2:
                    // This needs to be repaired
                    // Needs tobe done with a method from the InputManager Class
                    System.out.print("Please enter a name: ");
                    String name = scanner.nextLine();
                    int id = manager.getNumOfBanks();
                    Bank newBank = manager.createBank(name, id);
                    manager.addBank(newBank);
                    break;
                case 3:
                    manager.manageBank();
                    break;
                case 4:
                    int delID = inputManager.bankToDelete();
                    manager.deleteBank(delID);
                    break;
                case 0:
                    System.out.println("\n\nThe Application will exit now...\n");
            }
        }
    }
}

