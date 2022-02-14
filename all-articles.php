<?php $title='Все статьи'; include 'templates/header.php'; ?>

<section class="banner banner__articles">
    <div class="container">
        <div class="banner__wrapper">
            <div class="banner__wrapper-content">
                <div class="banner__articles-info">
                    <div class="info__date">03 ноября 2021</div>
                    <div class="info__view">
                        <img src="images/icons/view.svg" alt="">
                        1056
                    </div>
                </div>
                <h1 class="banner__title">Плюсы и минусы регистрации в качестве плательщика НДС в Грузии</h1>
                <div class="banner__articles-author">
                    <div class="author__avatar">
                        <img src="images/pictures/author__avatar.png" alt="">
                    </div>
                    <div class="author__name">Бека Шукакидзе</div>
                </div>
                <div class="banner__inner">
                    <img src="images/pictures/banner__articles-img.png" alt="">
                </div>
                <button class="btn btn-hover banner__btn">Читать статью</button>
            </div>
        </div>
    </div>
</section>

<section class="newarticles default_block" style="margin-top: 50px">
    <div class="container">
        <div class="newarticles__title">Новые статьи</div>

        <div class="newarticles__wrapper">
            <div class="articles_loader"></div>

            <div class="newarticles__firstarticle">
				
            </div>
            <div class="newarticles__secondarticle-wrapper">

            </div>
        </div>
    </div>
</section>

<section class="categoryofarticles default_block">
    <div class="container">
        <div class="categoryofarticles__title">Статьи по категориям</div>
        <div class="categoryofarticles__tabs">
            <div class="categoryofarticles__tabs-item active">ВНЖ и инвестиции</div>
            <div class="categoryofarticles__tabs-item">Налоги</div>
            <div class="categoryofarticles__tabs-item">Открытие счета</div>
            <div class="categoryofarticles__tabs-item">Регистрация бизнеса</div>
            <div class="categoryofarticles__tabs-item">Финансовая и налоговая отчетность</div>
        </div>

        <div>
            <div class="categoryofarticles__articles grid3col">

                <div class="articles_loader">
                </div>

            </div>
            <div class="categoryofarticles__pagination">
                <button class="categoryofarticles__pagination-leftbtn">
                    <img src="images/icons/pagination-leftbtn.svg" alt="">
                </button>
                <div class="categoryofarticles__pagination-points">
                    <a class="active" href="">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                    <a href="">4</a>
                    <a href="">5</a>
                    <a href="">6</a>
                    <span>...</span>
                    <a href="">15</a>
                    <a href="">16</a>
                </div>
                <button class="categoryofarticles__pagination-rightbtn">
                    <img src="images/icons/pagination-rightbtn.svg" alt="">
                </button>
            </div>
        </div>
</section>



<?php $non_default_page = true; $scripts = array("articles/data_fetch.js"); include 'templates/footer.php'; ?>