package com.exam;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.exam.entity.Role;
import com.exam.entity.User;
import com.exam.entity.userRole;
import com.exam.services.userService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class ExamserverApplication implements CommandLineRunner {

	@Autowired
	private userService userSer;

	@Autowired
	private BCryptPasswordEncoder cryptPasswordEncoder;

	public static void main(String[] args) {

		SpringApplication.run(ExamserverApplication.class, args);

	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("Started running");


		
//
//		User test = new User();
//
//
//
//		test.setFirstName("Test");
//		test.setLastName("test");
//		test.setUsername("test");
//		test.setPassword(this.cryptPasswordEncoder.encode("test"));
//		test.setEmail("test@gmail.com");
//		test.setProfile("default.png");
//		test.setPhone("0");
//
//		Role role1 = new Role();
//		role1.setRoldeId(44L);
//		role1.setRoleName("ADMIN");
//
//		Set<userRole> userRoleSet = new HashSet<>();
//
//		userRole userRoles = new userRole();
//
//		userRoles.setRoles(role1);
//		userRoles.setUser(test);
//
//		userRoleSet.add(userRoles);
//
//		test.getUserRoles().addAll(userRoleSet);
//
//		User user = this.userSer.createUser(test, userRoleSet);
//
//		System.out.print(user.getId());


	}

}
