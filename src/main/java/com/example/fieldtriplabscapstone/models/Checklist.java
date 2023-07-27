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
}
