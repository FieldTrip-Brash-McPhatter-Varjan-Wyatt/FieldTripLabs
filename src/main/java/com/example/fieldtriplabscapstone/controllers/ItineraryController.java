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
        // Existing code...

        // Get the existing itinerary from the database
        Optional<Itinerary> optionalItinerary = itineraryDao.findById(id);
        if (optionalItinerary.isEmpty()) {
            return "redirect:itinerary/index";
        }

        Itinerary existingItinerary = optionalItinerary.get();
        Checklist updatedChecklist = itinerary.getChecklist();
        Checklist existingChecklist = existingItinerary.getChecklist();
        existingChecklist.setName(updatedChecklist.getName());

        // Copy checklist items to the existing checklist if the list is not empty
        List<ChecklistItems> updatedChecklistItems = itinerary.getChecklist().getChecklistItems();
        List<ChecklistItems> existingChecklistItems = existingItinerary.getChecklist().getChecklistItems();


        // Remove checklist items that are not present in the updated checklist
        existingChecklistItems.removeIf(existingItem -> !updatedChecklistItems.contains(existingItem));
        existingChecklistItems.clear();
        // Add new checklist items from the updated checklist
        for (ChecklistItems updatedItem : updatedChecklistItems) {
            if (updatedItem.getItemName() != null && !existingChecklistItems.contains(updatedItem)) {
                updatedItem.setChecklist(existingChecklist);
                existingChecklistItems.add(updatedItem);
            }
        }

        // Update destinations of the existing itinerary
        List<Destination> updatedDestinations = itinerary.getDestinations();
        List<Destination> existingDestinations = existingItinerary.getDestinations();

        // Remove destinations that are not present in the updated destinations
        existingDestinations.removeIf(existingDestination -> !updatedDestinations.contains(existingDestination));

        // Add new destinations from the updated itinerary
        for (Destination updatedDestination : updatedDestinations) {
            if (updatedDestination != null && !existingDestinations.contains(updatedDestination)) {
                updatedDestination.setItinerary(existingItinerary);
                existingDestinations.add(updatedDestination);
            }
        }

        // Update other properties of the existing itinerary
        existingItinerary.setName(itinerary.getName());
        existingItinerary.setStartDate(itinerary.getStartDate());
        existingItinerary.setEndDate(itinerary.getEndDate());

        // Save the existingItinerary with the updated values and updated destinations
        itineraryDao.save(existingItinerary);

        return "redirect:/itinerary/{id}/edit";
    }

    @PostMapping ("/itinerary/{id}/delete")
    public String deleteItinerary(@PathVariable Long id){
        Optional<Itinerary> optionalItinerary = itineraryDao.findById(id);
        Itinerary delete = optionalItinerary.get();
        System.out.println(delete.getName());
        itineraryDao.delete(delete);
        return "redirect:/profile";
    }




}
