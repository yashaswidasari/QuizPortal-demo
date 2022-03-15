package com.exam.services;



import java.util.Set;

import com.exam.entity.Role;
import com.exam.entity.User;
import com.exam.entity.userRole;

public interface userService {

	// Create User
	public User createUser(User user, Set<userRole> userRoles) throws Exception;
	
	//get User
	public User getUser(String username);
	
	//delete User
	public void deleteUser(long id);
	
	//update User
	public User update(String username);

	//save a role api
	public  void saveRole(Role role);


	
}
