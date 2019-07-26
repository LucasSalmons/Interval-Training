import React, { Component } from 'react';
import { View, ScrollView, Text, Image, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import CountDown from 'react-native-countdown-component';
import { SPARTACUS } from '../shared/spartacus';

class RenderWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: 0
        }
    }

    countDownOver() {
        this.setState({
            interval: this.state.interval + 1
        })
    }

    render() {
        const spartacus = this.props.spartacus;
        let activeSpartacus = spartacus.filter((spartacus) => spartacus.id === this.state.interval);

        console.log(activeSpartacus);
        const renderWorkoutScene = ({ item, index }) => {
            return (
                <View key={index} style={{ margin: 20 }}>
                    <Text style={{ fontSize: 20 }}>{item.name}</Text>
                    <Text style={{ fontSize: 14 }}>{item.description}</Text>
                    <Image style={{ width: 200, height: 200 }} source={require('./images/bunny.png')} />
                    <Image style={{ width: 200, height: 200 }} source={require('./images/bunny.png')} />
                </View>
            );
        }
        return (
            <Card>
                <CountDown
                    size={20}
                    timeToShow={['M', 'S']}
                    until={activeSpartacus.seconds}
                    onFinish={() => this.countDownOver()} />
                <FlatList
                    data={activeSpartacus}
                    renderItem={renderWorkoutScene}
                    keyExtractor={item => item.id.toString()}
                />
            </Card>
        );
    }
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
                <Text>Timer Here</Text>
                <RenderWorkout spartacus={this.state.spartacus} />
            </ScrollView>
        );
    }
}

export default Workout;
