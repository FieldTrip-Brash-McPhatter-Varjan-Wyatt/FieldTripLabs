package com.example.fieldtriplabscapstone.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
@ToString
@Getter
@Setter
@AllArgsConstructor
@Entity
@Table(name="itineraries")
public class Itinerary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 100)
    private String startDate;

    @Column(nullable = false, length = 100)
    private String endDate;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToOne(fetch = FetchType.EAGER, mappedBy = "itinerary")
    private Checklist checklist;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "itinerary")
    private List<Destination> destinations;


    public void addDestination(Destination destination) {
        destinations.add(destination);
        destination.setItinerary(this);
    }

    public void removeDestination(Destination destination) {
        destinations.remove(destination);
        destination.setItinerary(null);
    }


    public Itinerary() {
        checklist = new Checklist();
    }
}
