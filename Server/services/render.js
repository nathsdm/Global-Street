const axios = require('axios');

exports.homeRoutes = (req, res) => {
    res.render('index');
}

exports.videoChat = (req, res) => {
    res.render('video_chat');
}

exports.profile = (req, res) => {
    res.render('profile');
}

exports.rankings = (req, res) => {
    res.render('rankings');
}

exports.skills = (req, res) => {
    res.render('skills');
}

exports.recap = (req, res) => {
    res.render('recap');
}

exports.flashcards = (req, res) => {
    res.render('flashcards');
}

exports.calendar = (req, res) => {
    res.render('calendar');
}

exports.mailbox = (req, res) => {
    res.render('mailbox');
}