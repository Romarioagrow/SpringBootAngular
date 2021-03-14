package com.app.domain.dto;

import com.fasterxml.jackson.databind.ser.Serializers;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Random;
import java.util.UUID;

@Data
@NoArgsConstructor
public class ProductDto extends BaseDto {

    private UUID productId;

    private String name, articul;

    private Integer price, amount;

    private LocalDate productionDate;

    public static ProductDto createRandomDto() {

        Random random = new Random();
        ProductDto productDto = new ProductDto();
        productDto.setName("RandomProduct");
        productDto.setArticul("RandomArticul");
        productDto.setPrice(random.nextInt(100000) + 1);
        productDto.setAmount(random.nextInt(1000) + 1);
        return productDto;

    }

}
