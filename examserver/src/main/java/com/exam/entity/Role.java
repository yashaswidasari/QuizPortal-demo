package com.exam.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name ="roles")
public class Role {
	
	@Id
	private long roldeId;


	private String roleName;
	
	@OneToMany(cascade = CascadeType.ALL,fetch= FetchType.LAZY,mappedBy="roles")
	@JsonIgnore
	private Set<userRole> userRoles = new HashSet<>();
	
	public Role(){
		
	}
	
	
	
	public Set<userRole> getUserRoles() {
		return userRoles;
	}



	public void setUserRoles(Set<userRole> userRoles) {
		this.userRoles = userRoles;
	}



	public Role(long roldeId, String roleName) {
		super();
		this.roldeId = roldeId;
		this.roleName = roleName;
	}
	

	
	public long getRoldeId() {
		return roldeId;
	}

	public void setRoldeId(long roldeId) {
		this.roldeId = roldeId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	
	
	
}
