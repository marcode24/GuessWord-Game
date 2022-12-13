const { request, response } = require('express');
const Question = require('../models/questionModel');
const Topic = require('../models/topicModel');

const createQuestion = async (req = request, res = response) => {
  try {
    const { topicId } = req.params;
    const existsTopic = await Topic.findById(topicId);
    if (!existsTopic) {
      return res.status(404).json({
        ok: false,
        msg: 'Topic not found',
      });
    }
    const question = new Question({ ...req.body });
    question.topic = topicId;
    const savedQuestion = await question.save();
    existsTopic.questions.push(savedQuestion._id);
    await existsTopic.save();
    res.status(201).json({
      ok: true,
      msg: 'Question created',
      question: savedQuestion,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Something went wrong, try again',
    });
  }
};

const getRandomQuestion = async (req = request, res = response) => {
  try {
    const { topicId } = req.params;
    const existsTopic = await Topic.findById(topicId);
    if (!existsTopic) {
      return res.status(404).json({
        ok: false,
        msg: 'Topic not found',
      });
    }
    const randomQuestion = await Question.aggregate([
      { $match: { topic: existsTopic._id } },
      { $sample: { size: 1 } },
    ]);
    await Question.populate(randomQuestion, { path: 'topic', select: 'name' });
    res.status(200).json({
      ok: true,
      question: randomQuestion[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Something went wrong, try again',
    });
  }
};

const getQuestionsByTopic = async (req = request, res = response) => {
  try {
    const { topicId } = req.params;
    const questions = await Question.find({ topic: topicId });
    res.status(200).json({
      ok: true,
      questions,
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
  createQuestion,
  getRandomQuestion,
  getQuestionsByTopic,
};
