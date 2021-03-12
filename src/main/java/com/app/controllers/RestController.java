package com.app.controllers;

import com.app.domain.dto.ProductDto;
import com.app.services.ProductServiceApi;
import com.app.services.ProductServiceImpl;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/api/products/")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class RestController {
    private final ProductServiceImpl productService;

    @GetMapping("/get/all")
    public List<ProductDto> getData() {
        return productService.getAllProducts();
    }

    @GetMapping("/get")
    public ResponseEntity<ProductDto> getProduct(@RequestBody UUID productId) {
        return productService.getProduct(productId);
    }

    @PostMapping("/create")
    public ResponseEntity<ProductDto> createNewProduct(@RequestBody ProductDto productDto) {
        return productService.addNewProduct(productDto);
    }

    @PutMapping("/edit/{productId}")
    public ResponseEntity<HttpStatus> editProduct(@PathVariable UUID productId/*@RequestBody ProductDto productDto*/) {
        return productService.updateProduct(/*productDto*/productId);
    }

    @DeleteMapping("/delete/{productId}")
    public ResponseEntity<?> deleteProduct(/*@RequestBody */@PathVariable UUID productId) {
        return productService.deleteProduct(productId);
    }
}
