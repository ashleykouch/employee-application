package io.nology.employeeAppbackend.employee;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {

// Employee personal information
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "first_name")
    private String firstName;

     @Column(name = "middle_name", nullable=true)
    private String middleName;

     @Column(name = "last_name")
    private String lastName;

// Employee contact details
    @Column (name = "email_id")
    private String emailId;

    @Column (name = "mobile_num")
    private String mobileNum;

    @Column (name = "address")
    private String address;

// Employee status

    @Column (name = "start_date")
    private String startDate;

    @Column (name = "finished_date")
    private String finishedDate; 


    public Employee() {

        }

    public Employee( String firstName, String lastName, String emailId) {
        this.firstName = firstName;
        this.lastName =  lastName;
        this.emailId = emailId;
    }

    // getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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


