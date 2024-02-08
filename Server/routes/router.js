const express = require('express');
const router = express.Router();

const services = require("../services/render");

router.get('/', services.homeRoutes);

router.get('/video_chat', services.videoChat);

router.get('/profile', services.profile);

router.get('/rankings', services.rankings);

router.get('/skills', services.skills);

router.get('/recap', services.recap);

router.get('/flashcards', services.flashcards);

router.get('/calendar', services.calendar);

router.get('/mailbox', services.mailbox);

module.exports = router;