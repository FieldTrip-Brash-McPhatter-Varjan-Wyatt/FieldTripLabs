package com.example.fieldtriplabscapstone.controllers;

import com.example.fieldtriplabscapstone.models.User;
import com.example.fieldtriplabscapstone.repositories.UserRepository;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {
    private final UserRepository userDao;
    private final PasswordEncoder passwordEncoder;

    public UserController(UserRepository userDao, PasswordEncoder passwordEncoder) {
        this.userDao = userDao;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("/sign-up")
    public String showSignupForm(Model model){
        model.addAttribute("user", new User());
        return "/users/sign-up";
    }

    @PostMapping("/sign-up")
    public String saveUser(@ModelAttribute User user){
        if (userDao.findByUsername(user.getUsername()) == null){
            String hash = passwordEncoder.encode(user.getPassword());
            user.setPassword(hash);
            userDao.save(user);
            return "redirect:/login";
        } else {
            return "redirect:/sign-up";
        }
    }

    @GetMapping("/profile")
    public String showProfile(){
        User loggedInUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (loggedInUser != null) {
            return "/userProfile";
        } else {
            return "redirect:/login";
        }
    }

    @PostMapping("/login")
    public String showUserProfile(){
            return "redirect:/profile";
    }
}
