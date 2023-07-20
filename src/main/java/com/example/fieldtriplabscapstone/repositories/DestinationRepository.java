package com.example.fieldtriplabscapstone.repositories;

import com.example.fieldtriplabscapstone.models.Destination;
import com.example.fieldtriplabscapstone.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DestinationRepository extends JpaRepository<Destination, Long> {
}
