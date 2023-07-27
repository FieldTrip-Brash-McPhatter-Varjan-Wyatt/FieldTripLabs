package com.example.fieldtriplabscapstone.models;

import jakarta.persistence.*;
import lombok.*;

@ToString
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="checklist_items")
public class ChecklistItems {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 100)
    private String itemName;

    @ManyToOne
    @ToString.Exclude
    @JoinColumn(name = "checklist_id", nullable = false)
    private Checklist checklist;

}
