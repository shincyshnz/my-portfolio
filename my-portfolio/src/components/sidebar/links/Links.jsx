import { SIDEBAR_LINKS } from "../../../constants"

const Links = () => {
  return (
    <div className="links">
      {SIDEBAR_LINKS.map((item, index) => (
        <a href={`#${item.link}`} key={index}>{item.text}</a>
      ))}
    </div>
  )
}

export default Links