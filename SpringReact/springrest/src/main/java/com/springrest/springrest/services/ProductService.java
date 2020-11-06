package com.springrest.springrest.services;
import java.util.List;


import com.springrest.springrest.entities.Product;
public interface ProductService {
	
	public List<Product> getProduct();
	public Product getProductId(long productid);
	public Product addProduct(Product product);
	public Product updateProduct(Product product);
	public void deleteProduct(long productid);
	

}
