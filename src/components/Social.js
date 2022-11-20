export default function Social(props) {
    return (
        <li class="social">
            <a class="social-link" target="_blank" rel="noreferrer" href={props.url}>
                <img class="social-img" src={props.logo} />
            </a>
        </li>
    )
}