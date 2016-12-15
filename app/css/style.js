import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "item_txt": {
        "position": "absolute",
        "zIndex": 0,
        "top": 0,
        "float": "left",
        "width": "100%",
        "height": "100%",
        "background": "rgba(0,0,0,0.2)",
        "color": "#fff"
    },
    "item_txt span": {
        "float": "left",
        "width": "100%",
        "textAlign": "center"
    },
    "item_txt span:nth-child(1)": {
        "paddingTop": 50,
        "paddingRight": 10,
        "paddingBottom": 50,
        "paddingLeft": 10,
        "fontWeight": "bold",
        "fontSize": 16
    },
    "des_btn span:nth-child(1)": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "fontWeight": "300",
        "fontSize": 14,
        "height": 160
    },
    "des_btn": {
        "position": "relative",
        "top": 100,
        "zIndex": 0
    },
    "button_cde": {
        "textAlign": "center",
        "display": "block",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "background": "red",
        "border": 0,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10
    },
    "timeline": {
        "position": "relative",
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 22,
        "listStyle": "none"
    },
    "timeline-image img": {
        "height": 186,
        "width": "100%"
    },
    "timeline>span>li:nth-child(even)": {
        "position": "relative",
        "marginBottom": 50,
        "height": 180,
        "right": -100
    },
    "timeline>span>li:nth-child(odd)": {
        "position": "relative",
        "marginBottom": 50,
        "height": 180,
        "left": -100
    },
    "timeline>span>li:before": {
        "content": " ",
        "display": "table"
    },
    "timeline>span>li:after": {
        "content": " ",
        "display": "table",
        "clear": "both",
        "minHeight": 170
    },
    "timeline >span>li timeline-panel": {
        "position": "relative",
        "float": "left",
        "width": "41%",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 30,
        "textAlign": "right"
    },
    "timeline>span>li timeline-panel:before": {
        "right": "auto",
        "left": -15,
        "borderRightWidth": 15,
        "borderLeftWidth": 0
    },
    "timeline>span>li timeline-panel:after": {
        "right": "auto",
        "left": -14,
        "borderRightWidth": 14,
        "borderLeftWidth": 0
    },
    "timeline>span>li timeline-image": {
        "zIndex": 100,
        "position": "absolute",
        "left": "50%",
        "border": "7px solid #3b5998",
        "borderRadius": "100%",
        "backgroundColor": "#3b5998",
        "boxShadow": "0 0 5px #4582ec",
        "width": 200,
        "height": 200,
        "marginLeft": -100
    },
    "timeline>span>li timeline-image h4": {
        "marginTop": 12,
        "fontSize": 10,
        "lineHeight": 14
    },
    "timeline>span>litimeline-inverted>timeline-panel": {
        "float": "right",
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "textAlign": "left"
    },
    "timeline>span>litimeline-inverted>timeline-panel:before": {
        "right": "auto",
        "left": -15,
        "borderRightWidth": 15,
        "borderLeftWidth": 0
    },
    "timeline>span>litimeline-inverted>timeline-panel:after": {
        "right": "auto",
        "left": -14,
        "borderRightWidth": 14,
        "borderLeftWidth": 0
    },
    "timeline>span>li:last-child": {
        "marginBottom": 0
    },
    "timeline timeline-heading h4": {
        "marginTop": 22,
        "marginBottom": 4,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "color": "#b3b3b3"
    },
    "timeline timeline-heading h4subheading": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textTransform": "none",
        "fontSize": 18,
        "color": "#333333"
    },
    "timeline timeline-body>p": {
        "marginBottom": 0,
        "color": "#808080"
    },
    "timeline timeline-body>ul": {
        "marginBottom": 0,
        "color": "#808080"
    },
    "timeline>span>li:nth-child(odd) line:before": {
        "content": "",
        "position": "absolute",
        "top": 60,
        "bottom": 0,
        "left": 690,
        "width": 4,
        "height": 340,
        "backgroundColor": "#3b5998",
        "MsTransform": "rotate(-44deg)",
        "WebkitTransform": "rotate(-44deg)",
        "transform": "rotate(-44deg)",
        "boxShadow": "0 0 5px #4582ec"
    },
    "timeline>span>li:nth-child(even) line:before": {
        "content": "",
        "position": "absolute",
        "top": 60,
        "bottom": 0,
        "left": 450,
        "width": 4,
        "height": 340,
        "backgroundColor": "#3b5998",
        "MsTransform": "rotate(44deg)",
        "WebkitTransform": "rotate(44deg)",
        "transform": "rotate(44deg)",
        "boxShadow": "0 0 5px #4582ec"
    }
});