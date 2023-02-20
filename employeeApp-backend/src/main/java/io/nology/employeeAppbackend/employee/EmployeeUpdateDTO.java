package io.nology.employeeAppbackend.employee;

// validation imports

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

// spring framework imports
import org.springframework.lang.Nullable;

public class EmployeeUpdateDTO {
    
// Employee personal information
    @Nullable
    String firstName;

    @Nullable
    String middleName;

    @Nullable
    String lastName;

    // employee contact details
    @Nullable
    String emailId;

    @Nullable
    String mobileNum;

    @Nullable
    String address;

// Employee status

    @Nullable
    String contractType;

    @Nullable
    String startDate;

    @Nullable
    String finishedDate; 

    @Nullable
    String workType;

    @Nullable
    @Min(8)
    @Max(45)
    String workHours;

    public EmployeeUpdateDTO() {
        
    }

    public EmployeeUpdateDTO( 
        String firstName, 
        String middleName, 
        String lastName, 
        String emailId, 
        String mobileNum, 
        String address, 
        String contractType, 
        String startDate, 
        String finishedDate, 
        String workType, 
        String workHours) {
            this.firstName = firstName;
            this.middleName = middleName;
            this.lastName =  lastName;
            this.emailId = emailId;
            this.mobileNum = mobileNum;
            this.address = address;
            this.contractType = contractType;
            this.startDate = startDate;
            this.finishedDate = finishedDate;
            this.workType = workType;
            this.workHours = workHours;

    }

    // Getters and setters

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

     public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getMobileNum() {
        return mobileNum;
    }

    public void setMobileNum(String mobileNum) {
        this.mobileNum = mobileNum;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContractType() {
        return contractType;
    }

    public void setContractType(String contractType) {
        this.contractType = contractType;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getFinishedDate() {
        return finishedDate;
    }

    public void setFinishedDate(String finishedDate) {
        this.finishedDate = finishedDate;
    }

    public String getWorkType() {
        return workType;
    }

    public void setWorkType(String workType) {
        this.workType = workType;
    }

    public String getWorkHours() {
        return workHours;
    }

    public void setWorkHours(String workHours) {
        this.workHours = workHours;
    }

};

