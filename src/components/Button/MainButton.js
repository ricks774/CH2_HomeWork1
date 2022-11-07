import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import ButtonStyle from "../../styles/ButtonStyle";
import TextStyle from '../../styles/TextStyle';



export const PopBtn = props => (
    <TouchableOpacity style={[ButtonStyle.pop_btn, { marginBottom: props.marginBtm }]}>
        <Text style={TextStyle.btn_text_w}>{props.btnText}</Text>
    </TouchableOpacity>
)

export const LikeBtn = props => (
    <TouchableOpacity style={[
        ButtonStyle.like_btn,
        { alignSelf: props.pos_ali },
        { backgroundColor: props.likeBtnBkg }
    ]}
        onPress={props.likePress}>
        <Text style={[TextStyle.btn_text_o, { color: props.likeTextColor }]}>{props.btnText}</Text>
    </TouchableOpacity>
)


LikeBtn.defaultProps = {
    likeTextColor: '#FB5607'
}