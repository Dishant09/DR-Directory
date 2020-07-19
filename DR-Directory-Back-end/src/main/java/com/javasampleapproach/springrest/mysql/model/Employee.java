package com.javasampleapproach.springrest.mysql.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "Employee")
@GenericGenerator(name="idGen",strategy="increment")
public class Employee {
 
  @Id
  @Column(name = "ENo")
  @GeneratedValue(generator="idGen")
  private long employeeno;
 
  @Column(name = "Employee_Name")
  private String employeename;

  @Column(name = "Age")
  private Integer age; 
	
  @Column(name = "EMail_Id")
  private String emailid;
	
  @Column(name = "Password")
  private String password;

  @Column(name = "Address")
  private String address;
	
  @Column(name = "Contact_Number")
  private long contactnumber;
	
  @Column(name = "Unit")
  private String unit;

  @Column(name = "Designation")
  private String designation;

  @Column(name = "Current_City")
  private String currentcity;
	
  @Column(name = "Experience")
  private Float experience;
 
  public Employee() {
  }
 
  public Employee(String employeename, Integer age,String emailid, String password,String address,long contactnumber,String unit,String designation,String currentcity,Float experience) {
    this.employeename = employeename;
    this.age = age;
    this.emailid=emailid;
    this.password=password;
    this.address=address;
    this.contactnumber=contactnumber;
    this.unit=unit;
    this.designation=designation;
    this.currentcity=currentcity;
    this.experience=experience;

  }

	public long getEmployeeno() {
		return employeeno;
	}
	
	public void setEmployeeno(long employeeno) {
		this.employeeno = employeeno;
	}
	
	public String getEmployeename() {
		return employeename;
	}
	
	public void setEmployeename(String employeename) {
		this.employeename = employeename;
	}
	
	public Integer getAge() {
		return age;
	}
	
	public void setAge(Integer age) {
		this.age = age;
	}
	
	public String getEmailid() {
		return emailid;
	}
	
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getAddress() {
		return address;
	}
	
	public void setAddress(String address) {
		this.address = address;
	}
	
	public long getContactnumber() {
		return contactnumber;
	}
	
	public void setContactnumber(long contactnumber) {
		this.contactnumber = contactnumber;
	}
	
	public String getUnit() {
		return unit;
	}
	
	public void setUnit(String unit) {
		this.unit = unit;
	}
	
	public String getDesignation() {
		return designation;
	}
	
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	
	public String getCurrentcity() {
		return currentcity;
	}
	
	public void setCurrentcity(String currentcity) {
		this.currentcity = currentcity;
	}
	
	public Float getExperience() {
		return experience;
	}
	
	public void setExperience(Float experience) {
		this.experience = experience;
	}
 
 /* public long getEmployeeNo() {
		return employeeno;
  }
  public void setEmployeeNo(long employeeno) {
	this.employeeno = employeeno;
  }
	
	public String getEmployeename() {
		System.out.println(employeename);
		return this.employeename;
	}
	public void setEmployeename(String employeename) {
		this.employeename = employeename;
	}
	
	public Integer getAge() {
		return this.age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	
	public String getEMailId() {
		return this.emailid;
	}
	public void setEMailId(String emailId) {
		this.emailId = emailId;
	}
	
	public String getPassword() {
		return this.password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getAddress() {
		return this.address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	public long getContactnumber() {
		return this.contactnumber;
	}
	public void setContactnumber(long contactnumber) {
		this.contactnumber = contactnumber;
	}
	
	public String getUnit() {
		return this.unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	
	public String getDesignation() {
		return this.designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	
	public String getCurrentcity() {
		return this.currentcity;
	}
	public void setCurrentcity(String currentcity) {
		this.currentcity = currentcity;
	}
	
	public Float getExperience() {
		return this.experience;
	}
	public void setExperience(Float experience) {
		this.experience = experience;
	}*/
 
}