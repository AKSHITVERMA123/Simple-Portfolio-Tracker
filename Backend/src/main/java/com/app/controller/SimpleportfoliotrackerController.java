package com.app.controller;

import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.app.entity.Stock;
import com.app.services.SimpleportfoliotrackerServiceIn;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class SimpleportfoliotrackerController {
	
	@Autowired				// For dependency injection courseService interface ka object layega and inject kar dega
	private SimpleportfoliotrackerServiceIn pts;
	
//	@GetMapping("/home")
//	public String Home() {
//		return "Welcome to you in home page";
//	}
	
	// get the courses
	@GetMapping("/")
	//or
//	@RequestMapping(path="/courses",  method=RequestMethod.GET)
	public List<Stock> fetchStocks() {
		return this.pts.fetchStocks();
	}
	
	@GetMapping("/{stockid}")
	public Stock getStockById(@PathVariable int stockid) {
		return this.pts.getStockById(stockid);
	}
	
	@PostMapping("/")
	public Stock addStock(@RequestBody Stock stock) {
		return this.pts.addStock(stock);
	}
	
	@PutMapping("/{stockid}")
	public Stock updateStock(@PathVariable int stockid,@RequestBody Stock stock)
	{
		return this.pts.updateStock(stockid,stock);
	}
	
	@DeleteMapping("/{stockid}")
	public ResponseEntity<HttpStatus> deleteStock(@PathVariable int stockid){
		try {
			System.out.println(HttpStatus.OK);
			return this.pts.deleteStock(stockid);
//			return new ResponseEntity<>(HttpStatus.OK);
			}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
}