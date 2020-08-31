
  const area_TOKYODOOM = 0.047;
  const prefecture =[

    ['北海道','83424'],
    ['青森県','9646'],
    ['岩手県','15275'],
    ['宮城県','7282'],
    ['秋田県','11638'],
    ['山形県','9323'],
    ['福島県','13784'],
    ['茨城県','6097'],
    ['栃木県','6408'],
    ['群馬県','6362'],
    ['埼玉県','3798'],
    ['千葉県','5158'],
    ['東京都','2191'],
    ['神奈川県','2416'],
    ['新潟県','12584'],
    ['富山県','4248'],
    ['石川県','4186'],
    ['福井県','4190'],
    ['山梨県','4465'],
    ['長野県','13562'],
    ['岐阜県','10621'],
    ['静岡県','7777'],
    ['愛知県','5172'],
    ['三重県','5774'],
    ['滋賀県','4017'],
    ['京都府','4612'],
    ['大阪府','1905'],
    ['兵庫県','8401'],
    ['奈良県','3691'],
    ['和歌山県','4725'],
    ['鳥取県','3507'],
    ['島根県','6708'],
    ['岡山県','7115'],
    ['広島県','8479'],
    ['山口県','6112'],
    ['徳島県','4147'],
    ['香川県','1877'],
    ['愛媛県','5676'],
    ['高知県','7104'],
    ['福岡県','4986'],
    ['佐賀県','2441'],
    ['長崎県','4132'],
    ['熊本県','7409'],
    ['大分県','6341'],
    ['宮崎県','7735'],
    ['鹿児島県','9187'],
    ['沖縄県','2281']
  ];
  const messages =[
    '中国行っチャイナ　なんつって',
    '空気は読むものじゃない。吸うもんだ。',
    '料理に使う酢がないんです。どこを探してもミツカンないっ酢 なんつって。',
    '夕飯ハンバーグ？やったぜかあちゃん、明日はホームランだ！',
    '大事なのはやっぱ見た目。',
    '怒ってねぇよ、ムカついてるだけだ！',
    'java？なんすかそれ。お茶っすか？',
    'カレーが飲み物だとして、カレーうどんどうなんの？',
    'おでんは飲み物だよね？　だっておでん缶あるじゃん。',
    '大事なのは土地の広さじゃない。心の広さやで',
    '片面揚げたらひっくり返す。フライ返しだ！',
    '打たれたら打ち返す。ピッチャー返しだ！',
    'コンタクトをハードからソフトに変えたんだけど、わかる？',
    '「お宝鑑定団」間寛平氏起用で「お宝寛平団」',
    '桶狭間寛平の戦い'

  ];


  const prefNameInputtext = document.getElementById('pref-name');
  const compareButton = document.getElementById('compare');
  const resultDivided = document.getElementById('result-area');
  const messageDivided = document.getElementById('message-area');
  const doyaDivided = document.getElementById('doya-area');

  compareButton.onclick = () =>{  
    // ボタン連打禁止処理　いろいろ試した苦労の痕跡
    // compareButton.style.visibility = "hidden";
    // document.getElementById('compare').style.visibility = 'hidden';
    // document.getElementById('compare').setAttribute("disabled", true);
    // document.getElementById("compare").disabled='true';
    // compareButton.style.display = "none";
    compareButton.disabled = true;
    compareButton.style.backgroundColor = 'gray';
    console.log(compareButton.disabled);
    console.log(compareButton.style.visibility);
    console.log('ボタンが押されました');
    const prefName = prefNameInputtext.value;

    removeAllChildren(resultDivided);
    removeAllChildren(messageDivided);
    removeAllChildren(doyaDivided);

    /*result-area */
    const header = document.createElement('h3');
    header.innerText = prefName +'の面積は・・・';  
    /*<h3>hoge県の面積は・・・</h3> */
    // console.log(header.innerText);
    resultDivided.appendChild(header);
    /** <div id="result-area"> 
     * <h3>hoge県の面積は・・・</h3> 
     *  </div> */

    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    const compare_result = compareDOOM(prefName);
    // console.log(compare_result);
    paragraph1.innerText = prefName +'の面積は、東京ドーム '+ compare_result+'個分だよ！';
    resultDivided.appendChild(paragraph1);
    //1.5秒遅らせて表示
    setTimeout(function(){
      paragraph2.innerText = 'わかりにくい？ ほんじゃこれならどう？';
      resultDivided.appendChild(paragraph2);
    },1500);
    /** <div id="result-area"> 
     *  <h3>hoge県の面積は・・・</h3> 
     * <p>hoge県の面積は、東京ドーム　？？？個分だよ！</p>
     * <p>わかりにくい？・・・
       </div> */

    /* 以下message-area */
    /* setTimeoutを入れ子にするのは、ドヤが先に表示されるのを防止
    *　上の表示から2sでメッセージ、さらに2sでドヤ、全部で4s*/
  
    setTimeout(function(){
      var index = Math.floor(Math.random() * 100) % messages.length;
      // console.log(index);
      const messageText = document.createElement('H2');
      messageText.innerText = messages[index];
      // console.log(messages[index]);
      messageDivided.appendChild(messageText);
    
      /*以下doya-area*/
      setTimeout(function(){
        const doya = document.createElement('H1');
        doya.innerText = 'ドヤぁ';
        doyaDivided.appendChild(doya);
        // compareButton.style.visibility = "visible";
        compareButton.disabled = false;//ボタンを戻す処理
        compareButton.style.backgroundColor = '';
      },2000);
    },4000);
    // ボタンを戻す処理、ここだとだめなのはなぜ？
    // compareButton.style.visibility = "visible";
    // compareButton.style.display = "inline"
    // compareButton.disabled = false;
  }

  /**
   * 都道府県名の文字列を渡すと東京ドームと面積比較する
   * @param {String} prefName 
   * @return{number} 面積比較した数値
   */
  function compareDOOM(prefName){
    // console.log(prefName);
    for(let i=0 ; i<prefecture.length ; i++){
      if(prefName === prefecture[i][0]){
        let area_pref = prefecture[i][1];
        // console.log(area_pref);
        /*結果を小数点以下切り上げ*/
        var result_area = Math.ceil(area_pref / area_TOKYODOOM);
        // console.log(result_area);
      }
    }    
    return result_area;
  }

/*指定した要素の子要素を全て削除する
 * @param {HTMLElement} element HTMLの要素
 */
function removeAllChildren(element){
  while(element.firstChild){//子要素があるかぎり削除
    element.removeChild(element.firstChild);
  }
}  
