export default function dogFactsHTMLFunction(props) {
    let html = `
<div class="container">
    <h1>Dog Facts</h1>
    `;
    for(let i = 0; i < props.dogFacts.length; i++) {
        html += `
    <div class="card">
        <div class="card-body">
            <p class="dog-fact" style="visibility: hidden">${props.dogFacts[i]}</p>
        </div>
    </div>
        `
    }
    html += `
    <button class="form-control" id="show-fact-btn">Show Fact</button>
    <a data-link href="/insert-dog-fact">Insert Dog Fact</a>
</div>
`;
    return html;
}

export function DogFactsEvents() {
    const btn = document.querySelector("#show-fact-btn");
    btn.addEventListener("click", function(event) {
        const facts = document.querySelectorAll(".dog-fact");
        for (let i = 0; i < facts.length; i++) {
            facts[i].style.visibility = "";
        }
    });
}