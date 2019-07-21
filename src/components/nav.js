/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"

const siteNav = props => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              menuLinks {
                name
                link
              }
            }
          }
        }
      `)
      return (
        <nav
          sx={{
            gridColumn: ["1 / -1", "2 / 3", null],
            gridRow: ["2 / 3", "1 / 2", null],
            justifySelf: ["center", "end", null],
            alignSelf: "center",
            height: [props.open ? "calc(100vh - 60px)" : 0, "auto", null],
            marginTop: [props.open ? "1rem": 0, 0, null],
          }}
          role="navigation"
          aria-label="main-navigation"
        >
          <ul
            sx={{
              display: [props.open ? "flex" : "none", "flex", null],
              flexDirection: ["column", "row", null],
              listStyle: "none",
              margin: "0",
              padding: "0",
            }}
            aria-label="menu-bar"
            role="menubar"
          >
            {data.site.siteMetadata.menuLinks.map(link => (
              <li
                key={link.name}
                sx={{
                  margin: ["0 0.75em", "0", null],
                  padding: "0.5em",
                }}
                role="none"
              >
                <Link
                  to={link.link}
                  sx={{
                    color: props.open ? "header.textOpen" : "header.text",
                    fontSize: [4, 3, null],
                    textDecoration: "none",
                    padding: "1rem 0.5rem",
                  }}
                  role="menuitem"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
  )
}

export default siteNav
