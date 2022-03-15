package com.exam.services.impl;


import java.util.Set;

import com.exam.entity.Role;
import com.exam.helper.UserFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
//import org.springframework.stereotype.Service;

import com.exam.entity.User;
import com.exam.entity.userRole;
import com.exam.repo.RoleRepository;
import com.exam.repo.UserRepository;
import com.exam.services.userService;

@Component
public class userServiceImpl implements userService {

	@Autowired
	UserRepository userRepo;

	@Autowired
	RoleRepository roleRepo;

	// Creating User
	@Override
	public User createUser(User user, Set<userRole> userRoles) throws Exception {

		User local = userRepo.findByUsername(user.getUsername());
		User local1=(userRepo.findByEmail(user.getEmail()));
		//System.out.print(local1.getEmail());
		if(local1!=null) {
			System.out.print("Email already exists");
			throw new Exception("Email already exists !!");
		}
		if(userRepo.findByPhone(user.getPhone())!=null ) {
			System.out.print("phone already exists");
			throw new Exception("phone already exists !!");
		}

		
		if (local == null) {
			for (userRole ur : userRoles) {
				roleRepo.save(ur.getRoles());
			}

			user.getUserRoles().addAll(userRoles);

			local = this.userRepo.save(user);

		} else {
			System.out.println("User already exits !!");
			throw new UserFoundException();
		}

		return local;
	}

	@Override
	public User getUser(String username) {
		
		User local = this.userRepo.findByUsername(username);
		return local;
	}

	@Override
	public void deleteUser(long id) {
		this.userRepo.deleteById(id);
		
	}

	@Override
	public User update(String username) {
		User local = this.userRepo.findByUsername(username);
		if(local.getPhone()==null) {
			local.setPhone("99999999");
		}
		userRepo.save(local);
		return local;
	}

	@Override
	public void saveRole(Role role) {

		System.out.println(role.getRoldeId());
		System.out.println(roleRepo.findById(role.getRoldeId())+"test");
		if(roleRepo.findByRoldeId(role.getRoldeId())==null){
			roleRepo.save(role);
		}
	}


}
