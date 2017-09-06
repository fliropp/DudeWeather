import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

class SpotCallout extends Component {
  render() {
    return (
      <View style={[styles.container,this.props.style]}>
        <View style={styles.bubble}>
          <View style={styles.forecast_small}>
            {this.props.children}
          </View>
        </View>
       
      </View>
    );
  }
}

SpotCallout.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'center',
    backgroundColor: '#03a9f4',
  },
  bubble: {
    width: 120,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#ff9800',
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: 6,
    borderColor: '#007a87',
    borderWidth: 0.5,
  },
  forecast_small: {
    flex: 1,
  },
});

module.exports = SpotCallout;