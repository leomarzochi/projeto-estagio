package com.example.demo;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.*;

@Entity
@Getter @Setter
@NoArgsConstructor
@ToString @EqualsAndHashCode
public class Tree {
	@Id @GeneratedValue
	private int id;
	private @NonNull String localizacao;
	private @NonNull String especie;
	private int idade;
	private int altura;
	private int diametro;
}
