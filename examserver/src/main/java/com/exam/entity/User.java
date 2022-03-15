package com.exam.entity;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.exam.entity.exam.Result;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name = "users")
public class User  implements UserDetails{


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String username;
	private String firstName;
	private String lastName;
	private String password;
	private String email;

	private String phone;
	private boolean enable = true;

	private String profile;

	@OneToMany(cascade = CascadeType.ALL,fetch= FetchType.EAGER,mappedBy="user")
	@JsonIgnore
	private Set<userRole> userRoles = new HashSet<>();

	@OneToMany(cascade = CascadeType.ALL,fetch= FetchType.LAZY,mappedBy="user")
	@JsonIgnore
	private Set<Result> resultSet = new HashSet<>();




	public User() {

	}



	public User(Long id, String username, String firstName, String lastName, String password, String email,
			String phone, boolean enable, String profile) {
		super();
		this.id = id;
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.email = email;
		this.phone = phone;
		this.enable = enable;
		this.profile = profile;
	}



	public Set<userRole> getUserRoles() {
		return userRoles;
	}

	public void setUserRoles(Set<userRole> userRoles) {
		this.userRoles = userRoles;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return this.enable;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Set<Authority> set= new HashSet<>();

		this.userRoles.forEach(userRole -> {
			set.add(new Authority(userRole.getRoles().getRoleName()));
		});

		return set;
	}

	public void setUsername(String username) {
		this.username = username;
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



	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public boolean isEnable() {
		return enable;
	}

	public void setEnable(boolean enable) {
		this.enable = enable;
	}

	
	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

	public String toString() {
		return ("Name:" + this.firstName + " " + this.lastName);

	}

}
