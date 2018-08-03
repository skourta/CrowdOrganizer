package com.akramlebcir.mac.opencvtest;

public class Drone {
    private String name;
    private int battery;
    private Boolean status;
    private Position position;
    private int number;

    public Drone(String name, int battery, Boolean status, Position position, int number) {
        this.name = name;
        this.battery = battery;
        this.status = status;
        this.position = position;
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getBattery() {
        return battery;
    }

    public void setBattery(int battery) {
        this.battery = battery;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }
}
