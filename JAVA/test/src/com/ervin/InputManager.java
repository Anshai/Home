package com.ervin;

import java.util.Scanner;

public class InputManager {
    Scanner scanner = new Scanner(System.in);

    // Menu Selection Input
    public int menuInput() {
        System.out.print("Your Option: ");
        return scanner.nextInt();
    }

    // Bank ID Selector
    public int selectBankInput() {
        System.out.println("Enter Bank ID: ");
        return scanner.nextInt();
    }

    // Bank to DELETE
    public int bankToDelete() {
        System.out.print("Enter the ID of the Bank that you want to delete: ");
        return this.scanner.nextInt();
    }

    // Select Client
    //----

    // ====== NEEDS TO BE REPAIRED ======= //
    // Bank Creation input
    public String bankNameInput() {
        System.out.print("Please enter a name for the bank: ");
        String name = scanner.nextLine().toString();
        return name;
    }
}
