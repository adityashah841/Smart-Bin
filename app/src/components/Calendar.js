
import { View } from "react-native";
import React from "react";
import CalendarStrip from "react-native-calendar-strip";

//$style variables imports
import {
    Margin,
    Fonts,
    vw,
    vh,
} from "../utils/variables";
//& Calendar Component
export default function Calendar() {

    //$ Return UI
    return (
        <View style={{ marginVertical: Margin.small }}>
            <CalendarStrip
                scrollable={true}
                style={{ height: vh(10), width: vw(90), color: "#000" }}
                calendarHeaderStyle={{ color: "black" }}
                calendarHeaderPosition="below"
                dateNameStyle={{ fontFamily: Fonts.popSemi, fontSize: Fonts.h4, color: "#000" }}
                dateNumberStyle={{ fontFamily: Fonts.popBold, fontSize: Fonts.h3, color: "#000" }}
                calendarHeaderContainerStyle={{ height: 0 }}
                // customDatesStyles={customDatesStylesFunc}
                // maxDate={endDate}
                // minDate={startDate}
                iconContainer={{ flex: 0.1 }}
            />
        </View>
    );
}