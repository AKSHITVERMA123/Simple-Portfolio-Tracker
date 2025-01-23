package com.app.simpleportfoliotrackerRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entity.Stock;
public interface SimpleportfoliotrackerRepository extends JpaRepository<Stock, Integer> {

}