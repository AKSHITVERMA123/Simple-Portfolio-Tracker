package com.app.services;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.app.entity.Stock;

public interface SimpleportfoliotrackerServiceIn {

	public Stock addStock(Stock st);
	public Stock updateStock(int id,Stock st);
	public ResponseEntity<HttpStatus> deleteStock(int id);
	public List<Stock> fetchStocks();
	public Stock getStockById(int stockid);
}
