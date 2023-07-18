package com.example.fieldtriplabscapstone.repositories;



import com.example.fieldtriplabscapstone.models.Item;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends CrudRepository<Item, Long> {
}

