
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
                style={{ height: vh(10), width: vw(90) }}
                calendarHeaderStyle={{ color: "white" }}
                calendarHeaderPosition="below"
                dateNameStyle={{ fontFamily: Fonts.popSemi, fontSize: Fonts.h4 }}
                dateNumberStyle={{ fontFamily: Fonts.popBold, fontSize: Fonts.h3 }}
                calendarHeaderContainerStyle={{ height: 0 }}
                // customDatesStyles={customDatesStylesFunc}
                // maxDate={endDate}
                // minDate={startDate}
                iconContainer={{ flex: 0.1 }}
            />
        </View>
    );
}