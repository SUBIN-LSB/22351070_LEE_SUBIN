// 헤더와 푸터 부분 스크립트
document.addEventListener("DOMContentLoaded", function() {
    // 페이지가 로딩된 후 실행될 코드
    setTimeout(function() {
        document.querySelector("header").style.height = "50px";
        document.querySelector("footer").style.height = "50px";
        document.querySelector("main").style.height = "800px";
    }, 5000); 
});


// 랜딩 페이지에 들어가는 마법진 애니메이션
    document.addEventListener("DOMContentLoaded", function() {
const magicCircle = document.querySelector(".magic-circle");
const lines = magicCircle.querySelectorAll("div");

lines.forEach(line => {
    line.style.animation = "drawLine 4.5s forwards";
});
});


// 랜딩 페이지를 홈 페이지로 자동 전환
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const landingPage = document.querySelector('.content.landing');
        const homePage = document.querySelector('.content.home');
        
        landingPage.classList.remove('active');
        homePage.classList.add('active');
        
        // 활성 메뉴 표시
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        const homeMenuItem = document.querySelector('.menu-item[data-target="home"]');
        homeMenuItem.classList.add('active');
    }, 5000); // 5초 후에 전환됨
});


// 메뉴 바 부분 스크립트
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const contents = document.querySelectorAll(".content");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            // 모든 내용 숨김
            contents.forEach(content => {
                content.classList.remove("active");
            });

            // 클릭한 메뉴에 해당하는 내용만 표시
            const target = this.getAttribute("data-target");
            const content = document.querySelector("." + target);
            content.classList.add("active");

            // 활성 메뉴 표시
            menuItems.forEach(item => {
                item.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});


// 두번째 메뉴에 관한 스크립트부분 입니다.
        document.addEventListener("DOMContentLoaded", function () {
            const toggleButton = document.getElementById("toggleButton");
            const contents = document.querySelectorAll(".content2-random2-1, .content2-random2-2, .content2-random2-3");

            toggleButton.addEventListener("click", function () {
                contents.forEach(content => {
                    content.classList.toggle("active");
                });

                this.style.display = "none";
            });
        });


//네번째 메뉴에 관한 스크립트부분 입니다.
        document.addEventListener("DOMContentLoaded", function () {
            const slides = document.querySelectorAll(".content_menu4");
            let currentSlide = 0;
        
            function showSlide(n) {
                slides[currentSlide].classList.remove("active");
                currentSlide = (n + slides.length) % slides.length;
                slides[currentSlide].classList.add("active");
            }
        
            function nextSlide() {
                showSlide(currentSlide + 1);
            }
        
            function prevSlide() {
                showSlide(currentSlide - 1);
            }
        
            const nextBtn = document.querySelector(".next");
            const prevBtn = document.querySelector(".prev");
        
            nextBtn.addEventListener("click", nextSlide);
            prevBtn.addEventListener("click", prevSlide);
        });