import React from "react"
import PropTypes from "prop-types"
import { Parallax } from "react-scroll-parallax"

import ImageLoader from "../../image_loader"
import useWindowSize from "../../../utils/use_window_size"

const absoluteStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
}

const ParallaxImage = ({
  baseDelay,
  alt,
  mobileImage,
  desktopImage,
  objectPosition,
  mobileTopMargin,
  mobileBottomMargin,
  desktopTopMargin,
  desktoBottomMargin,
}) => {
  const size = useWindowSize()

  return (
    <div
      style={{
        overflow: "hidden",
        position: "unset !important",
      }}
    >
      <Parallax
        y={[-15, 15]}
        styleInner={absoluteStyle}
        styleOuter={{
          ...absoluteStyle,
          marginTop: size.width > 400 ? desktopTopMargin : mobileTopMargin,
          marginBottom:
            size.width > 400 ? desktoBottomMargin : mobileBottomMargin,
        }}
      >
        <ImageLoader
          delay={baseDelay}
          imgStyle={{ objectPosition }}
          fluid={[
            {
              ...mobileImage,
              media: "(max-width: 399px)",
            },
            {
              ...desktopImage,
              media: "(min-width: 400px)",
            },
          ]}
          alt={alt}
        />
      </Parallax>
    </div>
  )
}

ParallaxImage.propTypes = {
  baseDelay: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  mobileImage: PropTypes.object.isRequired,
  desktopImage: PropTypes.object.isRequired,
  objectPosition: PropTypes.string.isRequired,
  mobileTopMargin: PropTypes.string.isRequired,
  mobileBottomMargin: PropTypes.string.isRequired,
  desktopTopMargin: PropTypes.string.isRequired,
  desktoBottomMargin: PropTypes.string.isRequired,
}

export default ParallaxImage
