package com.exam.controller;

import com.exam.entity.exam.Category;
import com.exam.entity.exam.Quiz;
import com.exam.services.CategoryService;
import com.exam.services.impl.CategoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController{

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/")
    public ResponseEntity<Category> addCategory(@RequestBody Category category){
             Category localCat = this.categoryService.addCategory(category);
             return ResponseEntity.ok(localCat);

    }

    @GetMapping("/{categoryId}")
    public Category getCategory(@PathVariable("categoryId") long cid){
        Category localCat = this.getCategory(cid);
        return localCat;
    }

    @GetMapping("/")
    public Set<Category> getCategories(){
        Set<Category> localCat = this.categoryService.getCategories();
        return localCat;
    }

    @PutMapping("/")
    public ResponseEntity<?> updateCategory(@RequestBody Category category){
        return ResponseEntity.ok(this.categoryService.updateCategory(category));
    }

    @DeleteMapping("/{categoryId}")
    public void deleteCategory(@PathVariable("categoryId") long cid){
        this.categoryService.deleteCategory(cid);
    }

}
