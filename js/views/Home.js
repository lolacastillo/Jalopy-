import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function Home(props) {
    return `
        <header>
            <h1 style="text-align: center">Hello Jalopy!</h1>
        </header>
        <main>
            <div>
            <img id="jalopy-photo" src="assets/jalopy1.jpeg"/>
                <p>
                    Welcome to my Jalopy application!
                </p>
                <button id="img-button">Button</button>
            </div>
        </main>
    `;
}

export function HomeEvents() {
    var imgBtn = document.querySelector("#img-button");
    var imgJalopy = document.querySelector("#jalopy-photo");
    imgBtn.addEventListener("click", function(){
        if (imgJalopy.src === "http://localhost:9000/assets/jalopy1.jpeg") {
            imgJalopy.src = "http://localhost:9000/assets/jalopy2.jpeg"
        }else if(imgJalopy.src === "http://localhost:9000/assets/jalopy2.jpeg"){
            imgJalopy.src = "http://localhost:9000/assets/jalopy3.jpeg"
        }else{
            imgJalopy.src = "http://localhost:9000/assets/jalopy1.jpeg"
        }

})
}