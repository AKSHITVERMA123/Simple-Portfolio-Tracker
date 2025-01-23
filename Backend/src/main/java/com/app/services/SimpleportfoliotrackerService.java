package com.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.entity.Stock;
import com.app.simpleportfoliotrackerRepository.SimpleportfoliotrackerRepository;
@Service
public class SimpleportfoliotrackerService implements SimpleportfoliotrackerServiceIn{

	@Autowired
	SimpleportfoliotrackerRepository rep;

	public SimpleportfoliotrackerService() {

	}

	@Override
	public Stock getStockById(int stockid) {
		Stock stock=this.rep.getReferenceById(stockid);
		return stock;
	}
	@Override
	public Stock addStock(Stock st) {
		this.rep.save(st);
		return st;
	}

	@Override
	public Stock updateStock(int stockid, Stock st) {
//		Optional<Stock> st1=this.rep.findById(stockid);
//		System.out.println(st1.get());
		 
		int id=this.rep.getReferenceById(stockid).getstockid();
		this.rep.getReferenceById(stockid).getstockname();
		this.rep.getReferenceById(stockid).getticker();
		this.rep.getReferenceById(stockid).getquantity();
		this.rep.getReferenceById(stockid).getbuyprice();
//		if(id==stockid) {
		st.getstockname();
		st.getticker();
		st.getquantity();
		st.getbuyprice();
		this.rep.save(st);
//		}
		System.out.println("User has been Updated of " + st.getstockid());
//		System.out.println(st.get());
		return st;
	}

	@Override
	public ResponseEntity<HttpStatus> deleteStock(int stockid) {
	     Stock st = this.rep.getReferenceById(stockid);
//          .findById(stockid)
//          .orElseThrow(() -> new RuntimeException("Account does not exist"));
	     this.rep.delete(st);
	     System.out.println("Stock deleted with Id = "+stockid);
	     for(int i=stockid+1;i<=this.rep.count();i++) {
	    	 System.out.println("Id="+i);
	    	 this.rep.getReferenceById(i).setstockid(4);
	     }
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@Override
	public List<Stock> fetchStocks() {
	    List<Stock> stocks = this.rep.findAll();
	return stocks;
	}
}
