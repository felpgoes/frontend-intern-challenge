
let urlData = [
        {
            "id": "23094",
            "hits": 1003,
            "url": "http://globo.com",
            "shortUrl": "http://chr.dc/9dtr4"
        },
        {
            "id": "76291",
            "hits": 1922,
            "url": "http://google.com",
            "shortUrl": "http://chr.dc/aUx71"
        },
        {
            "id": "66761",
            "hits": 765,
            "url": "http://terra.com.br",
            "shortUrl": "http://chr.dc/u9jh3"
        },
        {
            "id": "70001",
            "hits": 1519,
            "url": "http://facebook.com",
            "shortUrl": "http://chr.dc/qy61p"
        },
        {
            "id": "21220",
            "hits": 311,
            "url": "http://diariocatarinense.com.br",
            "shortUrl": "http://chr.dc/87itr"
        },
        {
            "id": "10743",
            "hits": 722,
            "url": "http://uol.com.br",
            "shortUrl": "http://chr.dc/y81xc"
        },
        {
            "id": "19122",
            "hits": 1320,
            "url": "http://chaordic.com.br",
            "shortUrl": "http://chr.dc/qy5k9"
        },
        {
            "id": "55324",
            "hits": 997,
            "url": "http://youtube.com",
            "shortUrl": "http://chr.dc/1w5tg"
        },
        {
            "id": "70931",
            "hits": 487,
            "url": "http://twitter.com",
            "shortUrl": "http://chr.dc/7tmv1"
        },
        {
            "id": "87112",
            "hits": 130,
            "url": "http://bing.com",
            "shortUrl": "http://chr.dc/9opw2"
        }
      ];
      
var total = 0

const totalHits = () => {
    
    for (let count = 0; count < 10; count++) {
        let hits = urlData[count].hits; 
        total += hits           
    }

    let totalHits = document.getElementById("totalHits");
    totalHits.innerHTML = total;

}

const topFive = () => {

    function compararNumeros(a,b){
        return b.hits - a.hits;
    };

    const newSortedData = urlData.sort(compararNumeros);

    for(let i = 0; i < 5; i++){
        let id = `link-${i}`;
        let quantity = `quantity-${i}`;

        let topFiveUrl = document.getElementById(String(id));
        topFiveUrl.innerHTML = newSortedData[i].url;
        let topFiveHits = document.getElementById(String(quantity));
        topFiveHits.innerHTML = newSortedData[i].hits;

    }
}


window.onload = pageLoad = () => {
        
    totalHits();
    topFive();
    
}




