package com.example.fieldtriplabscapstone.models;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
@ToString
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="destinations")
public class Destination {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 100)
    private String name;

    @Column(length = 100)
    private String address;

    @Column
    private String description;


    @Column
    private String placeId;

    @Column(length = 10000)
    private String photoUrl;


    @ToString.Exclude
    @ManyToOne
    @JoinColumn(name = "itinerary_id")
    private Itinerary itinerary;

    @ToString.Exclude
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "destination")
    private List<Review> review;

    public Destination(String placeId) {
        this.placeId = placeId;
        review = new ArrayList<>();
    }
}
