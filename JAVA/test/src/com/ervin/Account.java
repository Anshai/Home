package com.ervin;

public class Account {
    private String accID;
    private String moneda;
    private int sold;

    private Account nextAccount;

    public Account(String moneda, String id) {
        this.accID = id;
        this.moneda = moneda;
        this.sold = 0;
        this.nextAccount = null;
    }

    // Add money to the account
    // Returns true if added
    // false if the not (woring ammount // idk)
    public boolean addMoney(int ammount) {
        if(ammount > 0 && ammount <  10001){
            this.sold += ammount;
            return true;
        } else {
            return false;
        }
    }

    // Withdraw money
    public boolean withdrawMoney(int ammount) {
        if(ammount > 0 && ammount < 10001) {
            this.sold -= ammount;
            return true;
        } else {
            return false;
        }
    }

    // Check if another account exists after this
    public boolean hasNext() {
        return this.nextAccount != null;
    }

    public String getMoneda() {
        return moneda;
    }

    public int getSold() {
        return sold;
    }

    public String getAccID() {
        return this.accID;
    }

    public void setMoneda(String moneda) {
        this.moneda = moneda;
    }

    public void setSold(int sold) {
        this.sold = sold;
    }

    public Account getNextAccount() {
        return this.nextAccount;
    }
}
