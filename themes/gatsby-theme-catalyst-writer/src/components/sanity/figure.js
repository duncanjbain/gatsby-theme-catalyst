/** @jsx jsx */
import { jsx } from "theme-ui";
import Img from "gatsby-image";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "./client-config";

export default ({ node }) => {
  if (!node.asset) {
    return null;
  }

  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 1440 },
    clientConfig.sanity
  );

  return (
    <figure>
      <Img fluid={fluidProps} alt={node.alt} />
      {node.caption && (
        <figcaption
          sx={{
            color: "grey",
            fontSize: 2,
            textAlign: "center"
          }}
        >
          {node.caption}
        </figcaption>
      )}
    </figure>
  );
};