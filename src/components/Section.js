export default function Section(props) {
    return (
        <section class="section">
            <div>
                <ul>
                    { props.children }
                </ul>
            </div>
        </section>
    )
}