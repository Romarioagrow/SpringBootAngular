package com.app.controllers;

import com.app.domain.dto.ProductDto;
import com.app.services.ProductServiceApi;
import com.app.services.ProductServiceImpl;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@Slf4j
@org.springframework.web.bind.annotation.RestController
@RequestMapping("/api/products/")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class RestController {
    private final ProductServiceImpl productService;

    @GetMapping("/get/all")
    public List<ProductDto> getAllProducts() {
        log.info("getAllProducts");
        return productService.getAllProducts();
    }

    @GetMapping("/get")
    public ResponseEntity<ProductDto> getProduct(@RequestBody UUID productId) {
        log.info("getProduct");
        return productService.getProduct(productId);
    }

    @PostMapping("/create")
    public ResponseEntity<ProductDto> createNewProduct(@RequestBody ProductDto productDto) {
        log.info("createNewProduct");
        return productService.addNewProduct(productDto);
    }

    @PutMapping("/edit/{productId}")
    public ResponseEntity<HttpStatus> editProduct(@PathVariable UUID productId/*@RequestBody ProductDto productDto*/) {
        log.info("editProduct");
        return productService.updateProduct(/*productDto*/productId);
    }

    @DeleteMapping("/delete/{productId}")
    public ResponseEntity<?> deleteProduct(/*@RequestBody */@PathVariable UUID productId) {
        log.info("deleteProduct");
        return productService.deleteProduct(productId);
    }
}
