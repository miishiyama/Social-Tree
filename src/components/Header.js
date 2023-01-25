import Photo from "../assets/photo.png"

export default function Header() {
    return (
        <header>
            <div>
                <img src={Photo} />
                <h1>
                    @instagram
                </h1>
            </div>
        </header>
    )
}