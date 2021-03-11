package com.app.services;

import com.app.domain.dto.ProductDto;
import com.app.domain.jpa.ProductEntity;
import com.app.mappers.ProductMapper;
import com.app.repo.ProductRepo;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    @Transactional
    public ResponseEntity<ProductDto> addNewProduct(ProductDto productDto) {
        ProductEntity productEntity = productMapper.mapDtoToProduct(productDto);
        productRepo.save(productEntity);
        return new ResponseEntity<>(productDto, HttpStatus.valueOf(200));
    }

    @Override
    public ResponseEntity<ProductDto> updateProduct(ProductDto productDto) {
        UUID productID = productDto.getProductId();

        Optional<ProductEntity> optionalProductEntity = productRepo.findById(productID);
        if (optionalProductEntity.isEmpty())
            return ResponseEntity.notFound().build();

        ProductEntity productEntity = productMapper.mapDtoToProduct(productDto);
        productEntity.setProductId(productID);

        productRepo.save(productEntity);
        return new ResponseEntity<>(productDto, HttpStatus.valueOf(200));
    }

    @Override
    public ResponseEntity<?> deleteProduct(UUID productID) {
        productRepo.deleteById(productID);
        return ResponseEntity.noContent().build();
    }
}
