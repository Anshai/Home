package com.ervin;

public class UiManager {
    // Print welcome message when the app opens
    public void welcomeMsg() {
        System.out.println("\n======== Welcome to the BANK MANAGER Application ========\n");
        System.out.println("- Select anything from the menu by typing in the ID of the option");
    }

    // Print main BANK MANAGER MENU
    public void bankManagerMenu() {
        System.out.println("1 - Show Available Banks");
        System.out.println("2 - Create Bank");
        System.out.println("3 - Select Bank");
        System.out.println("4 - Delete Bank");
        System.out.println("0 - Exit Application");
    }

    //Print Welcome Message of a Bank
    public void welcomeMsgBank(Bank bank) {
        System.out.println("\n ===== Welcome to " + bank.getBankName() + " ===== \n\n");
    }

    //Print Bank Information
    public void printBankInfo(Bank bank) {
        System.out.println("- Bank Name: " + bank.getBankName());
        System.out.println("- Bank ID: " + bank.getID());
        System.out.println("- Number of Clients: " + bank.getNumOfClients() + "\n");
    }

    // Print Selected Bank Menu
    public void selectedMenu() {
        System.out.println("1 - Show Bank Information");
        System.out.println("2 - Show the list of clients");
        System.out.println("0 - back to main menu");
    }

}
