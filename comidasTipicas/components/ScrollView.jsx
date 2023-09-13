import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';




const Home = () => {
return (
  <>
    <ScrollView style={styles.scrollStyle}>
      <View style={styles.container}>
        
        <Card>
          <Card.Title>PUPUSAS</Card.Title>
          <Card.Divider />
          <Card.Image source={{uri:'https://www.travelreport.mx/wp-content/uploads/2018/12/gastronom%C3%ADa-de-El-Salvador-1.jpg'}} />
          <Text style={{ marginTop: 10 }}>
            Las pupusas son el platillo tipico mas representativo de El Salvador se rellenan de frijol, queso,chicharron y muchos ingredientes opcionales
          </Text>
        </Card>
        <Card>
          <Card.Title>TAMALES</Card.Title>
          <Card.Divider />
          <Card.Image source={{uri:'https://tipsparatuviaje.com/wp-content/uploads/2020/02/tamales-comida.jpg'}} />
          <Text style={{ marginTop: 10 }} >
          La masa se prepara con maíz o elote y con varias especias que le otorgan el delicioso sabor que ofrecen. Se hacen porciones individuales que se rellenan con carne de cerdo, pato o gallina y salsa de tomate natural
          </Text>
        </Card>
        <Card>
          <Card.Title>ENCHILADAS SALVADOREÑAS</Card.Title>
          <Card.Divider />
          <Card.Image source={{uri:'https://tipsparatuviaje.com/wp-content/uploads/2020/02/enchiladas-comida-1.jpg'}} />
          <Text style={{ marginTop: 10 }} >
          Las enchiladas salvadoreñas se comen a media tarde como una merienda salada.
            Con la masa se arman tortillas finas que se fríen en una sartén con bastante aceite. Una vez listas, se dejan reposar y se les coloca encurtido, huevo duro, aguacate, queso rallado y salsa natural de tomates.
          </Text>
        </Card>
      </View>
    </ScrollView>
  </>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  marginTop:60
},
scrollStyle: {
  marginBottom: 25,
}
});

export default Home;