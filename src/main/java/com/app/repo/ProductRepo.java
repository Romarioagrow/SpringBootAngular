package com.app.repo;

import com.app.domain.jpa.ProductEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ProductRepo extends CrudRepository<ProductEntity, UUID> {
}
