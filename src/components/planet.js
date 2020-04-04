import React from "react"
import PropTypes from "prop-types"
import _uniqueId from "lodash/uniqueId"

import {
  generateAnimation,
  buildAnimationStyles,
} from "./planet/animation_utils"
import AnimationStyle from "./planet/animation_style"
import RadialGradient from "./planet/radial_gradient"
import { withMorphStyle } from "../utils/morph_utils"
import useDetectAnimations from "../utils/use_detect_animations"

import styles from "./planet.module.css"

const renderAnimationStyle = ({ animationsEnabled, animation, hovering }) => {
  if (!animationsEnabled) return null

  return <AnimationStyle {...animation} hovering={hovering} />
}

const Planet = ({ color, hide, hoverAnimation, hovering, morph }) => {
  const animationsEnabled = useDetectAnimations()

  if (hide) return null

  const animation = generateAnimation(hoverAnimation)
  const animatedRootStyle = buildAnimationStyles(animation)
  const [rootStyle, newMorph] = withMorphStyle(morph, animatedRootStyle)
  const radialID = _uniqueId("planet-radial-")

  return (
    <>
      {renderAnimationStyle({ animationsEnabled, animation, hovering })}
      <div className={styles.root} style={rootStyle} {...newMorph}>
        <svg
          viewBox="0 0 104 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.planet}
        >
          <circle cx="52" cy="50" r="50" fill={`url(#${radialID})`} />

          <defs>
            <RadialGradient color={color} id={radialID} />
          </defs>
        </svg>
      </div>
    </>
  )
}

Planet.propTypes = {
  color: PropTypes.string.isRequired,
  hide: PropTypes.bool,
  hoverAnimation: PropTypes.shape({
    delay: PropTypes.number,
    duration: PropTypes.number,
    endYAt: PropTypes.number,
  }),
  hovering: PropTypes.bool,
  morph: PropTypes.func,
}

Planet.defaultProps = {
  hoverAnimation: {},
  hovering: false,
  morph: () => {},
}

export default Planet
