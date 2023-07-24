package com.example.fieldtriplabscapstone.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AboutUsController {

    @GetMapping("/about")
    public String aboutUs(){
        return "/about-us";
    }
}
