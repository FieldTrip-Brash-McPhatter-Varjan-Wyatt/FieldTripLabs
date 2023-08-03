package com.example.fieldtriplabscapstone.repositories;

import com.example.fieldtriplabscapstone.models.Itinerary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface ItineraryRepository extends JpaRepository<Itinerary, Long> {
    @Modifying
    @Transactional
    @Query(value="DELETE FROM itineraries  WHERE id = :id", nativeQuery=true)
    void deleteItineraryById(Long id);
}
