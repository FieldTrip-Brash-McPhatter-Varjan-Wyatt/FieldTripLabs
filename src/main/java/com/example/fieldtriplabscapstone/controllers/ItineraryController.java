package com.example.fieldtriplabscapstone.controllers;

import com.example.fieldtriplabscapstone.models.Itinerary;
import com.example.fieldtriplabscapstone.models.User;
import com.example.fieldtriplabscapstone.repositories.ItineraryRepository;
import com.example.fieldtriplabscapstone.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Optional;
@AllArgsConstructor
@Controller
public class ItineraryController {
    ItineraryRepository itineraryDao;
    UserRepository userDao;

    @GetMapping("/itinerary")
    public String showItinerary(){
        return "itinerary/index";
    }

    @GetMapping("/itinerary/{id}/edit")
    public String showItineraryEdit(@ModelAttribute Itinerary itinerary, @PathVariable Long id){
        Optional<Itinerary> optionalItinerary = itineraryDao.findById(id);
        User loggedIn = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (optionalItinerary.isEmpty()){
            return "error";
        }
        if (loggedIn.getId() != optionalItinerary.get().getUser().getId()){
            return "error";
        }
        return "itinerary/edit";
    }


}
