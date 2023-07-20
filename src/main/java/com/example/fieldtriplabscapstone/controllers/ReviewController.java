package com.example.fieldtriplabscapstone.controllers;

import ch.qos.logback.core.model.Model;
import com.example.fieldtriplabscapstone.models.Review;
import com.example.fieldtriplabscapstone.models.User;
import com.example.fieldtriplabscapstone.repositories.ReviewRepository;
import com.example.fieldtriplabscapstone.repositories.UserRepository;
import com.example.fieldtriplabscapstone.services.Authorization;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor

@Controller
@RequestMapping("/reviews")

public class ReviewController {
    private ReviewRepository reviewDao;

    private UserRepository userDao;


    @GetMapping("")
    public String reviews(Model model){
        User loggedInUser = Authorization.getLoggedInUser();
        model.addAttribute("loggedInUser", loggedInUser);

        List<Review> reviews = reviewDao.findAll();

        model.addAttribute("reviews", reviews);
        return "/reviews/home_page";
    }

    @GetMapping("/{id}")
    public String showSinglePost(@PathVariable Long id, Model model) {
        User loggedInUser = Authorization.getLoggedInUser();
        model.addAttribute("loggedInUser", loggedInUser);

        Optional<Review>optionalReview = reviewDao.findById(id);
        if(optionalReview.isEmpty()) {
            return "home_page";
        }

        model.addAttribute("review", optionalReview.get());
        return "/reviews";
    }



}