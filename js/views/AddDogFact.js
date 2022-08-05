import createView from "../createView.js"

export default function InsertDogView(props) {
    return `
<form class="container">
    <h1>New Dog Fact</h1>
    <form>
        <label for="dogFactText" class="form-label">Dog fact</label>
        <input class="form-control" list="datalistOptions" id="dogFactText" placeholder="Enter a new dog fact">
        <button class="form-control" id="insert-btn">Insert Fact</button>
    </form>
</div>
`;
}

export function InsertDogFactEvents() {
}