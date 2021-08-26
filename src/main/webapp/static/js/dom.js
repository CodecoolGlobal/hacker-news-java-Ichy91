const state = {
  topic: null,
  maxPage: 0,
  actualPage: 1,
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

        topNewsButton.addEventListener('click', this.news);
        newestButton.addEventListener('click', this.news);
        jobsButton.addEventListener('click', this.jobs);
    },

    news: function() {
        state.topic = this.dataset.topic;
        state.maxPage = this.dataset.maxPage;
        dataHandler.getData("/json?topic=" + state.topic + "&page=" + state.actualPage, (response) => {
            dom.upload(response);
            dom.loadPagers();
        })
    },

    jobs: function() {
        state.topic = this.dataset.topic;
        state.maxPage = this.dataset.maxPage;
        dom.cleanPagers();
        dataHandler.getData("/json?topic=" + state.topic + "&page=" + state.actualPage, (response) => {
            dom.upload(response);
        })
    },

    loadPagers: function() {
        let pagersDiv = document.querySelector("#pagers");
        pagersDiv.innerHTML = "";

        let pagers = `
            <button type="button" class="btn btn-primary" data-previous-page="" disabled>Previous</button>
            <button type="button" class="btn btn-success" data-next-page="">Next</button>`;

        pagersDiv.insertAdjacentHTML('afterbegin', pagers);
    },

    cleanPagers: function() {
        let pagersDiv = document.querySelector("#pagers");
        pagersDiv.innerHTML = "";
    },

    upload: function (datas) {
        console.log(datas);
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