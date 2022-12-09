const { request, response } = require('express');
const Category = require('../models/categoryModel');

const create = async (req = request, res = response) => {
  try {
    const name = req.body.name || null;
    const regexName = new RegExp(name, 'i');
    const categoryExists = await Category.findOne({ name: regexName });
    if (categoryExists) {
      return res.status(400).json({
        ok: false,
        msg: 'Category already exists',
      });
    }
    const newCategory = new Category({ ...req.body });
    const category = await newCategory.save();
    return res.status(201).json({
      ok: true,
      msg: 'Category created',
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Something went wrong, try again',
    });
  }
};

module.exports = {
  create,
};
