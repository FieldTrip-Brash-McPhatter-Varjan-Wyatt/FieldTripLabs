package com.example.fieldtriplabscapstone.repositories;

import com.example.fieldtriplabscapstone.models.Destination;
import com.example.fieldtriplabscapstone.models.Review;
import jdk.dynalink.linker.LinkerServices;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findAllByDestination(Destination destination);
}
