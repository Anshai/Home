package com.ervin;

public class Bank {
    private String bankName;
    private int numOfClients;
    private Client firstClient;
    private int ID;

    private Bank nextBank;

    public Bank(String name, int id) {
        this.firstClient = null;
        this.nextBank = null;
        this.bankName = name;
        this.numOfClients = 0;
        this.ID = id;
    }

    // Check if the bank has another after itself
    public boolean hasNext() {
        return this.nextBank != null;
    }

    // Check if the Bank has any clients
    public boolean hasClients() {
        return firstClient != null;
    }

    // Add first Client
    public void addFirstClient(Client client) {
        this.firstClient = client;
    }

    // Print the list of the clients
    public void printClients() {
        if(this.hasClients()){
            Client current = this.firstClient;
            System.out.println("Client name: " + current.getName());
            while(current.hasNext()) {
                current = current.getNextClient();
                System.out.println("CLient name: " + current.getName());
            }
        } else {
            System.out.println("This bank has no clients yet..");
        }
    }

    // Select and manage one client
    public void manageClient() {
        System.out.println("\n===== " + this.getBankName() + " Client Manager =====\n");
    }

    // === GET METHODS === //

    // Get bank Name
    public String getBankName() {
        return this.bankName;
    }

    // Get next pointer
    public Bank getNext() {
        return this.nextBank;
    }

    // Get ID
    public int getID() {
        return this.ID;
    }

    // Get number of clients
    public int getNumOfClients() {
        return this.numOfClients;
    }

    // === SET METHODS === //

    // Set next pointer
    public void setNext(Bank newNext) {
        this.nextBank = newNext;
    }

    // Set ID
    public void setID(int id) {
        this.ID = id;
    }
}
