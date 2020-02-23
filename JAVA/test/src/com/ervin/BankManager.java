package com.ervin;

import java.util.function.Function;

public class BankManager {
    private Bank firstBank;
    private int numOfBanks;
    InputManager inputManager;
    UiManager uiManager;

    public BankManager() {
        this.firstBank = null;
        this.numOfBanks = 0;
        this.inputManager = new InputManager();
        this.uiManager = new UiManager();
    }

    // Check if there is any Bank created
    public boolean isAnyBankCreated() {
        return this.firstBank != null;
    }

    // Create Bank
    public Bank createBank(String name, int id) {
        return new Bank(name, id);
    }

    // Add first one
    public void addFirstBank(Bank bank) {
        this.firstBank = bank;
    }

    // Add bank
    public void addBank(Bank newBank) {
        if(this.isAnyBankCreated()) {
            Bank current = this.firstBank;
            while(current.hasNext()){
                current = current.getNext();
            }
            current.setNext(newBank);
            this.numOfBanks++;
        } else {
            this.addFirstBank(newBank);
            this.numOfBanks++;
        }
    }


    // List all the available banks
    public void printBanks() {
        if(isAnyBankCreated()) {
            Bank current = this.firstBank;
            System.out.println("----- Bank ID : " + current.getID() + " -----");
            System.out.println("NAME: " + current.getBankName());
            while(current.hasNext()) {
                current = current.getNext();
                System.out.println("----- Bank ID : " + current.getID() + " -----");
                System.out.println("NAME: " + current.getBankName());
            }
        } else {
            System.out.println("No Bank was found..\nThis means that there are no banks created yet..");
        }
    }

    //Get Number of banks
    public int getNumOfBanks() {
        return numOfBanks;
    }

    // Delete Bank
    public void deleteBank(int id) {
        Bank current = this.firstBank;
        Bank previous = new Bank("init", 99);
        boolean deleted = false;
        if(current.getID() == id) {
            this.firstBank = current.getNext();
            deleted = true;
        } else {
            previous = current;
            while(!deleted && current.hasNext()){
                current = current.getNext();
                if(current.getID() == id){
                    if(!current.hasNext()){
                        previous.setNext(null);
                        deleted = true;
                    } else {
                        previous.setNext(current.getNext());
                        deleted = true;
                    }
                }
                if(!deleted){
                    previous = current;
                }
            }
        }
        if(deleted){
            System.out.println("Bank Succesfully deleted!!");
        } else {
            System.out.println("Wrong ID entered..");
        }
    }

    // Select and manage one bank
    public void manageBank() {
        int bankID = this.inputManager.selectBankInput();
        boolean found = false;
        Bank current = this.firstBank;
        Bank selectedBank = new Bank("Null Bank", 99);

        //Check if it is the first one
        if(current.getID() == bankID){
            selectedBank = current;
            found = true;
        }
        // Check the others
        while(!found && current.hasNext()) {
            current = current.getNext();
            if(current.getID() == bankID) {
                selectedBank = current;
                found = true;
            }
        }

        if(found) {
            System.out.println("Bank Succesfully Found!!\n");
            this.uiManager.welcomeMsgBank(selectedBank);
            this.uiManager.selectedMenu();
            int userInput = 10;

            while(userInput != 0) {
                userInput = inputManager.menuInput();

                switch (userInput) {
                    case 1 : uiManager.printBankInfo(selectedBank);
                        break;
                    case 2 : selectedBank.printClients();
                        break;
                    case 3 : selectedBank.manageClient();
                        break;
                    case 0 :
                        System.out.println("Going back to main menu..");
                        uiManager.bankManagerMenu();
                        break;
                }
            }
        } else {
            System.out.println("Wrong ID entered");
        }
        }
    }

// === Things to implement === //

// 1 - List Banks
// 2 - Create Bank
// 3 - Delete Bank
// 4 - Select And Manage One Bank