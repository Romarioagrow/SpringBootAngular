package com.app.services;

import com.app.domain.dto.ProductDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public interface ProductServiceApi {

    List<ProductDto> getAllProducts();

    ResponseEntity<ProductDto> getProduct(UUID productDto);

    ResponseEntity<ProductDto> addNewProduct(ProductDto productDto);

    ResponseEntity<HttpStatus> updateProduct(ProductDto productId);

    ResponseEntity<?> deleteProduct(UUID productID);

}
