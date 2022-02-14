document.addEventListener('DOMContentLoaded', function() {

    const articles_const = document.querySelector('.categoryofarticles__articles')

    const articles_loader = document.querySelector('.newarticles__wrapper')






    fetch("articles/data.json")
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {

            articles_loader.innerHTML = `<div class="newarticles__firstarticle">
				
            </div>
            <div class="newarticles__secondarticle-wrapper">

            </div>`
            console.log(data.channel.item);
            const articles = data.channel.item

            articles.forEach((article, i) => {
                const new_articles_const = document.querySelector('.newarticles__firstarticle')
                if (i < 1) {
                    new_articles_const.innerHTML += `
               
                  <div class="newarticles__firstarticle-img">
                      <img src="images/pictures/articles-img1.png" alt="">
                  </div>
                  <div class="newarticles__firstarticle-title text-hover">
                      <a href=""> ${article.title.__cdata} </a>
                  </div>
                  <div class="newarticles__firstarticle-info">
                      <div class="banner__articles-author">
                          <div class="author__avatar">
                              <img src="images/pictures/author__avatar.png" alt="">
                          </div>
                          <div class="author__name">${article.creator.__cdata}</div>
                      </div>
                      <div class="banner__articles-info">
                          <div class="info__date">${article.post_date.__cdata.split(' ')[0]}</div>
                          <div class="info__view">
                              <img src="images/icons/view.svg" alt="">
                              889
                          </div>
                      </div>
                  </div>
                    `

                }

            })



            articles.forEach((article, i) => {
                const second_article_const = document.querySelector('.newarticles__secondarticle-wrapper')
                if (i < 4) {
                    second_article_const.innerHTML += `
                    <div class="newarticles__secondarticle-item">
                    <div class="newarticles__secondarticle-item-title text-hover">
                        <a href=""> ${article.title.__cdata} </a>
                    </div>
                    <div class="newarticles__secondarticle-item-info">
                        <div class="banner__articles-author">
                            <div class="author__avatar">
                                <img src="images/pictures/author__avatar.png" alt="">
                            </div>
                            <div class="author__name">${article.creator.__cdata}</div>
                        </div>
                        <div class="banner__articles-info">
                            <div class="info__date">${article.post_date.__cdata.split(' ')[0]}</div>
                            <div class="info__view">
                                <img src="images/icons/view.svg" alt="">
                                889
                            </div>
                        </div>
                    </div>
                </div>
                    `
                }

            })


            articles_const.innerHTML = ''
            articles.forEach((article, i) => {

                if (i < 6) {

                    articles_const.innerHTML += `
                    <div class="categoryofarticles__articles-item">
			        	<div class="categoryofarticles__articles-item__img">
			        		<img src="images/pictures/articles-img2.png" alt="">
			        	</div>
			        	<div class="categoryofarticles__articles-item__title text-hover">
			        		<a href=""> ${article.title.__cdata} </a>
			        	</div>
			        	<div class="categoryofarticles__articles-item__info">
			        		<div class="banner__articles-author">
			        			<div class="author__avatar">
			        				<img src="images/pictures/author__avatar.png" alt="">
			        			</div>
			        			<div class="author__name">${article.creator.__cdata}</div>
			        		</div>
			        		<div class="banner__articles-info">
			        			<div class="info__date">${article.post_date.__cdata.split(' ')[0]} </div>
			        			<div class="info__view">
			        				<img src="images/icons/view.svg" alt="">
			        				1056
			        			</div>
			        		</div>
			        	</div>
			        </div>
                `
                }
            });





        })



})