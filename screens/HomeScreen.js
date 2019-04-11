import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class Store extends Component {
  static navigationOptions = {
    title: 'Pustak',
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "The Story Of MY Life",  price:"₹ 250.00", image:"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4862/9780486292496.jpg"},
        {id:2, title: "Mahatma Gandhi",  price:"₹ 150.00", image:"https://manakinpress.com/wp-content/uploads/2017/07/The-Story-of-My-Experiments-with-Truth-L-262x400.jpg"} ,
        {id:3, title: "The Hunger Games",  price:"₹ 350.00", image:"https://www.listchallenges.com/f/items/6e5a9a79-acd6-4639-8537-2ec4bb4c10a6.jpg"}, 
        {id:4, title: "Harry Potter",  price:"₹ 300.00", image:"https://prodimage.images-bn.com/pimages/9780545790352_p0_v25_s550x406.jpg"}, 
        {id:5, title: "Life Of Pi",  price:"₹ 200.00", image:"https://www.adazing.com/wp-content/uploads/2012/06/life-of-pi.jpg"}, 
        {id:6, title: "Sachin Tendulkar",  price:"₹ 170.00", image:"https://images-na.ssl-images-amazon.com/images/I/51lSePcUlaL._SX324_BO1,204,203,200_.jpg"}, 
        {id:7, title: "Mahabharata",  price:"₹ 500.00", image:"https://images-na.ssl-images-amazon.com/images/I/513VE24TJSL.jpg"}, 
        {id:8, title: "Let Us C",  price:"₹ 250.00", image:"https://www.codewithc.com/wp-content/uploads/2014/07/let-us-c.png"},
        {id:9, title: "Gitanjali",  price:"₹ 300.00", image:"https://i.pinimg.com/originals/bc/f6/54/bcf6544988b7145d6e124d7805d63d09.jpg"},
        {id:9, title: "Wings Of Fire", price:"₹ 175.00", image:"https://cdn-images-1.medium.com/max/1600/1*YRuQ1wps0wLHa5ku-nB1JA.jpeg"},
      ]
    };
  }

  addProductToCart = () => {
    Alert.alert('Success', 'The product has been added to your cart')
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
               
               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>

                <Image style={styles.cardImage} source={{uri:item.image}}/>
                
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addProductToCart()}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/nolan/96/3498db/add-shopping-cart.png'}}/>
                        <Text style={[styles.socialBarLabel, styles.buyNow]}>Buy Now</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/color/50/000000/hearts.png'}}/>
                        <Text style={styles.socialBarLabel}>25</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  title:{
    fontSize:18,
    flex:1,
  },
  price:{
    fontSize:16,
    color: "green",
    marginTop: 5
  },
  buyNow:{
    color: "purple",
  },
  icon: {
    width:25,
    height:25,
  },
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
}); 