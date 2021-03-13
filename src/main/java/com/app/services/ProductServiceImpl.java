package com.app.services;

import com.app.domain.dto.ProductDto;
import com.app.domain.jpa.ProductEntity;
import com.app.mappers.ProductMapper;
import com.app.repo.ProductRepo;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductServiceApi {
    private final ProductRepo productRepo;
    private final ProductMapper productMapper;

    @Override
    public List<ProductDto> getAllProducts() {
        Iterable<ProductEntity> all = productRepo.findAll(); /// productRepo.findAllProducts();
        return productMapper.mapEntityListToDto(all);
    }

    @Override
    public ResponseEntity<ProductDto> getProduct(UUID productId) {
        try {
            Optional<ProductEntity> optionalProductEntity = productRepo.findById(productId);
            if (optionalProductEntity.isPresent()) {
                ProductDto productDto = productMapper.mapProductEntityToDto(optionalProductEntity.get());
                return returnResponseEntityWithCodeAndDto(200, productDto);
            }
            else {
                log.warn("No Product with id {}", productId);
                return ResponseEntity.notFound().build();
            }
        }
        catch (RuntimeException e) {
            return returnResponseEntityWithCodeAndDto(500, null);
        }
    }

    @Override
    @Transactional
    public ResponseEntity<ProductDto> addNewProduct(ProductDto productDto) {
        try {
            ProductEntity productEntity = productMapper.mapDtoToProduct(productDto);
            productEntity.setProductionDate(LocalDate.now());
            productRepo.save(productEntity);
            return returnResponseEntityWithCodeAndDto(200, productMapper.mapProductEntityToDto(productEntity));
        }
        catch (RuntimeException e) {
            log.warn("Error while creating new Product {}", e.getMessage());
            return returnResponseEntityWithCodeAndDto(500, null);
        }
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> updateProduct(ProductDto productDto) {
        try {
            UUID productId = productDto.getProductId();
            Optional<ProductEntity> optionalProductEntity = productRepo.findById(productId);
            if (optionalProductEntity.isPresent()) {
                ProductEntity editedProduct = productMapper.mapDtoToProduct(productDto);
                productRepo.save(editedProduct);
                return returnResponseEntityWithCode(200);
            } else return ResponseEntity.notFound().build();
        }
        catch (RuntimeException e) {
            log.warn("Error while updating Product");
            return returnResponseEntityWithCode(500);
        }
    }

    @Override
    @Transactional
    public ResponseEntity<?> deleteProduct(UUID productID) {
        /*
         * transaction.UnexpectedRollbackException
         * */
        try {
            productRepo.deleteById(productID);
            return returnResponseEntityWithCode(200);
        } catch (RuntimeException e) {
            log.warn("RuntimeException {}", e.getMessage());
            return returnResponseEntityWithCode(500);
        }
    }

    private ResponseEntity<HttpStatus> returnResponseEntityWithCode(int code) {
        return new ResponseEntity<>(HttpStatus.valueOf(code));
    }

    private ResponseEntity<ProductDto> returnResponseEntityWithCodeAndDto(int code, ProductDto productDto) {
        return new ResponseEntity<>(productDto, HttpStatus.valueOf(code));
    }
}
