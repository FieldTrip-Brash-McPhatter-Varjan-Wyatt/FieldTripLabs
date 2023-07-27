package com.example.fieldtriplabscapstone.repositories;

import com.example.fieldtriplabscapstone.models.ChecklistItems;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChecklistItemsRepository extends JpaRepository<ChecklistItems,Long> {
}
