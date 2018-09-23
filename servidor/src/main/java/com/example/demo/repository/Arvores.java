package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Arvore;

public interface Arvores extends JpaRepository<Arvore, Long> {

	

}