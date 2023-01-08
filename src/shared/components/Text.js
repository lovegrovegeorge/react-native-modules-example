import React from 'react'
import { Text as RNText } from 'react-native'

const Text = ({
  type = 'text',
  style,
  children,
  ...rest
}) => {
  const textStyles = [
    presets[type],
    style
  ]

  return (
    <RNText {...rest} style={textStyles}>
      {children}
    </RNText>
  )
}

const weightStyles = {
  bold: { fontWeight: '600' },
  medium: { fontWeight: '400' },
  light: { fontWeight: '300' }
}

const sizeStyles = {
  xxl: { fontSize: 36, lineHeight: 44 },
  xl: { fontSize: 24, lineHeight: 34 },
  lg: { fontSize: 20, lineHeight: 32 },
  md: { fontSize: 18, lineHeight: 26 },
  sm: { fontSize: 16, lineHeight: 24 },
  xs: { fontSize: 14, lineHeight: 21 },
  xxs: { fontSize: 12, lineHeight: 18 }
}

const presets = {
  heading: [sizeStyles.xxl, weightStyles.bold],
  subHeading: [sizeStyles.xl, weightStyles.bold],
  title: [sizeStyles.lg, weightStyles.medium],
  text: [sizeStyles.md, weightStyles.medium],
  smallText: [sizeStyles.sm, weightStyles.light],
  formLabel: [sizeStyles.md, weightStyles.medium]
}

export default Text