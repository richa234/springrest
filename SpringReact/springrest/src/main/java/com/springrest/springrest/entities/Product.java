package com.springrest.springrest.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.*;
@Entity
public class Product {
	@Id
	private long id;
	private String title;
	private String content;
	private String brand;
	private String catagory;
	private float discount;
	private long quantity;
	private Date saleat;
	private Date endat;
	private String color;
	private long price;
	private String tag;
	private String image;
	public Product(long id, String title, String content, String brand, String catagory, float discount, long quantity,
			Date saleat, Date endat, String color, long price, String tag, String image) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.brand = brand;
		this.catagory = catagory;
		this.discount = discount;
		this.quantity = quantity;
		this.saleat = saleat;
		this.endat = endat;
		this.color = color;
		this.price = price;
		this.tag = tag;
		this.image = image;
	}
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getCatagory() {
		return catagory;
	}
	public void setCatagory(String catagory) {
		this.catagory = catagory;
	}
	public float getDiscount() {
		return discount;
	}
	public void setDiscount(float discount) {
		this.discount = discount;
	}
	public long getQuantity() {
		return quantity;
	}
	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	public Date getSaleat() {
		return saleat;
	}
	public void setSaleat(Date saleat) {
		this.saleat = saleat;
	}
	public Date getEndat() {
		return endat;
	}
	public void setEndat(Date endat) {
		this.endat = endat;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public long getPrice() {
		return price;
	}
	public void setPrice(long price) {
		this.price = price;
	}
	public String getTag() {
		return tag;
	}
	public void setTag(String tag) {
		this.tag = tag;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", title=" + title + ", content=" + content + ", brand=" + brand + ", catagory="
				+ catagory + ", discount=" + discount + ", quantity=" + quantity + ", saleat=" + saleat + ", endat="
				+ endat + ", color=" + color + ", price=" + price + ", tag=" + tag + ", image=" + image + "]";
	}
	
	
	
}
