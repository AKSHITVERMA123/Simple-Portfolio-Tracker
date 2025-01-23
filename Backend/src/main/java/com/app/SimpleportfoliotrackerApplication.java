package com.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.app.simpleportfoliotrackerRepository.SimpleportfoliotrackerRepository;

@AutoConfiguration
@SpringBootApplication
public class SimpleportfoliotrackerApplication{

	@Autowired
	SimpleportfoliotrackerRepository rep;
	
	public static void main(String[] args) {
		SpringApplication.run(SimpleportfoliotrackerApplication.class, args);
	}
}
