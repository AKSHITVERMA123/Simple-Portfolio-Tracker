package com.app;

import java.util.Optional;

//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.app.entity.Stock;
//import com.app.courseRepository.CourseRepository;
//import com.app.entity.Stock;
import com.app.simpleportfoliotrackerRepository.SimpleportfoliotrackerRepository;

@AutoConfiguration
@SpringBootApplication
public class SimpleportfoliotrackerApplication implements CommandLineRunner{

	@Autowired
	SimpleportfoliotrackerRepository rep;
	
	public static void main(String[] args) {
		SpringApplication.run(SimpleportfoliotrackerApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
	
//	Optional<Stock> st=this.rep.findById(1);
//	System.out.println(st.get());
//	 
//	Stock USER=this.rep.findById(1).get();
//	USER.setquantity(100);
//	rep.save(USER);
//	System.out.println("User has been Updated of " + USER.getstockid());
//	System.out.println(st.get());
//	 
}
}
