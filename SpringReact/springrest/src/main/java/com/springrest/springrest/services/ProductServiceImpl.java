package com.springrest.springrest.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import com.springrest.springrest.dao.ProductDao;
import com.springrest.springrest.entities.Product;
@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	private ProductDao productDao;
	List<Product> list;
	public ProductServiceImpl()
	{
		/*list = new ArrayList<>();
		list.add(new Course(145,"Java Core","This is demo"));
		list.add(new Course(123,"A Core","This is demo"));
		list.add(new Course(105,"B Core","This is demo"));
		list.add(new Course(120,"C Core","This is demo"));*/
	}
	@Override
	public List<Product> getProduct() {
		// TODO Auto-generated method stub
	//	return list;
		return productDao.findAll();	
		}
	@Override
	public Product getProductId(long productid) {
		/*Course c=null;
		for(Course course:list)
		{
			if(course.getId()==productid)
			{
				c=course;
				break;
			}
		}
		return c;*/
		return productDao.getOne(productid);
	}
	@Override
	public Product addProduct(Product product) {
		//list.add(course);
		productDao.save(product);
		return product;
	}
	@Override
	public Product updateProduct(Product product) {
		/*
		 * list.forEach(e->{
		 * if(e.getId()==course.getId())
		 * {
		 * e.setTitle(course.getTitle());e.setDescription(course.getDescription);
		 * }
		 * });
		
		return course;*/
		productDao.save(product);
		return product;
	}
	@Override
	public void deleteProduct(long productid) {
		
		/*for(int i=0;i<list.size();i++)
		{
			Course c=list.get(i);
			if(c.getId()==productid)
			{
				list.remove(i);
			}
		}
		
		return;*/
		
		Product entity=productDao.getOne(productid);
		productDao.delete(entity);
	}
	
	
}
