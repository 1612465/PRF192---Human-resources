const search = document.getElementById("search");
const searchNew = document.getElementById("sNew");
const New = document.getElementById("New");
const load = document.getElementById("loader") 
const key = 'ed3b75768b4c9b0a6e551da664cd601b';

search.addEventListener("click", function(x){
    x.preventDefault();
    New.innerHTML = "";
    let url1 =`https://gnews.io/api/v4/search?q=${searchNew.value}&token=${key}`;

    if(searchNew.value) {
         load.style.display = 'block';
        load.style.display = 'none';
        fetch(url1)
        .then(res => {
            if(!res.ok) {
                throw res.statusText + "__" + res.url1;
            } 
            return res.json();
        })
        .then(data => {
            data.articles.forEach(article => {
                let a =`
                    <div class="col-md-12 col-lg-3 col-xs-12 col-sm-12 my-3">
                        <img class="img-fluid" src="${article   .image}" alt="${article.title}">
                    </div>
                    <div class="col-md-12 col-lg-9 col-xs-12 col-sm-12 my-3">
                        <h2>
                            <a href="${article.url}" target="_blank">${article.title}</a>
                        </h2>
                        <p>${article.publishedAt}</p>
                        <p>${article.description}</p>
                        
                    </div>
                `;
                New.innerHTML += a;
            });
        })
        .catch(err => {
            console.log(err);
        })
    } else {
        alert("Vui lòng nhập dữ liệu tìm kiếm!");
    }
});


fetch(`https://gnews.io/api/v4/top-headlines?&token=${key}`)
.then(res => res.json())
.then(data => {
    data.articles.forEach(article => {
        let a =`
            <div class="col-md-12 col-lg-3 col-xs-12 col-sm-12 my-3">
                <img class="img-fluid" src="${article.image}" alt="${article.title}">
            </div>
            <div class="col-md-12 col-lg-9 col-xs-12 col-sm-12 my-3">
                <h2>
                    <a href="${article.url}" target="_blank">${article.title}</a>
                </h2>
                <p>${article.publishedAt}</p>
                <p>${article.description}</p>
               
            </div>
        `;
        New.innerHTML += a;
    });
});