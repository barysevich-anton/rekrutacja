const sliderBlock = document.getElementById('result')

fetch('https://quantoo.pl/jobs/api/swiper/list.json')
    .then((res) => res.json())
    .then(data => setObj(data))

    function setObj({items}){
        document.body.insertAdjacentHTML('afterend', `
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                ${setItems(items)}
            </div>
            <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
         </div>
            
        `)
    }

function setItems(items){
    return items.map(
        slide => `
        <div class="swiper-slide">
            <img src="${slide.img}" class="img">
            <h1 class="title">${slide.name}</h1>
            <p class="lead">${slide.lead}</p>
            <h3 class="price">${slide.price}</h3>
            </div>
        `)
        .join(' ')
}
