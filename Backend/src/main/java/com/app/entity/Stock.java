package com.app.entity;

import jakarta.persistence.*;
@Entity
@Table(name="stock")
public class Stock {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "stockid")
	private int stockid;
	@Column(name = "stockname")
	private String stockname;
	@Column(name = "ticker")
	private String ticker;
	@Column(name= "quantity")
	private int quantity;
	@Column(name = "buyprice")
	private double buyprice;
	 
	public int getstockid() {
		return stockid;
	}
	
	public void setstockid(int stockid) {
		this.stockid = stockid;
	}
	
	public String getstockname() {
		return stockname;
	}
	
	public void setstockname(String stockname) {
		this.stockname = stockname;
	}
	
	public String getticker() {
		return ticker;
	}
	
	public void setticker(String ticker) {
		this.ticker = ticker;
	}
	
	public int getquantity() {
		return quantity;
	}
	
	public void setquantity(int quantity) {
		this.quantity = quantity;
	}
	
	public double getbuyprice() {
		return this.buyprice;
	}
	
	public void setbuyprice(double buyprice) {
		this.buyprice = buyprice;
	}
	
	public Stock(int stockid, String stockname, String ticker, int quantity, double buyprice) {
		super();
		this.stockid = stockid;
		this.stockname = stockname;
		this.ticker = ticker;
		this.quantity = quantity;
		this.buyprice = buyprice;
	}
	
	public Stock() {
	}
	
	@Override
	public String toString() {
		return "Stock [StockId=" + stockid + ", StockName=" + stockname + ", ticker=" + ticker + ", quantity="
				+ quantity + ", buyPrice=" + buyprice + "]";
	}
}
