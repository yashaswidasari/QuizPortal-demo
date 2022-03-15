package com.exam.controller;


import com.exam.MySecurityConfig.JwtUtil;
import com.exam.entity.JwtRequest;
import com.exam.entity.JwtResponse;
import com.exam.entity.User;
import com.exam.services.impl.userServiceDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;


@RestController
@CrossOrigin("*")
public class AuthenticateController {


    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private userServiceDetailsImpl userServiceDetails;



    @Autowired
    private JwtUtil jwtUtil;

    //generate
    @PostMapping("/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        try {
            authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
        }catch (UsernameNotFoundException e){
            e.printStackTrace();
            throw new Exception("User not found");
        }

    //authenticate
        UserDetails userDetails=this.userServiceDetails.loadUserByUsername(jwtRequest.getUsername());
        String token= this.jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new JwtResponse(token));




    }




    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
        }catch (DisabledException e){
            throw new Exception("User Disable"+e.getMessage());
        }
        catch (BadCredentialsException e){
            throw new Exception("Invalid Credentials "+e.getMessage());
        }

    }

//returns details of user that is currently logged in using "principal" interface.
    @GetMapping("/current-user")
    public User getUser(Principal principal){
        User local = (User) this.userServiceDetails.loadUserByUsername(principal.getName());
        return local;
    }
}
