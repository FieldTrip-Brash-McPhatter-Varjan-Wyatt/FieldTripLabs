package com.example.fieldtriplabscapstone.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="photos")
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String photoUrl;

    @Column(nullable = false)
    private String caption;

    @ManyToOne
    @JoinColumn(name = "review_id", nullable = false)
    private Review review;
}
