// content conponent code
import React from 'react'
import {
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import style from './SampleComponent.style'


export default function SampleComponent(props) {
  const {
    customStyle, onPress, label,
  } = props
  return (
    <TouchableHighlight
      onPress={onPress}
      style={StyleSheet.flatten([style.container, customStyle])}
    >
      <Text style={StyleSheet.flatten([style.text])}>{label}</Text>
    </TouchableHighlight>
  )
}

SampleComponent.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  customStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.number),
  ]),
}

SampleComponent.defaultProps = {
  customStyle: undefined,
}
