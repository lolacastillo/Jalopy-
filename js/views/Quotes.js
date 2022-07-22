export default function QuotesView(props) {
    return `
<div id="my-quotes"></div>
`
}

export function QuotesEvents() {
    addQuote();
}



function addQuote(){
    const divApp = document.querySelector("#my-quotes");
    divApp.innerHTML = "<h1>" + giveMeQuotes[0] + "</h1>"
}

function giveMeQuotes(){
    let quoteArr = [
        "War is organized murder and torture against our brothers.",
        "Follow sound business trends, not fashion trends.",
        "I'm sure we, the American people, are the butt of jokes by those in power.",
        "If the security forces continue to be dominated as they are now by political groups or sects, then the people won't trust in them - and the result will be civil war or fragmentation of the country.",
        "We prefer world law in the age of self-determination to world war in the age of mass extermination.",
        "I got a lovely check today from being a writer that I earned by sitting at home. That's rewarding.",
        "I think God's justice is making wrongs right.",
        "For it is mutual trust, even more than mutual interest that holds human associations together. Our friends seldom profit us but they make us feel safe. Marriage is a scheme to accomplish exactly that same end.",
        "If science fiction is the mythology of modern technology, then its myth is tragic.",
        "Men, when they fight in movies, it's a very different style. Harrison Ford was so cool when he had the whip, and Bruce Lee was such an artist that you couldn't take your eyes off of him."
    ]
    return quoteArr;

}