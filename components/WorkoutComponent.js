import React, { Component } from 'react';
import { View, ScrollView, Text, Image, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { SPARTACUS } from '../shared/spartacus';

const RenderWorkout = (props) => {
    const spartacus = props.spartacus;

    const renderWorkoutScene = ({ item, index }) => {
        return (
            <View key={index} style={{ margin: 20 }}>
                <Text style={{ fontSize: 20 }}>{item.name}</Text>
                <Text style={{ fontSize: 14 }}>{item.description}</Text>
                <Image style={{ width: 200, height: 200 }} source={require('./images/bunny.png')} />
                <Image style={{ width: 200, height: 200 }} source={require('./images/bunny.png')} />
            </View>
        );
    };

    return (
        <Card title='Excercises'>
            <FlatList
                data={spartacus}
                renderItem={renderWorkoutScene}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    )
}

class Workout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spartacus: SPARTACUS
        }
    }

    render() {
        return (
            <ScrollView>
                <RenderWorkout spartacus={this.state.spartacus} />
            </ScrollView>
        );
    }
}

export default Workout;