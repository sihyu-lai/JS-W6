// 地區用 change 監聽-->通常用於表單
// 上方新增的地區跟下方篩選的地區都寫死選項（依照目前提供的 JSON data area 欄位）
// 地區的篩選下拉需要加上『全部地區』option
// 不需要有「清除資料」的按鈕
// 預設資料為 3 筆（內容需依照目前提供的 JSON data）
// 篩選後會顯示『搜尋資料為 ? 筆』
// 描述欄位使用 textarea  這
// 星級區間是 1-10 分
// 金額、組數、星級的 type 為 Number
let data = [];

  axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json')
  .then(function (response) {
    console.log(response.data);
    return data=response.data;
  });


//宣告變數
const formSelect=document.querySelector('.formselect'); // 切換的下拉表單
const searchNum=document.querySelector('.searchNum');  // 搜尋資料筆數
const  cardArea=document.querySelector('.cardarea'); // 資料畫面

//更換資料-初始化資料
function init( ){
    let str=``;
    let searchCount=0; //預設搜尋幾筆
    data.forEach(function(item){
        searchCount++;
    let content= `<div class="card shadow  mb-5 bg-body rounded  position-relative cardset">
    <img src="${item.imgUrl}" class="card-img-top" alt="...">
    <span class="position-absolute top-0    badge   bg-secondary fs-3 py-4 px-4 ">${item.area} <span class="visually-hidden">unread messages</span></span> 
    <span class="position-absolute  top-50    badge   bg-primary fs-4 py-2 px-2 ">${item.rate}<span class="visually-hidden">unread messages</span></span> 
    <div class="card-body  ">
     
      <h5 class="card-title text-primary border-bottom border-primary border-2 pb-3 fs-3">${item.name}</h5>
      <p class="card-text text-info fs-5 h-50">${item.description}</p>
      <div class="d-flex justify-content-between">
      <a href="#" class="text-primary fw-bolder text-decoration-none align-self-center"><span class="iconify" data-icon="akar-icons:circle-plus-fill" data-inline="false" style="color: #00807E;"></span>剩下最後<span>${item.group}</span>組</a>
      <a href="#" class="text-primary fw-bolder text-decoration-none">TWD<span class="fs-3">${item.price}</span></a>
    </div>
    </div>
    </div>`;
    str+=content;
    searchNum.textContent=searchCount;
     
    });
     
     cardArea.innerHTML=str;
    }
init();
    

 
// 篩選
 formSelect.addEventListener('change',function(e){
    // console.log(e.target.value);
    data.forEach(function(item,index){
      if(e.target.value==data[index].area){
        // console.log(e.target.value);
        // console.log(data[index].area);
        // 渲染畫面＋搜尋的筆數
        let searchCount=0;
        searchCount++;
         let str=``;
         let content= `<div class="card shadow  mb-5 bg-body rounded  position-relative cardset">
    <img src="${item.imgUrl}" class="card-img-top" alt="...">
    <span class="position-absolute top-0    badge   bg-secondary fs-3 py-4 px-4 ">${item.area} <span class="visually-hidden">unread messages</span></span> 
    <span class="position-absolute  top-50    badge   bg-primary fs-4 py-2 px-2 ">${item.rate}<span class="visually-hidden">unread messages</span></span> 
    <div class="card-body  ">
     
      <h5 class="card-title text-primary border-bottom border-primary border-2 pb-3 fs-3">${item.name}</h5>
      <p class="card-text text-info fs-5 h-50">${item.description}</p>
      <div class="d-flex justify-content-between">
      <a href="#" class="text-primary fw-bolder text-decoration-none align-self-center"><span class="iconify" data-icon="akar-icons:circle-plus-fill" data-inline="false" style="color: #00807E;"></span>剩下最後<span>${item.group}</span>組</a>
      <a href="#" class="text-primary fw-bolder text-decoration-none">TWD<span class="fs-3">${item.price}</span></a>
    </div>
    </div>
    </div>`;
        str+=content;
        cardArea.innerHTML=str;
        searchNum.textContent=searchCount;
      }else if(e.target.value=="全部地區"){
        return init();
      }
     
    });

    //選擇全部地區，出現init();
    //取不到值
   

    
    //目的：當我選擇台中的時候，只會出現台中的資料;搜尋筆數隨之增加。
    // if(e.target.value==data[item].area)

   // 選擇全部地區，就出現全部資料

  });