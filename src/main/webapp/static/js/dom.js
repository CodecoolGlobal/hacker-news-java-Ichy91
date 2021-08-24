import {dataHandler} from "./dataHandler.js";

let dom = {
    init: function () {
        this.initNavbar();
    },

    initNavbar: function () {
        let topNewsButton = document.querySelector('#top-news');
        let newestButton = document.querySelector('#newest');
        let jobsButton = document.querySelector('#jobs');

        topNewsButton.addEventListener('click', this.topNews);
        newestButton.addEventListener('click', this.newest);
        jobsButton.addEventListener('click', this.jobs);
    },

    topNews: function() {
        console.log("Top News Button pressed!")
    },

    newest: function() {
        console.log("Top Newest pressed!")
    },

    jobs: function() {
        console.log("Top Jobs Button pressed!")
    },
};

dom.init();