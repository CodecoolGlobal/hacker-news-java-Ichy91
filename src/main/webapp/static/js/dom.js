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
        console.log("Top News Button pressed!");
        dataHandler.getData("https://api.hnpwa.com/v0/news/1.json", (response) => {
            dom.upload(response);
        })
    },

    newest: function() {
        console.log("Top Newest pressed!")
    },

    jobs: function() {
        console.log("Top Jobs Button pressed!")
        dataHandler.getData("https://api.hnpwa.com/v0/jobs/1.json", (response) => {
            dom.upload(response);
        })
    },

    upload: function (datas) {
        console.log(datas);
        let map = document.querySelector('#map');
        map.innerHTML = '';

        let cards = ``;

        for (let data of datas) {
            cards += `<div class=folder>
                    <p>${data.title}</p>
                    <p>${data.time_ago}</p>
                    <p>${data.url}</p>
                    </div>`;
        }

        map.insertAdjacentHTML('afterbegin', cards);
    }
};

dom.init();