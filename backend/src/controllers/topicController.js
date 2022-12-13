const { request, response } = require('express');
const Category = require('../models/categoryModel');
const Topic = require('../models/topicModel');

const createTopic = async (req = request, res = response) => {
  try {
    const { categoryId } = req.params;
    const existCategory = await Category.findById(categoryId);
    if (!existCategory) {
      return res.status(400).json({
        ok: false,
        msg: 'Category not found',
      });
    }
    const newTopic = new Topic({ ...req.body });
    const topicCreated = await newTopic.save();

    existCategory.topics.push(topicCreated._id);
    await existCategory.save();

    return res.status(201).json({
      ok: true,
      msg: 'Topic created',
      topic: topicCreated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Something went wrong, try again',
    });
  }
};

const getAllTopics = async (req = request, res = response) => {
  try {
    const { skip = 0, limit = 10 } = req.query;
    const topics = await Topic.find({}, '-__v -questions', {
      skip: Number(skip),
      limit: Number(limit),
    });
    res.status(200).json({
      ok: true,
      topics,
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
  createTopic,
  getAllTopics,
};
