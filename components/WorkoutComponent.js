import React, { Component } from 'react';
import { View, ScrollView, Text, Image, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import CountDown from 'react-native-countdown-component';
import { SPARTACUS } from '../shared/spartacus';

class Workout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: 0,
            spartacus: SPARTACUS
        }
    }

    countDownOver() {
        this.setState({
            interval: this.state.interval + 1
        })
    }

    render() {
        let activeSpartacus = this.state.spartacus.filter((spartacus) => spartacus.id === this.state.interval);
        let activeTime = activeSpartacus.map((time) => time.seconds);
        console.log(activeSpartacus);
        console.log(activeTime);
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
            <ScrollView>
                <Card>
                    <CountDown
                        key={this.state.interval}
                        size={20}
                        timeToShow={['M', 'S']}
                        until={+activeTime}
                        onFinish={() => this.countDownOver()} />
                    <FlatList
                        data={activeSpartacus}
                        renderItem={renderWorkoutScene}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default Workout;
