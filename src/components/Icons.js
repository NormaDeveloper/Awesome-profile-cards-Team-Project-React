const Icons = ({data, liClass, title, href, iconClass}) => {
    return (
<li className={`card__bar--icons colorChoice${data.palette}`}>
          <a
            className={liClass}
            title={title}
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <i className={iconClass}></i>
          </a>
        </li>
    )
}

export default Icons;