import React, { PropTypes } from 'react'

const Item = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Item
// let {
//   Image,
//   Text,
//   View,
//   Dimensions,
//   StyleSheet
// } = React;
//
// const styles = StyleSheet.create({
//   item: {
//     flex: 1,
//     backgroundColor: "white",
//     padding: 20,
//     paddingBottom: 0,
//     flex: 1,
//     flexDirection: "row",
//     alignItems: 'flex-start'
//   },
//   description: {
//     flex: 1
//   },
//   title: {
//     flex: 0,
//     marginBottom: 5
//   },
//   image: {
//     flex: 1,
//     borderWidth: 20,
//     borderRadius: 0,
//     borderColor: "#111111",
//     height: 320,
//   },
//   title: {
//     fontSize: 12,
//     fontWeight: "bold",
//     marginTop: 2,
//     marginLeft: 0,
//     color: "#16a764"
//   },
//   company: {
//     fontWeight: "normal",
//     color: "#0f1726"
//   }
// });
//
// class Item extends React.Component {
//   render() {
//     return (
//       <View style={styles.item}>
//         <Image
//           resizeMode="contain"
//           source={{uri: this.props.photo}}
//           style={styles.image}/>
//       </View>
//     );
//   }
// }
//
// Item.propTypes = {
//   holder: React.PropTypes.string,
//   owner: React.PropTypes.string,
//   title: React.PropTypes.string,
//   photo: React.PropTypes.string
// };
//
// export default Item;
