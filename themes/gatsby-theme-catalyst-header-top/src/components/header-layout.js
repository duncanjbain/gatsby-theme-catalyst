/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"

const HeaderLayout = ({ children }) => {
  const [isNavOpen] = useContext(NavContext)
  const { theme } = useThemeUI()

  return (
    <div
      sx={{
        gridRow: "1 / -1",
        gridColumn: "1 / -1",
        alignSelf: "start",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gridTemplateRows: [
          theme.sizes.headerHeight + " 1fr",
          null,
          theme.sizes.headerHeight,
          null,
          null,
        ],
        maxWidth: "maxPageWidth",
        width: "100%",
        height: isNavOpen ? "100vh" : "auto",
        minHeight: "50px",
        m: "0 auto",
        px: [1, null, 3, null, null],
        py: [1, null, 2, null, null],
      }}
    >
      {children}
    </div>
  )
}

export default HeaderLayout
