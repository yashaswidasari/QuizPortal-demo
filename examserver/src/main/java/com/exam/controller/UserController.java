package com.exam.controller;

import java.util.HashSet;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.exam.entity.Role;
import com.exam.entity.User;
import com.exam.entity.userRole;
import com.exam.services.userService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {


	@Autowired
	userService userservice;

	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;

	@PostMapping("/")
	public User createUser(@RequestBody User user) throws Exception {
		
		user.setProfile("default.png");

		Set<userRole> roles = new HashSet<>();

		Role role = new Role(45L, "User");

		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));



		userRole userRoles = new userRole();
		userRoles.setRoles(role);
		userRoles.setUser(user);

		roles.add(userRoles);

		User local = this.userservice.createUser(user, roles);

		return local;

	}
	
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String userName) {
		
		User local=this.userservice.getUser(userName);
		System.out.print(local);
		return local;
	}
	
	//delete
	@DeleteMapping("/{Id}")
	public void deleteUser(@PathVariable("Id") long id) {
		this.userservice.deleteUser(id);
	}


	//update
	@PostMapping("/setDefault/{username}")
	public User setDeafult(@PathVariable("username") String username) {
		User user=this.userservice.update(username);

		System.out.println(user);
		return user;
	}

	@PutMapping("/role")
	public void createRole(@RequestBody Role role) throws Exception {
		this.userservice.saveRole(role);
	}

}
