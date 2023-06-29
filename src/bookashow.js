import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

export class BookAShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTheaterId: null,
            selectedTimeIndex: null,
        };
    }

    showMovieData = [
        {
            id: '1',
            theaterName: 'Cinepolis:Next T1,Delhi',
            showTime: ['2:00 PM', '3:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'],
        },
        {
            id: '2',
            theaterName: 'PVR:VR Punjab,Mohali',
            showTime: ['2:00 PM', '3:00 PM', '4:00 PM', '6:00 PM', '9:00 PM'],
        },
        {
            id: '3',
            theaterName: 'Fun Cinemas:Jagat Mall,Chandigarh',
            showTime: ['2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '8:00 PM', '9:00 PM'],
        },
        {
            id: '4',
            theaterName: 'INOX:Shahi,Mohali',
            showTime: ['2:00 PM', '4:00 PM', '5:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'],
        },
        {
            id: '5',
            theaterName: 'Picadile Square:Republic Mall,Chandigarh',
            showTime: ['2:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'],
        },
    ];

    changeBackgroundColor = (theaterId, index) => {
        this.setState({
            selectedTheaterId: theaterId,
            selectedTimeIndex: index,
        });
    };

    render() {
        const { selectedTheaterId, selectedTimeIndex } = this.state;

        return (
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <ImageBackground
                        source={require('../src/asset/Bookashow.webp')}
                        style={styles.headingContainer}
                        imageStyle={styles.headingBackground}
                    >
                        <View style={styles.headingContent}>
                            <Text style={styles.heading}>Book a Show</Text>
                            <Text style={styles.subheading}>Rocketry:The Nambi Effect</Text>
                            <Text style={styles.info}>Biography | Drama/Action | UA | Duration: 2h 37m</Text>
                        </View>
                    </ImageBackground>
                    {this.showMovieData.map((movie) => (
                        <View key={movie.id} style={styles.theaterBox}>
                            <Text style={styles.theaterName}>{movie.theaterName}</Text>
                            <View style={styles.showTimingsContainer}>
                                {movie.showTime.map((time, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => this.changeBackgroundColor(movie.id, index)}
                                        activeOpacity={0.8}
                                    >
                                        <View
                                            style={[
                                                styles.showTimingBox,
                                                {
                                                    backgroundColor:
                                                        selectedTheaterId === movie.id && selectedTimeIndex === index ? '#87cefa' : '#f5f5f5',
                                                },
                                            ]}
                                        >
                                            <Text style={styles.showTimingText}>{time}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#e0ffff',
    },
    headingContainer: {
        width: 430,
        height: 180,
        marginBottom: 20,
        borderWidth: 2,
        borderRadius: 5,
        overflow: 'hidden',
    },
    headingBackground: {
        resizeMode: 'cover',
    },
    headingContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#e0ffff',
        marginBottom: 55,
    },
    subheading: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 10,
    },
    info: {
        fontSize: 14,
        color: '#ffffff',
    },
    theaterBox: {
        backgroundColor: '#ffffff',
        padding: 16,
        marginBottom: 16,
        borderRadius: 5,
    },

    theaterName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'grey',
    },
    showTimingsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 400,
        height: 100,
        borderWidth: 1,
        borderColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffb6c1',
        marginLeft: -2
    },
    showTimingBox: {
        padding: 8,
        marginRight: 8,
        marginBottom: 8,
        borderRadius: 4,
        marginTop: 5,
    },
    showTimingText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default BookAShow;
