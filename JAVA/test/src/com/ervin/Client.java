package com.ervin;

public class Client {
    private String name;

    public Client nextClient;
    public Account firstAccount;

    public Client(String name) {
        this.nextClient = null;
        this.name = name;
        this.firstAccount = null;
    }

    // Check if client has an account
    public boolean hasAccounts() {
        return this.firstAccount != null;
    }

    // Print Accounts
    public void printAccounts() {
        if(this.hasAccounts()) {
            Account current = this.firstAccount;
            System.out.println("----- Account ID: " + current.getAccID() + " -----");
            System.out.println("SOLD: " + current.getSold());
            while(current.hasNext()) {
                current = current.getNextAccount();
                System.out.println("----- Account ID: " + current.getAccID() + " -----");
                System.out.println("SOLD: " + current.getSold());
            }
        } else {
            System.out.println("This client has no accounts registered yet..");
        }
    }

    // Check if another client exitst efter this one
    public boolean hasNext() {
        return this.nextClient != null;
    }

    public String getName() {
        return name;
    }

    public Client getNextClient() {
        return nextClient;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNextClient(Client nextClient) {
        this.nextClient = nextClient;
    }
}
