package com.app;

import com.app.controllers.RestController;
import com.app.domain.dto.ProductDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class SpringBootAngularApplicationTests {

    @Autowired
    private RestController restController;

    @Test
    void createNewProductNull() {
        ResponseEntity<ProductDto> createdProduct = restController.createNewProduct(null);
        assertThat(createdProduct.getBody()).isNull();
    }

    @Test
    void createAndDeleteTest() {

        ProductDto newProduct = ProductDto.createRandomDto();
        ResponseEntity<ProductDto> createdProduct = restController.createNewProduct(newProduct);
        ProductDto productBody = createdProduct.getBody();
        assertThat(productBody).isNotNull();

        ResponseEntity<HttpStatus> responseEntity = restController.deleteProduct(productBody.getProductId());
        HttpStatus httpStatus = responseEntity.getStatusCode();
        assertThat(httpStatus).isNotNull();
        assertThat(httpStatus.is2xxSuccessful()).isTrue();
    }

    @Test
    void createThenEditAndDeleteTest() {

        ProductDto newProduct = ProductDto.createRandomDto();
        ResponseEntity<ProductDto> createdProduct = restController.createNewProduct(newProduct);
        ProductDto productBody = createdProduct.getBody();
        assertThat(productBody).isNotNull();

        ResponseEntity<HttpStatus> httpStatusEdit = restController.editProduct(productBody);
        HttpStatus statusCodeEdit = httpStatusEdit.getStatusCode();
        assertThat(statusCodeEdit.is2xxSuccessful()).isTrue();

        ResponseEntity<HttpStatus> responseEntity = restController.deleteProduct(productBody.getProductId());
        HttpStatus httpStatusDelete = responseEntity.getStatusCode();
        assertThat(httpStatusDelete.is2xxSuccessful()).isTrue();
    }


      /*@Test
    void createNewProductTest() {
        ProductDto newProduct = ProductDto.createRandomDto();

        ResponseEntity<ProductDto> createdProduct = restController.createNewProduct(newProduct);
        assertThat(createdProduct.getBody()).isNotNull();
    }*/

}
