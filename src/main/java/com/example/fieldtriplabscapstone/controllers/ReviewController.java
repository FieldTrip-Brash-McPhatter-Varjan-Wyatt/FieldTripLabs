package com.example.fieldtriplabscapstone.controllers;


import com.example.fieldtriplabscapstone.models.Destination;
import com.example.fieldtriplabscapstone.models.Review;
import com.example.fieldtriplabscapstone.models.User;
import com.example.fieldtriplabscapstone.repositories.DestinationRepository;
import com.example.fieldtriplabscapstone.repositories.ReviewRepository;
import com.example.fieldtriplabscapstone.repositories.UserRepository;
import com.example.fieldtriplabscapstone.services.Authorization;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@AllArgsConstructor

@Controller


public class ReviewController {
    private ReviewRepository reviewDao;

    private UserRepository userDao;

    private DestinationRepository destDao;


    @GetMapping("reviews")
    public String reviews(@RequestParam(name = "destinationId") Long destinationId, Model model) {
        Optional<Destination> optionalDestination = destDao.findById(destinationId);
        if (optionalDestination.isEmpty()) {
            System.out.println("Your destination id " + destinationId + " not found");
            return "index";
        }
//        Destination destination = optionalDestination.get();
        User loggedInUser = Authorization.getLoggedInUser();
        model.addAttribute("loggedInUser", loggedInUser);
        model.addAttribute("destinationId", destinationId);


        List<Review> reviews = reviewDao.findAll();

        model.addAttribute("reviews", reviews);
        model.addAttribute("newReview", new Review());
        return "reviews/index";
    }


    @PostMapping("reviews/")
    public String createSinglePost(@ModelAttribute Destination destination,
                                   @RequestParam(name = "placeId") String placeId,
                                   @RequestParam(name = "PhotoUrl") String photoUrl,
                                   @RequestParam(name = "name") String name,
                                   @RequestParam(name = "address") String address) {
        destination.setName(name);
        destination.setPlaceId(placeId);
        destination.setPhotoUrl(photoUrl);
        destination.setAddress(address);
        destDao.save(destination);
        return "redirect: reviews/{id}";
    }

    @GetMapping("reviews/{id}")
    public String showSinglePost(@PathVariable String id, Model model) {
        List<Destination> destinations = destDao.findByPlaceId(id);
        List<Review> reviews = new ArrayList<>();
        for (Destination destination : destinations) {
            reviews.addAll(destination.getReview());
        }

        Collections.reverse(reviews);
        model.addAttribute("reviews", reviews);
        model.addAttribute("destinations", destinations);
        return "/reviews/index";
    }


    @PostMapping("reviews/create")
    public String doReviews(@ModelAttribute Review review,
                            @RequestParam(name = "placeId") String placeId,
                            @RequestParam(name = "content") String content,
                            @RequestParam(name = "rating") int rating) {

        User loggedInUser = Authorization.getLoggedInUser();
        if (loggedInUser.getId() == 0) {
            return "redirect:/login";
        }

        review.setUser(loggedInUser);
        review.setRating(rating);
        review.setContent(content);

        // Set the destination's placeId directly in the review object
        Destination destination = new Destination();
        destination.setPlaceId(placeId);
        review.setDestination(destination);
        destDao.save(destination);

        reviewDao.save(review);

        return "redirect:/reviews/" + placeId;
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