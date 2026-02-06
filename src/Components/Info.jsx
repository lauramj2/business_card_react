import img from "../Assets/pic-cropped.jpg"

export default function Info() {
    return (
        <div id="info">
            <img src={img} />
            <div id="info-text">
                <h1>Laura Johnson</h1>
                <p>Software Engineer Intern</p>
            </div>
            <button>Email</button>
        </div>
    )
}