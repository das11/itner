var app = new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        isPreviousSlide: false,
        isFirstLoad: true,
        slides: [
            {
                headlineFirstLine: "Electrifying",
                headlineSecondLine: "our nation",
                sublineFirstLine: "Know where your tax money go",
                sublineSecondLine: "go",
                bgImg: "assets/img/slider/5a.jpg",
                rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg",
                test: ""
            },
            {
                headlineFirstLine: "Healthcare",
                headlineSecondLine: "To Every Soul",
                sublineFirstLine: "Know where your tax money go",
                sublineSecondLine: "go",
                bgImg: "assets/img/slider/8a.jpg",
                rectImg: "https://i.postimg.cc/vTW0XkvM/slide-rect0.jpg",
                test: ""
            },
            {
                headlineFirstLine: "Preserving our",
                headlineSecondLine: "Wildlife Reserves",
                sublineFirstLine: "Know where your tax money go",
                sublineSecondLine: "go",
                bgImg: "assets/img/slider/7a.jpg",
                rectImg: "https://i.postimg.cc/ryWZ8R2b/slide-rect1.jpg",
                test: ""
            },
            {
                headlineFirstLine: "Providing",
                headlineSecondLine: "Mid-day meals",
                sublineFirstLine: "Know where your tax money go",
                sublineSecondLine: "go",
                bgImg: "assets/img/slider/6a.jpg",
                rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg",
                test: ""
            },
            {
                headlineFirstLine: "Aids to",
                headlineSecondLine: "Natural Calamities",
                sublineFirstLine: "Know where your tax money go",
                sublineSecondLine: "go",
                bgImg: "assets/img/slider/3a.jpg",
                rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg",
                test: ""
            }
        ]
    },
  mounted: function () {
    var productRotatorSlide = document.getElementById("app");
        var startX = 0;
        var endX = 0;

        productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchend", function(event) {
            var threshold = startX - endX;

            if (threshold < 150 && 0 < this.currentSlide) {
                this.currentSlide--;
            }
            if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            }
        }.bind(this));
  },
    methods: {
        updateSlide(index) {
            index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
            this.currentSlide = index;
            this.isFirstLoad = false;
        }
    }
})