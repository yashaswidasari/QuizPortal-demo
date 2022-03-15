package com.exam.repo;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByUsername(String username);
	
	public User findByEmail(String email);
	
	public User findByPhone(String phone);
 

	public void save(Optional<User> local);
	
	

}
