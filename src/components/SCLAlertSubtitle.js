import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text } from 'react-native'
import variables from '../config/variables'
import { ViewPropTypes, TextPropTypes } from 'deprecated-react-native-prop-types'

SCLAlertSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  subtitleContainerStyle: ViewPropTypes.style,
  subtitleStyle: TextPropTypes.style
}

SCLAlertSubtitle.defaultProps = {
  subtitleContainerStyle: {},
  subtitleStyle: {}
}

function SCLAlertSubtitle(props) {
  return (
    <View style={[styles.container, props.subtitleContainerStyle]}>
      <Text numberOfLines={2} style={[styles.subtitle, props.subtitleStyle]}>
        {props.subtitle}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: variables.mediumFontSize,
    color: variables.subtitleColor,
    fontWeight: '300'
  }
})

export default SCLAlertSubtitle
