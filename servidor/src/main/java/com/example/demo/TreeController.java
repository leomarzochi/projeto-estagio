package com.example.demo;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class TreeController {
    private TreeRepository repository;

    public TreeController(TreeRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/trees")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<Tree> trees() {
        return repository.findAll().stream()                
                .collect(Collectors.toList());
    }    
    
}
