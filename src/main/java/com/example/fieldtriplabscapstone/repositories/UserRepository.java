package com.example.fieldtriplabscapstone.repositories;

import com.example.fieldtriplabscapstone.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByUsername (String username);
}

