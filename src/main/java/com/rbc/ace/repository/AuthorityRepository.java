package com.rbc.ace.repository;

import com.rbc.ace.domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Spring Data JPA repository for the Authority entity.
 */
@RepositoryRestResource
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
