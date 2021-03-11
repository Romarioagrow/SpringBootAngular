package com.app.mappers;

import com.app.domain.dto.ProductDto;
import com.app.domain.jpa.ProductEntity;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class ProductMapper {
    private final ModelMapper modelMapper;

    public List<ProductDto> mapEntityListToDto(Iterable<ProductEntity> all) {
        List<ProductDto> productDtoList = new ArrayList<>();
        all.forEach(productEntity -> {
            ProductDto productDto = modelMapper.map(productEntity, ProductDto.class);
            productDtoList.add(productDto);
        });
        return productDtoList;
    }

    public ProductEntity mapDtoToProduct(ProductDto productDto) {
        return modelMapper.map(productDto, ProductEntity.class);
    }
}
