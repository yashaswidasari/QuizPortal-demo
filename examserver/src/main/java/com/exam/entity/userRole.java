package com.exam.entity;

import javax.persistence.*;

@Entity
public class userRole {
	
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private long userRoleId;

@ManyToOne(fetch = FetchType.EAGER)
private User user;

@ManyToOne(fetch= FetchType.EAGER)
private Role roles; 

public userRole() {
	
}

public long getUserRoleId() {
	return userRoleId;
}

public void setUserRoleId(long userRoleId) {
	this.userRoleId = userRoleId;
}

public User getUser() {
	return user;
}

public void setUser(User user) {
	this.user = user;
}

public Role getRoles() {
	return roles;
}

public void setRoles(Role roles) {
	this.roles = roles;
}


}
