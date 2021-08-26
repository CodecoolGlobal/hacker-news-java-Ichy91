const state = {
  topic: null,
  maxPage: 0,
  actualPage: 0,
};

let dom = {
    init: function () {
        this.initNavbar();
        dataHandler.getData("https://api.hnpwa.com/v0/news/1.json", (response) => {
            dom.upload(response);
        })
    },

    initNavbar: function () {
        let topNewsButton = document.querySelector('#top-news');
        let newestButton = document.querySelector('#newest');
        let jobsButton = document.querySelector('#jobs');

        topNewsButton.addEventListener('click', this.loadNews);
        newestButton.addEventListener('click', this.loadNews);
        jobsButton.addEventListener('click', this.loadJobs);
    },

    loadNews: function() {
        state.topic = this.dataset.topic;
        state.maxPage = this.dataset.maxPage;
        state.actualPage = 1;

        dataHandler.getData("/json?topic=" + state.topic + "&page=" + state.actualPage, (response) => {
            dom.upload(response);
            dom.loadPagers();
            dom.initPagers();
        })
    },

    loadJobs: function() {
        dom.cleanPagers();

        state.topic = this.dataset.topic;
        state.maxPage = this.dataset.maxPage;
        state.actualPage = 1;

        dataHandler.getData("/json?topic=" + state.topic + "&page=" + state.actualPage, (response) => {
            dom.upload(response);
        })
    },

    initPagers: function() {
        let previousPager = document.querySelector('#previous');
        let nextPager = document.querySelector('#next');

        previousPager.addEventListener('click', this.loadPreviousPage);
        nextPager.addEventListener('click', this.loadNextPage);
    },

    loadPreviousPage: function() {
        state.actualPage -= 1;

        if (state.actualPage <= 1) document.querySelector('#previous').disabled = true;
        if (state.actualPage < state.maxPage) document.querySelector('#next').disabled = false;

        dataHandler.getData("/json?topic=" + state.topic + "&page=" + state.actualPage, (response) => {
            dom.upload(response);
        })
    },

    loadNextPage: function() {
        state.actualPage += 1;

        if (state.actualPage > 1) document.querySelector('#previous').disabled = false;
        if (state.actualPage >= state.maxPage) document.querySelector('#next').disabled = true;

        dataHandler.getData("/json?topic=" + state.topic + "&page=" + state.actualPage, (response) => {
            dom.upload(response);
        })
    },

    loadPagers: function() {
        let pagersDiv = document.querySelector("#pagers");
        pagersDiv.innerHTML = "";

        let pagers = `
            <button id="previous" type="button" class="btn btn-primary" disabled>Previous</button>
            <button id="next" type="button" class="btn btn-success">Next</button>`;

        pagersDiv.insertAdjacentHTML('afterbegin', pagers);
    },

    cleanPagers: function() {
        let pagersDiv = document.querySelector("#pagers");
        pagersDiv.innerHTML = "";
    },

    upload: function (datas) {
        let map = document.querySelector('#map');
        map.innerHTML = '';

        let cards = ``;

        for (let data of datas) {
            cards += `
                <div class="column">
                    <div class="card">
                        <a href="${data.url}">${data.title}</a><br>
                        <p>${data.time_ago}</p>`;

            if (data.user != null)
                cards += `<p>${data.user}</p>`;

            cards += `</div></div>`;
        }

        map.insertAdjacentHTML('afterbegin', cards);
    }
};

dom.init();