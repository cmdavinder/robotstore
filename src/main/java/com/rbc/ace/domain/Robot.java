package com.rbc.ace.domain;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

/**
 * A Robot.
 */
@Entity
@Table(name = "robot")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Robot {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    @Size(max = 500)
    private String description;

    @Column(name = "price", precision=10, scale=2)
    private BigDecimal price;

    @Column(name="sold_out")
    private boolean soldOut;
}
