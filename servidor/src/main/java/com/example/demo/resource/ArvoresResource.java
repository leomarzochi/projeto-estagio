package com.example.demo.resource;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.Arvore;
import com.example.demo.repository.Arvores;

@RestController
@RequestMapping("/arvores")
public class ArvoresResource {
	
	@Autowired
	private Arvores arvores;
	
	@PostMapping
	public Arvore adicionar(@Valid @RequestBody Arvore arvore) {
		return arvores.save(arvore);
	}
	
	@GetMapping
	public List<Arvore> listar() {
		return arvores.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Arvore> buscar(@PathVariable Long id) {
		Arvore arvore = arvores.getOne(id);
		
		if (arvore == null) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(arvore);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Arvore> atualizar(@PathVariable Long id, 
			@Valid @RequestBody Arvore contato) {
		Arvore existente = arvores.getOne(id);
		
		if (existente == null) {
			return ResponseEntity.notFound().build();
		}
		
		BeanUtils.copyProperties(contato, existente, "id");
		
		existente = arvores.save(existente);
		
		return ResponseEntity.ok(existente);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> remover(@PathVariable Long id) {
		Arvore contato = arvores.getOne(id);
		
		if (contato == null) {
			return ResponseEntity.notFound().build();
		}
		
		arvores.delete(contato);
		
		return ResponseEntity.noContent().build();
	}
}
