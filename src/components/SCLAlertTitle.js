import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text } from 'react-native'
import variables from '../config/variables'
import { ViewPropTypes, TextPropTypes } from 'deprecated-react-native-prop-types'

SCLAlertTitle.propTypes = {
  title: PropTypes.string.isRequired,
  titleContainerStyle: ViewPropTypes.style,
  titleStyle: TextPropTypes.style
}

SCLAlertTitle.defaultProps = {
  titleContainerStyle: {},
  titleStyle: {}
}

function SCLAlertTitle(props) {
  return (
    <View style={[styles.container, props.titleContainerStyle]}>
      <Text numberOfLines={1} style={[styles.text, props.titleStyle]}>
        {props.title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: variables.gutter
  },
  text: {
    textAlign: 'center',
    fontSize: variables.largeFontSize,
    color: variables.textColor,
    fontWeight: '300'
  }
})

export default SCLAlertTitle
