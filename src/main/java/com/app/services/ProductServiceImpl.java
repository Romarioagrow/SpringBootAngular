package com.app.services;

import com.app.domain.dto.ProductDto;
import com.app.domain.jpa.ProductEntity;
import com.app.mappers.ProductMapper;
import com.app.repo.ProductRepo;
import com.sun.xml.bind.v2.runtime.SwaRefAdapter;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionException;
import org.springframework.transaction.UnexpectedRollbackException;
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
    public ResponseEntity<ProductDto> getProduct(UUID productId) {
        Optional<ProductEntity> optionalProductEntity = productRepo.findById(productId);

        if (optionalProductEntity.isPresent()) {
            ProductDto productDto = productMapper.mapProductEntityToDto(optionalProductEntity.get());
            return new ResponseEntity<>(productDto, HttpStatus.valueOf(200));
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @Override
   // @Transactional
    public ResponseEntity<ProductDto> addNewProduct(ProductDto productDto) {
        ProductEntity productEntity = productMapper.mapDtoToProduct(productDto);
        productRepo.save(productEntity);
        return new ResponseEntity<>(productDto, HttpStatus.valueOf(200));
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> updateProduct(UUID productId) {
        //UUID productID = productDto.getProductId();
        try {
            Optional<ProductEntity> optionalProductEntity = productRepo.findById(productId);
            if (optionalProductEntity.isEmpty())
                return ResponseEntity.notFound().build();

            ProductEntity productEntity = optionalProductEntity.get();//productMapper.mapDtoToProduct(productDto);
            productEntity.setProductId(productId);

            productRepo.save(productEntity);
            return new ResponseEntity<>(HttpStatus.valueOf(200));
        }
        catch (Exception e) {
            /*TODO: CrudErrors Handler*/
            log.warn("Exception {}", e.getMessage());
            return new ResponseEntity<>(HttpStatus.valueOf(500));
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
           // return ResponseEntity.noContent().build();
            return new ResponseEntity<>(HttpStatus.valueOf(200));
        } catch (RuntimeException e) {
            log.warn("RuntimeException {}", e.getMessage());
            return new ResponseEntity<>(HttpStatus.valueOf(500));
        }
        /*catch (RuntimeException e) {
            log.warn("RuntimeException {}", e.getMessage());
            return new ResponseEntity<>(HttpStatus.valueOf(500));
        }*/
        /*finally {
            log.warn("Exception handle");
            return new ResponseEntity<>(HttpStatus.valueOf(500));
        }*/

    }
}
