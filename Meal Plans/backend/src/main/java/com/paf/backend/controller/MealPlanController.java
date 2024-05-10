package com.paf.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paf.backend.entity.MealPlan;
import com.paf.backend.service.MealPlanService;

@CrossOrigin
@RestController
@RequestMapping("/api/meal-plans")

public class MealPlanController {

    @Autowired
    private MealPlanService mealPlanService;

    @GetMapping
    public List<MealPlan> getAllMealPlans() {
        return mealPlanService.getAllMealPlans();
    }
    
    @GetMapping("/{userId}")
    public List<MealPlan> getMealPlansByUserId(@PathVariable String userId) {
        return mealPlanService.getMealPlansByUserId(userId);
    }

    @PostMapping
    public MealPlan createMealPlan(@RequestBody MealPlan mealPlan) {
        return mealPlanService.createMealPlan(mealPlan);
    }

    @PutMapping("/{id}")
    public void updateMealtPlan(@PathVariable String id, @RequestBody MealPlan updatedMealPlan) {
        mealPlanService.updateMealPlan(id, updatedMealPlan );
    }

    @DeleteMapping("/{id}")
    public void deleteMealPlan(@PathVariable String id) {
        mealPlanService.deleteMealPlan(id);
    }
    
} 
