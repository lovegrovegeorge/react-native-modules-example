import React from 'react'
import { Text as RNText, TextProps as RNTextProps, StyleProp, TextStyle } from 'react-native'

type Presets = keyof typeof presets

interface TextProps extends RNTextProps {
  type?: Presets
  style?: StyleProp<TextStyle>
  children: React.ReactNode
}

const Text = ({ type = 'text', style, children, ...rest }: TextProps) => {
  const textStyles = [presets[type], style]

  return (
    <RNText {...rest} style={textStyles}>
      {children}
    </RNText>
  )
}

const weightStyles = {
  bold: { fontWeight: '600' } as TextStyle,
  medium: { fontWeight: '400' } as TextStyle,
  light: { fontWeight: '300' } as TextStyle
}

const sizeStyles = {
  xxl: { fontSize: 36, lineHeight: 44 } as TextStyle,
  xl: { fontSize: 24, lineHeight: 34 } as TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } as TextStyle,
  md: { fontSize: 18, lineHeight: 26 } as TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } as TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } as TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } as TextStyle
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
