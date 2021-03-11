package com.app.services;

import com.app.domain.dto.ProductDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public interface ProductServiceApi {

    List<ProductDto> getAllProducts();

    ResponseEntity<ProductDto> getProduct(UUID productDto);

    ResponseEntity<ProductDto> addNewProduct(ProductDto productDto);

    ResponseEntity<ProductDto> updateProduct(ProductDto productDto);

    ResponseEntity<?> deleteProduct(UUID productID);

}
