AOS.init();


let realData;
const quotes=document.querySelector("#quotes");
const author=document.querySelector("#author");
const button=document.querySelector('#newQuotes');
const tweet=document.querySelector('#tweetMe');

const getQuotes=async()=>
{
    const api="https://api.quotable.io/random";
    try{
        let data=await fetch(api);
         realData=await data.json();
        console.log(realData.content);
        quotes.innerText=realData.content;
        author.innerText=realData.author;
    }catch(error){}
};

getQuotes();

button.addEventListener('click',()=>
{
    getQuotes();
});

tweet.addEventListener('click',()=>
{
    let tweetPost=`https://twitter.com/intent/tweet?text=${realData.content}`;
    window.open(tweetPost);
});

