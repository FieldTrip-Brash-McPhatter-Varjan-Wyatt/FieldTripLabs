package com.example.fieldtriplabscapstone.services;

import com.example.fieldtriplabscapstone.models.User;
import org.springframework.security.core.context.SecurityContextHolder;

public class Authorization {
    public static User getLoggedInUser() {
        User loggedInUser = new User();
        Object thing = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        if(thing instanceof String || ((User) thing).getId() == 0) {
            loggedInUser.setUsername("You are not logged in");
            return loggedInUser;
        }
        loggedInUser = (User) thing;
        return loggedInUser;
    }
}
