package com.exam.services.impl;

import com.exam.entity.exam.Category;
import com.exam.repo.CategoryRepository;
import com.exam.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.LinkedHashSet;
import java.util.Set;


@Component
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepo;

    @Override
    public Category addCategory(Category category) {
        return this.categoryRepo.save(category);
    }

    @Override
    public Category updateCategory(Category category) {
        Category local = this.categoryRepo.findById(category.getCid()).get();
            return this.categoryRepo.save(category);

    }

    @Override
    public Set<Category> getCategories() {
        return new LinkedHashSet<>(this.categoryRepo.findAll());
    }

    @Override
    public Category getCategory(Long categoryId) {
        return this.categoryRepo.findById(categoryId).get();
    }

    @Override
    public void deleteCategory(Long categoryId) {
        this.categoryRepo.deleteById(categoryId);
    }
}
