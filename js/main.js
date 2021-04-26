window.onload = () => {
 // 'use strict';
 console.log(navigator);
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
}

var copyBtn = document.getElementById("copyBtn");
    // 버튼 클릭 이벤트
	copyBtn.addEventListener("click", function(){
    // 복사할 텍스트를 변수에 할당해줍니다.
    var text = document.getElementById("textDiv").innerText;
    // input text 태그를 생성해줍니다.
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    // 가상으로 가져올 태그에 만들어준 input 태그를 붙여줍니다.
    document.getElementById("textDiv").appendChild(createInput);
    // 만든 input 태그의 value 값에 복사할 텍스트 값을 넣어줍니다.
    createInput.value = text;
    // 복사 기능을 수행한 후
    createInput.select();
    document.execCommand('copy');
    // 가상으로 붙여주었던 input 태그를 제거해줍니다.
    document.getElementById("textDiv").removeChild(createInput);
    alert('복사가 완료되었습니다.');
});
   
var copyBtn2 = document.getElementById("copyBtn2");
// 버튼 클릭 이벤트
copyBtn2.addEventListener("click", function(){
    // 복사할 텍스트를 변수에 할당해줍니다.
    var text = document.getElementById("textDiv2").innerText;
    // input text 태그를 생성해줍니다.
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    // 가상으로 가져올 태그에 만들어준 input 태그를 붙여줍니다.
    document.getElementById("textDiv2").appendChild(createInput);
    // 만든 input 태그의 value 값에 복사할 텍스트 값을 넣어줍니다.
    createInput.value = text;
    // 복사 기능을 수행한 후
    createInput.select();
    document.execCommand('copy');
    // 가상으로 붙여주었던 input 태그를 제거해줍니다.
    document.getElementById("textDiv2").removeChild(createInput);
    alert('복사가 완료되었습니다.');
});
