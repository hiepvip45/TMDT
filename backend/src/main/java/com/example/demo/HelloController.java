package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HelloController {

    @GetMapping("/")
    public String hello() {
        return "Hello từ Spring Boot 🚀";
    }
}