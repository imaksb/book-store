// import data from '../../data/comics.json' //assert { type: 'json' };
console.log(JSON.parse( books));
let json_book = JSON.parse(books);
let shop = `<div class="product">
<img src="assets/images/thriller/59421_118622_d.jpg" alt="" />
<h4>TITLE</h4>
<p class="author">author</p>
<p>DESC</p>
</div>`

console.log(json_book['books'][0])

for(book in json_book['books']) {
    let item = json_book['books'][book]
    $('.products').append( `<div class="product">
    <img src="assets/images/comics/${item["image_name"]}" alt="" />
   <div class="book-detail">
   <h4>${item["title"]}</h4>
    <p class="author">${item['author']}</p>
    <p>${item['description'].slice(0, 50)}</p>
    </div>`
    );
}

  