export default function QuotesView(props) {
    let html = `
<div class="container">
    <h1>Quotes</h1>
    `;
    for(let i = 0; i < props.quotes.length; i++) {
        html += `
    <div class="card">
        <div class="card-body">
            <p>${props.quotes[i].quote}</p>
            <p>${props.quotes[i].author}</p>
        </div>
    </div>
        `
    }
    html += `
    <button class="form-control" id="show-fact-btn">Show Fact</button>
</div>
`;
    return html;
}

export function QuotesEvents() {
    addQuote();
    addAllQuotes();
}

function giveMeQuotes(){
    let quotes = [
        {
            quote: "War is organized murder and torture against our brothers.",
            author: "Alfred Adler"
        },
        {
            quote: "Follow sound business trends, not fashion trends.",
            author: "Janice Dickinson"
        },
        {
            quote: "I'm sure we, the American people, are the butt of jokes by those in power.",
            author: "Alice Walker"
        },
        {
            quote: "If the security forces continue to be dominated as they are now by political groups or sects, then the people won't trust in them - and the result will be civil war or fragmentation of the country.",
            author: "Adnan Pachachi"
        },
        {
            quote: "We prefer world law in the age of self-determination to world war in the age of mass extermination.",
            author: "John F. Kennedy"
        },
        {
            quote: "I got a lovely check today from being a writer that I earned by sitting at home. That's rewarding.",
            author: "Harvey Fierstein"
        },
        {
            quote: "I think God's justice is making wrongs right.",
            author: "Joel Osteen"
        },
        {
            quote: "For it is mutual trust, even more than mutual interest that holds human associations together. Our friends seldom profit us but they make us feel safe. Marriage is a scheme to accomplish exactly that same end.",
            author: "H. L. Mencken"
        },
        {
            quote: "If science fiction is the mythology of modern technology, then its myth is tragic.",
            author: "Ursula K. Le Guin"
        },
        {
            quote: "Men, when they fight in movies, it's a very different style. Harrison Ford was so cool when he had the whip, and Bruce Lee was such an artist that you couldn't take your eyes off of him.",
            author: "Lucy Liu"
        },
    ]
    return quotes;
}

function addQuote(){
    let quotes = giveMeQuotes();
    const button = document.querySelector("#add-quote");
    const divAppend = document.querySelector("#my-quotes");

    button.addEventListener("click",function (){
        divAppend.innerHTML = "<h1> - " + quotes[Math.floor(Math.random() * quotes.length)].quote + "</h1>"
    })
}
function addAllQuotes(){
    let quotes = giveMeQuotes();
    const button = document.querySelector("#add-all-quote");
    const divAppend = document.querySelector("#my-quotes");
    button.addEventListener("click",function (){
        for (var i = 0; i<quotes.length; i++){
            divAppend.innerHTML += "<h1> - " + quotes[i].quote + "</h1>"
        }    })
}


