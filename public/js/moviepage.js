let arrow_posi = [25, 172, 320]; //分类箭头的移动距离
// 函数入口
$(() => {
    sendAJAX({}); //初始化数据
    initEvt()     //初始化事件
})
// 所有事件初始化函数
let initEvt = () => {
    // 分类导航栏点击事件
    $("div.movie_time").delegate("a", "click", arrow_move);
    $("#search_item_type").delegate("a", "click", search_item_type)
    $("#search_item_area").delegate("a", "click", search_item_area)
    $("#search_item_year").delegate("a", "click", search_item_year)
    $(".movie_sort").click((e) => {
        $(".movie_sort a").removeClass("active");
        $(e.target).addClass("active");
    //    switch( $(e.target).index()){
    //         case 0 :{
    //             sendAJAX("")
    //             break;
    //         }
    //    }
    })
}
//箭头移动函数
let arrow_move = (e) => {
    $("a.arrow").css({
        "left": arrow_posi[$(e.target).index()]
    })
}
let search_item_type = (e) => {
    $("#search_item_type a").removeClass("all_bg")
    $(e.target).addClass("all_bg");
    sendAJAX({"type": $(e.target).text()});
    searchTypeData()
}
let search_item_area = (e) => {
    $("#search_item_area a").removeClass("all_bg")
    $(e.target).addClass("all_bg");
    sendAJAX({"type": $(e.target).text()});
}
let search_item_year = (e) => {
    $("#search_item_year a").removeClass("all_bg")
    $(e.target).addClass("all_bg"); 
}
 
//刷新内容函数
let refersh = function (data) {
    let str = "";
    for (let item of data) {
        str += `<dl>
                    <dt><img  src="http://127.0.0.1:3000${item.film_covers[0].film_covers}"></dt>
                    <dd>${item.name}</dd>
                    <dd>${item.ratings}</dd>
                    <dd class="pay">购票</dd>
                </dl>`
    }
    $("#datalist").html(str);
}
//获取数据
let sendAJAX = function (param) {     //此参数为一个对象
    $.get("moviePage/getmovies",param, (data) => {
        refersh(data);
    })
}
let searchTypeData=()=>{
    $("#search_item_box a").attr("class")
}