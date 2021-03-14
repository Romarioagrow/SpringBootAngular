package com.app;

import com.app.controllers.RestController;
import com.app.domain.dto.ProductDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class SpringBootAngularApplicationTests {

    @Autowired
    private RestController restController;

    @Test
    void createNewProductTest() {
        ProductDto newProduct = new ProductDto();
        newProduct.setName("Test NAME");
        newProduct.setArticul("TEST ARTICUL1");
        newProduct.setPrice(10000);
        newProduct.setAmount(20);

        ResponseEntity<ProductDto> createdProduct = restController.createNewProduct(newProduct);
        assertThat(createdProduct.getBody()).isNotNull();
    }

    @Test
    void createNewProductNull() {
        ResponseEntity<ProductDto> createdProduct = restController.createNewProduct(null);
        assertThat(createdProduct.getBody()).isNull();
    }


}
