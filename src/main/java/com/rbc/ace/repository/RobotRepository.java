package com.rbc.ace.repository;

import com.rbc.ace.domain.Robot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;


/**
 * Spring Data JPA repository for the Robot entity.
 */
@SuppressWarnings("unused")
@RepositoryRestResource
public interface RobotRepository extends JpaRepository<Robot,Long> {

}
