const state = {
  topic: null,
  maxPage: 0,
  actualPage: 1,
};

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
        state.topic = this.dataset.topic;
        state.maxPage = this.dataset.maxPage;
        dataHandler.getData("/json?topic=" + state.topic + "&page=" + state.actualPage, (response) => {
            dom.upload(response);
        })
    },

    newest: function() {
        console.log("Top Newest pressed!")
        state.topic = this.dataset.topic;
        state.maxPage = this.dataset.maxPage;
        dataHandler.getData("/json?topic=" + state.topic + "&page=" + state.actualPage, (response) => {
            dom.upload(response);
        })
    },

    jobs: function() {
        console.log("Top Jobs Button pressed!")
        state.topic = this.dataset.topic;
        state.maxPage = this.dataset.maxPage;
        dataHandler.getData("/json?topic=" + state.topic + "&page=" + state.actualPage, (response) => {
            dom.upload(response);
        })
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