package com.example.fieldtriplabscapstone.repositories;

import com.example.fieldtriplabscapstone.models.Checklist;
import com.example.fieldtriplabscapstone.models.ChecklistItems;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChecklistItemsRepository extends JpaRepository<ChecklistItems,Long> {
    public List<ChecklistItems> findChecklistByChecklist(Checklist updatedChecklist);
}
