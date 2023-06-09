package com.jumzip.arcana.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity @Table(name="TIME")
public class TimeCard {

    @Id
    @Column(name = "idx")
    private int idx;

    @OneToOne
    @JoinColumn(name = "card_idx")
    private Card card;

    @Column(name = "timement")
    private String ment;
}
