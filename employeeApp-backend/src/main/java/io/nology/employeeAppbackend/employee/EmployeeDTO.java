package io.nology.employeeAppbackend.employee;

import javax.validation.constraints.NotBlank;

public class EmployeeDTO {
    
// Employee personal information
    @NotBlank
    private String firstName;

    private String middleName;

    @NotBlank
    private String lastName;

    // employee contact details
    @NotBlank
    private String emailId;

    @NotBlank
    private String mobileNum;

    @NotBlank
    private String address;

// Employee status

    @NotBlank
    private String startDate;

    @NotBlank
    private String finishedDate; 


    public EmployeeDTO( String firstName, String lastName, String emailId) {
        this.firstName = firstName;
        this.lastName =  lastName;
        this.emailId = emailId;
    }

    // Getters and setters

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
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


};

