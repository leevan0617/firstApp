let init = function () {

}
// 热映部分
let hotMovie = function () {
    // $.get("/getHot_movie",(data)=>{

    // })
    let str = "";
    $("#movie_num").text(data.length)
    for (let item of data) {
        str += ` <li>
                    <a href="details.html" class="pic"><img src=""></a>
                    <p class="mask">${item.name} <span>${item.ratings}</span></p> 
                    <a href="#2">购票</a>
                 </li>`
    }
    $("#hot_movies").html(str);
}
// 热播部分
let hotflim = function () {
    // $.get("/getHot_films",(data)=>{

    // })
    let str = "";
    $("#h_flim_num").text(data.length)
    for (let item of data){
        str += `<li>
                    <img src="">
                    <p class="mask">${item.name}</p> 
                    <div>
                        <p>${item.wantToSee}人想看</p>
                        <a href="#2">预告片</a>
                        <a href="#2">预售</a>
                    </div>       	   	   
                    <p>1月26日上映</p>
                </li>`
    }
    $("#hot_films").html(str);
}
// 待映部分
let hotMovie = function () {
    // $.get("/getWait_movie",(data)=>{

    // })
    let str = "";
    for (let item of data){
        str += ` <li>
		       	   	 <img src="">
		       	   	<p class="mask">${item.name} <span>${item.ratings}</span></p>
		       	</li>`
    }
    $("#wait_movies").html(str);
}