package com.example.fieldtriplabscapstone.repositories;

import com.example.fieldtriplabscapstone.models.Checklist;
import com.example.fieldtriplabscapstone.models.ChecklistItems;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ChecklistItemsRepository extends JpaRepository<ChecklistItems,Long> {
    public List<ChecklistItems> findChecklistByChecklist(Checklist updatedChecklist);

    @Transactional
    @Modifying
    @Query(value="delete from checklist_items where id = :id", nativeQuery=true)
    void nukeById(long id);
}
