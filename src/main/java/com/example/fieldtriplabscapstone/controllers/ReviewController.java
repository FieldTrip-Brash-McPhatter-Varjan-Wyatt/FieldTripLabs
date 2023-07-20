package com.example.fieldtriplabscapstone.controllers;


import com.example.fieldtriplabscapstone.models.Destination;
import com.example.fieldtriplabscapstone.models.Review;
import com.example.fieldtriplabscapstone.models.User;
import com.example.fieldtriplabscapstone.repositories.DestinationRepository;
import com.example.fieldtriplabscapstone.repositories.ReviewRepository;
import com.example.fieldtriplabscapstone.repositories.UserRepository;
import com.example.fieldtriplabscapstone.services.Authorization;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor

@Controller
@RequestMapping("/reviews")

public class ReviewController {
    private ReviewRepository reviewDao;

    private UserRepository userDao;

    private DestinationRepository destDao;


    @GetMapping("")
    public String reviews(@RequestParam(name="destinationId") Long destinationId, Model model){
        Optional<Destination>optionalDestination = destDao.findById(destinationId);
        if(optionalDestination.isEmpty()) {
            System.out.println("Your destination id " + destinationId + " not found");
            return "home_page";
        }
//        Destination destination = optionalDestination.get();
        User loggedInUser = Authorization.getLoggedInUser();
        model.addAttribute("loggedInUser", loggedInUser);
        model.addAttribute("destinationId", destinationId);

        List<Review> reviews = reviewDao.findAll();

        model.addAttribute("reviews", reviews);
        model.addAttribute("newReview", new Review());
        return "/reviews/index";
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
        return "/reviews/show";
    }

    @GetMapping("/create")
    public String showReviews(Model model) {
        User loggedInUser = Authorization.getLoggedInUser();
        if(loggedInUser.getId() == 0) {
            return "redirect:/login";
        }
        model.addAttribute("loggedInUser", loggedInUser);

        model.addAttribute("newReview", new Review());
        return "/Reviews/create";
    }

    @PostMapping("/create")
    public String doReviews(@ModelAttribute Review  review, @RequestParam(name="destinationId") Long destinationId) {
        User loggedInUser = Authorization.getLoggedInUser();
        if(loggedInUser.getId() == 0) {
            return "redirect:/login";
        }
        review.setUser(loggedInUser);
        Optional<Destination>optionalDestination = destDao.findById(destinationId);
        if(optionalDestination.isEmpty()) {
            System.out.println("Your destination id " + destinationId + " not found");
            return "home_page";
        }
        Destination destination = optionalDestination.get();
        review.setDestination(destination);
        System.out.println(review);
        reviewDao.save(review);


        return "redirect:/reviews?destinationId=" + destinationId;
    }

    @GetMapping("/{id}edit")
    public String showEdit(@PathVariable Long id, Model model) {
        User loggedInUser = Authorization.getLoggedInUser();
        model.addAttribute("loggedInUser", loggedInUser);

        Review reviewToEdit = reviewDao.getReferenceById(id);
        model.addAttribute("newReview", reviewToEdit);
        return "/reviews";
    }


}