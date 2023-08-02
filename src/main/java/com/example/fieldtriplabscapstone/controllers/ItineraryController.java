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
    public String showItinerary(Model model) {
        Itinerary itinerary = new Itinerary();
        model.addAttribute("itinerary", itinerary);
        return "itinerary/index";
    }


    @PostMapping("itinerary/create")
    public String createItinerary(@ModelAttribute Itinerary itinerary) {
        User loggedInUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (loggedInUser == null) {
            return "redirect:/login";
        }
        itinerary.setUser(loggedInUser);
        //        resets checklist to itinerary
        itinerary.getChecklist().setItinerary(itinerary);
//        resets checklist item to checklist that is in itinerary
        for (ChecklistItems checklistItem : itinerary.getChecklist().getChecklistItems()) {
            System.out.println(checklistItem);
            checklistItem.setChecklist(itinerary.getChecklist());
        }
//        loop through destinations and set to itinerary
        for (Destination destination : itinerary.getDestinations()) {
            destination.setItinerary(itinerary);
        }
        System.out.println(itinerary.getChecklist().getChecklistItems());
        itineraryDao.save(itinerary);
        return "redirect:/itinerary";

    }

    @GetMapping("itinerary/{id}/edit")
    public String showEdit(@PathVariable Long id, Model model) {
        User loggedInUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (loggedInUser == null) {
            return "redirect:/login";
        }
        model.addAttribute("loggedInUser", loggedInUser);


        Optional<Itinerary> optionalItinerary = itineraryDao.findById(id);
        if (optionalItinerary.isEmpty()) {
            return "redirect:itinerary/index";
        }

        Itinerary itinerary = optionalItinerary.get();
        model.addAttribute("itinerary", itinerary);
        return "itinerary/edit";



    }


    @PostMapping("itinerary/{id}/edit")
    public String editItinerary(@ModelAttribute Itinerary itinerary, @PathVariable Long id) {
        // Get the existing itinerary from the database
        Optional<Itinerary> optionalItinerary = itineraryDao.findById(id);
        if (optionalItinerary.isEmpty()) {
            return "redirect:/itinerary/index";
        }

        Itinerary existingItinerary = optionalItinerary.get();

        Checklist existingChecklist = existingItinerary.getChecklist();
//        System.out.println(existingChecklist);
//        existingItinerary.setChecklist(itinerary.getChecklist());
//        System.out.println(existingChecklist);

        // not necessary
//        existingChecklist.setName(itinerary.getChecklist().getName());

        // set the user in the incoming itinerary
        itinerary.setUser(existingItinerary.getUser());
        itinerary.getChecklist().setItinerary(itinerary);

        // Loop through the checklist items in the updated checklist and set their checklist
        for (ChecklistItems checklistItem : itinerary.getChecklist().getChecklistItems()) {
            checklistItem.setChecklist(itinerary.getChecklist());
        }

        // Delete any checklist items that are no longer present in the updated checklist

        System.out.println(itinerary);

            List<ChecklistItems> existingChecklistItems = checklistItemsDao.findChecklistByChecklist(existingChecklist);
            for (ChecklistItems existingChecklistItem : existingChecklistItems) {
                boolean found = false;
                for (ChecklistItems itemCheck : itinerary.getChecklist().getChecklistItems()) {
                    if (itemCheck.getId() == existingChecklistItem.getId()) {
                        found = true;
                    }
                }
                if (!found) {
                    System.out.println(existingChecklistItem.getId());
                    // Delete checklist item that is no longer present in the updated checklist
//                    checklistItemsDao.deleteById(existingChecklistItem.getId());
                    checklistItemsDao.nukeById(existingChecklistItem.getId());
                }
            }

        // Save the updated checklist
//        checklistDao.save(itinerary.getChecklist());
//existingItinerary.setChecklist(itinerary.getChecklist());

        // Update other properties of the existing itinerary
//        existingItinerary.setName(itinerary.getName());
//        existingItinerary.setStartDate(itinerary.getStartDate());
//        existingItinerary.setEndDate(itinerary.getEndDate());

        // Save the existingItinerary with the updated values and updated destinations

        itineraryDao.save(itinerary);

        return "redirect:/itinerary/{id}/edit";
    }


}




