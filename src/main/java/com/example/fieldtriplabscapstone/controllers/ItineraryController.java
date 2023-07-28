package com.example.fieldtriplabscapstone.controllers;

import com.example.fieldtriplabscapstone.models.*;

import com.example.fieldtriplabscapstone.repositories.*;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@AllArgsConstructor
@Controller
public class ItineraryController {
    ItineraryRepository itineraryDao;
    UserRepository userDao;
    ChecklistRepository checklistDao;

    DestinationRepository destinationDao;
    ChecklistItemsRepository checklistItemsDao;

    @GetMapping("/itinerary")
    public String showItinerary(Model model){
        Itinerary itinerary = new Itinerary();
        model.addAttribute("itinerary", itinerary);
        return "itinerary/index";
    }


    @PostMapping("itinerary/create")
    public String createItinerary(@ModelAttribute Itinerary itinerary){
        User loggedInUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(loggedInUser == null){
            return "redirect:/login";
        }
        itinerary.setUser(loggedInUser);
//        resets checklist item to checklist that is in itinerary
        for (ChecklistItems checklistItem : itinerary.getChecklist().getChecklistItems()) {
            checklistItem.setChecklist(itinerary.getChecklist());
        }
//        resets checklist to itinerary
        itinerary.getChecklist().setItinerary(itinerary);
//        loop through destinations and set to itinerary
        for (Destination destination : itinerary.getDestinations()){
            destination.setItinerary(itinerary);
        }
        System.out.println(itinerary);
        itineraryDao.save(itinerary);
        return "redirect:/itinerary";

    }

@GetMapping("itinerary/{id}/edit")
    public String showEdit(@PathVariable Long id, Model model){
    User loggedInUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    if(loggedInUser == null){
        return "redirect:/login";
    }
    model.addAttribute("loggedInUser", loggedInUser);
    Optional<Itinerary> optionalItinerary = itineraryDao.findById(id);
    if (optionalItinerary.isEmpty()){
        return "redirect:itinerary/index";
    }

    Itinerary itinerary = optionalItinerary.get();
    model.addAttribute("itinerary", itinerary);
    return "itinerary/edit";

}


}
