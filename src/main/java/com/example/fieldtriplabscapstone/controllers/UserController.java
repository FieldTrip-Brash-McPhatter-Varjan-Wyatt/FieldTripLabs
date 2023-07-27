package com.example.fieldtriplabscapstone.controllers;

import com.example.fieldtriplabscapstone.models.User;
import com.example.fieldtriplabscapstone.repositories.UserRepository;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@Controller
public class UserController {
    private final UserRepository userDao;
    private final PasswordEncoder passwordEncoder;

    public UserController(UserRepository userDao, PasswordEncoder passwordEncoder) {
        this.userDao = userDao;
        this.passwordEncoder = passwordEncoder;
    }

    private User getCurrentUser() {
        User loggedInUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<User> currentUser = userDao.findById(loggedInUser.getId());
        return currentUser.get();
    }

    @GetMapping("/sign-up")
    public String showSignupForm(Model model) {
        model.addAttribute("user", new User());
        return "/users/sign-up";
    }

    @PostMapping("/sign-up")
    public String saveUser(@Valid User user, BindingResult result) {
        if (result.hasErrors()){
            return "/users/sign-up";
        }
        String hash = passwordEncoder.encode(user.getPassword());
        user.setPassword(hash);
        userDao.save(user);
        return "redirect:/login";
//        if (userDao.findByUsername(user.getUsername()) == null) {
//            String hash = passwordEncoder.encode(user.getPassword());
//            user.setPassword(hash);
//            userDao.save(user);
//            return "redirect:/login";
//        } else {
//            return "redirect:/sign-up";
//        }
    }

    @GetMapping("/profile")
    public String showProfile(Model model) {
        User user = getCurrentUser();
        model.addAttribute("user", user);
        return "users/userProfile";
    }

    @GetMapping("/profile/edit")
    public String editProfile(Model model) {
        User currentUser = getCurrentUser();
        model.addAttribute("user", currentUser);
        return "users/edit-profile";
    }

    @PostMapping("/profile/edit")

    public String saveEdits(@RequestParam(name = "username") String userName,
                            @RequestParam(name = "firstname") String firstName,
                            @RequestParam(name = "lastname") String lastName,
                            @RequestParam(name = "email") String email,
                            @RequestParam(name = "imageUrl") String imageUrl) {
        System.out.println(userName + firstName);
        User currentUser = getCurrentUser();
        currentUser.setUsername(userName);
        currentUser.setFirstName(firstName);
        currentUser.setLastName(lastName);
        currentUser.setEmail(email);
        currentUser.setImage(imageUrl);
        userDao.save(currentUser);
        return "redirect:/profile";

    }

    @GetMapping("/profile/password")
    public String changePassword() {
        User currentUser = getCurrentUser();

        return "/users/newpassword";
    }

    @PostMapping("/profile/password")
    public String saveNewPassword(@RequestParam(name = "oldpassword") String oldPassword, @RequestParam(name = "newpassword") String newPassword) {
        User currentUser = getCurrentUser();
        if (passwordEncoder.matches(oldPassword, currentUser.getPassword())) {
            String hashed = passwordEncoder.encode(newPassword);
            currentUser.setPassword(hashed);
            userDao.save(currentUser);
            return "redirect:/profile";
        } else {
            return "redirect:/profile/password";
        }
    }
}

