package com.app.domain.dto;

import com.fasterxml.jackson.databind.ser.Serializers;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.UUID;

@Data
@NoArgsConstructor
public class ProductDto extends BaseDto {

    private UUID productId;

    private String name, articul;

    private Integer price, amount;

    private LocalDate productionDate;

}
