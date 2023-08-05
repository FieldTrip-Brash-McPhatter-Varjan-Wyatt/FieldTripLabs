package com.example.fieldtriplabscapstone.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.GetMapping;

@Controller

public class PopularDestinationsController {
    @GetMapping("/saopaulo")
    public String saopaulo(){
        return "/saopaulo";

    }
    @GetMapping("/newyork")
    public String newyork(){
        return "/newyork";

    }
    @GetMapping("/paris")
    public String paris(){
        return "/paris";

    }

}






