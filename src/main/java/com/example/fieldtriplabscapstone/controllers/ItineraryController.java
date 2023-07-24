package com.example.fieldtriplabscapstone.controllers;

import com.example.fieldtriplabscapstone.models.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ItineraryController {
    @GetMapping("/itinerary")
    public String showItinerary(){
        return "itinerary/index";
    }


}
