package com.springrest.springrest.components;
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Product;
import com.springrest.springrest.services.ProductService;

@CrossOrigin(origins = { "http://localhost:3000"})

@RestController
public class MyController {
	@Autowired
	private ProductService ProductService;
	@GetMapping("/home")
	public String Home()
	{
		return "Welcome!";
	}
	
	//get all products
	@GetMapping("/product")
	public List<Product> getProduct()
	{
		return this.ProductService.getProduct();		
	}
	@GetMapping("/product/{productid}")
	public Product getProductId(@PathVariable String productid)
	{
		return this.ProductService.getProductId(Long.parseLong(productid));
	}
	
	@PostMapping("/product")
	public Product addproduct(@RequestBody Product product)
	{
		return this.ProductService.addProduct(product);
	}
	@PutMapping("/product/update/{productid}")
	public Product updateproduct(@RequestBody Product product)
	{
		return this.ProductService.updateProduct(product);
	}
	@DeleteMapping("/product/delete/{productid}")
	public void deleteproduct(@PathVariable String productid)
	{
		ProductService.deleteProduct(Long.parseLong(productid));
	}
	
}
