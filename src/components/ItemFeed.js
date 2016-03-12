import React, { PropTypes } from 'react'
import Item from './Item'

const ItemFeed = ({ items, onItemClick }) => (
  <ul>
    {items.map(item =>
      <Item
        key={item.id}
        {...item}
        onClick={() => onItemClick(item.id)}
      />
    )}
  </ul>
)

ItemFeed.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default ItemFeed

// class Feed extends React.Component {
//   constructor(props) {
//     super(props);
//     this.items = [
//         {
//             "channel": "charge",
//             "objectId": "ZFk85XnapQ",
//             "photo": "http://files.parsetfss.com/39d49abe-f514-470b-9326-11e574a535fa/tfss-7b547299-11b3-4784-a9a1-28b180b801d9-s-l1000.jpg",
//             "title": "MacBook Pro Charger (Old)"
//         },
//         {
//             "category": "shelf",
//             "objectId": "gJHT8vKY9H",
//             "photo": "http://www.pathfinder.co.nz/covers/9780670025299.jpg",
//             "title": "How To Create a Mind",
//         },
//         {
//             "category": "shelf",
//             "objectId": "W8vb5kh5XZ",
//             "photo": "http://ecx.images-amazon.com/images/I/71XqEFoskqL.jpg",
//             "title": "Platform Scale",
//         },
//         {
//             "category": "shelf",
//             "objectId": "Px6b5BK0MN",
//             "photo": "http://blog.entrepreneurthearts.com/wp-content/uploads/2013/11/26288930.png",
//             "title": "Rework",
//         },
//         {
//             "category": "tech",
//             "objectId": "LJTF9GjB9X",
//             "photo": "http://files.parsetfss.com/39d49abe-f514-470b-9326-11e574a535fa/tfss-cde04080-5b59-41c6-a9cc-e79184e653a9-14213714.jpg",
//             "title": "iPod Touch",
//         },
//         {
//             "category": "charge",
//             "objectId": "eR7BiNF0yo",
//             "photo": "http://files.parsetfss.com/39d49abe-f514-470b-9326-11e574a535fa/tfss-de6075e3-935e-4fcf-8c84-1aa91f3d5df1-315tkJ8-4sL._SY300_.jpg",
//             "title": "Samsung Charger"
//         }
//     ];
//
//   }
//   render() {
//     return (
//       <View style={{flex: 1}}>
//         {this.items.length > 0 ?
//           <ScrollView
//             style={{
//               flex: 1,
//               padding: 0}}
//             contentContainerStyle={{
//               alignItems: "stretch",
//               flexDirection: "column"
//             }}>
//           {this.items.map((item, index) => {
//             var itemrow = <Item key={index} {...item}/>
//             if (false) {
//               itemrow = <View key={index} {...item}><Text>{item.channel}</Text></View>
//             }
//             return (
//               itemrow
//             );
//           })}
//         </ScrollView> : <View >
//           <ActivityIndicatorIOS
//             animating={true}
//             style={{
//               height: 80,
//               alignItems: "center",
//               justifyContent: "center"}}
//             size="large"
//           />
//         </View>}
//       </View>
//     );
//   }
// }
//
// Feed.propTypes = {
//   dispatch: React.PropTypes.func,
//   items: React.PropTypes.array
// };
//
// Feed.defaultProps = {
//   dispatch: () => {},
//   items: []
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Feed);
