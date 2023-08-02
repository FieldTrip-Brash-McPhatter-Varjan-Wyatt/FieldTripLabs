package com.example.fieldtriplabscapstone.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
@ToString
@Getter
@Setter
@AllArgsConstructor
@Entity
@Table(name="checklists")
public class Checklist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column
    private boolean confirm;

    @ToString.Exclude
    @OneToOne
    @JoinColumn(name = "itinerary_id", nullable = false)
    private Itinerary itinerary;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "checklist")
    private List<ChecklistItems> checklistItems;

    public Checklist() {
        checklistItems = new ArrayList<>();
    }

    public void removeChecklistItem(ChecklistItems checklistItem) {
        checklistItems.remove(checklistItem);
        checklistItem.setChecklist(null);
    }

    public void addChecklistItem(ChecklistItems newItem) {
        checklistItems.add(newItem);
        newItem.setChecklist(this);
    }

}
