import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { LikeBtn, PopBtn } from './src/components/Button/MainButton';
import TextStyle from './src/styles/TextStyle';

export default function App() {

  // 設定喜歡按鈕預設樣式
  const [likeState, setLikeState] = useState(true)
  const [likeText, setLikeText] = useState('#FB5607')
  const [likeBg, setLikeBg] = useState('')

  // 按下按鈕後改變樣式
  const likeFood = () => {
    setLikeState(!likeState)
    likeState === true ?
      setLikeText('#FBEEDA') :
      setLikeText('#FB5607')
    likeState === true ?
      setLikeBg('#FB5607') :
      setLikeBg('#FBEEDA')
  }

  return (

    <View style={styles.container}>
      <ImageBackground style={styles.top_bkImg} source={require('./src/img/top_back.jpg')} />

      {/* ======= logo區塊 ======= */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image style={styles.top_icon} source={require('./src/img/chick.png')} />
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={TextStyle.logo_text}>阿強<Text style={{ color: '#FFB703' }}>CHICKEN</Text></Text>
          <Text style={[TextStyle.logo_text_s, { transform: [{ translateY: -5 }] }]}>炸機專門店</Text>
        </View>
      </View>
      {/* ======= logo區塊 ======= */}

      {/* 商品卡片區塊可以捲動 */}
      <ScrollView style={styles.scrollView}>
        {/* ======= 商品卡片 ====== */}
        <View style={[styles.pd_border, { marginTop: 20 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.pd_img} source={require('./src/img/pd1.jpg')} />
            <View style={{ flexDirection: 'column' }}>
              <PopBtn btnText={'人氣商品'} marginBtm={4}></PopBtn>
              <Text style={TextStyle.pd_text}>韓式辣醬炸雞腿</Text>
              <Text style={TextStyle.info_text} numberOfLines={4} ellipsizeMode={'tail'}>用醃肉粉醃漬後的雞腿，肉質更軟嫩。美式炸雞除了肉質軟嫩多汁之外，外層立體卡滋卡滋的口感呈現，因此美式炸雞在裹粉時，會透過乾濕乾的沾粉方式，使外皮更立體酥脆。</Text>
              <LikeBtn btnText={'我喜歡!'} likeTextColor={likeText} pos_ali={'flex-end'} likeBtnBkg={likeBg} likePress={() => likeFood(!likeState)}></LikeBtn>
            </View>
          </View>
        </View>
        {/* ======= 商品卡片 ====== */}

        {/* ======= 商品卡片 ====== */}
        <View style={styles.pd_border}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.pd_img} source={require('./src/img/pd2.jpg')} />
            <View style={{ flexDirection: 'column' }}>
              {/* <PopBtn btnText={'人氣商品'} marginBtm={4}></PopBtn> */}
              <Text style={TextStyle.pd_text}>塔塔小雞腿</Text>
              <Text style={TextStyle.info_text} numberOfLines={4} ellipsizeMode={'tail'}>來一盤簡易料理的清爽炸物吧!在家追劇/追電影的首推點心，就用美食來治癒心中的煩燥！</Text>
              <LikeBtn btnText={'我喜歡!'} pos_ali={'flex-end'}></LikeBtn>
            </View>
          </View>
        </View>
        {/* ======= 商品卡片 ====== */}


        {/* ======= 商品卡片 ====== */}
        <View style={styles.pd_border}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.pd_img} source={require('./src/img/pd3.jpg')} />
            <View style={{ flexDirection: 'column' }}>
              {/* <PopBtn btnText={'人氣商品'} marginBtm={4}></PopBtn> */}
              <Text style={TextStyle.pd_text}>酥脆洋蔥圈</Text>
              <Text style={TextStyle.info_text} numberOfLines={4} ellipsizeMode={'tail'}>厚切3/8吋寬的新鮮甜洋蔥，裹上特製的高級脆漿，讓你在家輕鬆享有外酥內軟的鮮甜口感，美國速食連鎖店選用第一品牌，媲美速食店的經典風味！</Text>
              <LikeBtn btnText={'我喜歡!'} pos_ali={'flex-end'}></LikeBtn>
            </View>
          </View>
        </View>
        {/* ======= 商品卡片 ====== */}

        {/* ======= 商品卡片 ====== */}
        <View style={styles.pd_border}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.pd_img} source={require('./src/img/pd4.jpg')} />
            <View style={{ flexDirection: 'column' }}>
              <PopBtn btnText={'人氣商品'} marginBtm={4}></PopBtn>
              <Text style={TextStyle.pd_text}>英式炸魚薯條</Text>
              <Text style={TextStyle.info_text} numberOfLines={4} ellipsizeMode={'tail'}>食材均由英國直送，其招牌Fish and Chips充滿英國傳統風味，由新鮮運送的北大西洋鱈魚柳製作，分為3款size，分別為12oz、6oz及2件，鱈魚外皮油炸得金黃鬆脆熱辣辣，魚肉肉質鮮嫩有咬口，仍保有鮮味及肉汁，配以餐廳5款獨特醬汁，包括開胃的他他醬及番茄醬、濃郁的牛肉醬、清爽解膩的青豆醬、微香咖喱醬，味道一流。</Text>
              <LikeBtn btnText={'我喜歡!'} pos_ali={'flex-end'}></LikeBtn>
            </View>
          </View>
        </View>
        {/* ======= 商品卡片 ====== */}
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FBEEDA',
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#FBEEDA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top_bkImg: {
    width: '100%',
    height: 140,
    resizeMode: 'center',
  },
  top_icon: {
    width: 60,
    height: 60,
    transform: [{ translateY: -16 }]
  },
  pd_border: {
    width: 370,
    height: 170,
    borderRadius: 19,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: "rgba(255, 183, 3, 1.0)",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14
  },
  pd_img: {
    width: 160,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 20,
    marginRight: 18,
  }
});
