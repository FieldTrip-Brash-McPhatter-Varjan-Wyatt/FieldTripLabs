package com.example.fieldtriplabscapstone.controllers;

import com.example.fieldtriplabscapstone.models.Itinerary;
import com.example.fieldtriplabscapstone.repositories.ItineraryRepository;
import com.example.fieldtriplabscapstone.repositories.UserRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ItineraryController {
    UserRepository userDao;
    ItineraryRepository itineraryDao;
    @GetMapping("/itinerary")
    public String showItinerary(){
        return "itinerary/index";
    }

    @GetMapping("/itinerary/{id}/edit")
    public String editItinerary(@PathVariable Long id, @ModelAttribute Itinerary itinerary){

//        Optional<Itinerary> optionalItinerary = itineraryDao.findById(id);
//        if (optionalItinerary.isEmpty()){
//            return "error";
//        }
//        Optional<User> optionalUser = userDao.findById(itinerary.getUser().getId());
//        if (optionalUser.isEmpty()){
//            return "error";
//        }
//        if (optionalUser.get().getId() != itinerary.getId()){
//            return "error";
//        }
        return "itinerary/show";
    }



}
