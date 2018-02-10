/**
 * Created by xionghl on 2018/2/10.
 */
$(function(){

});

layui.config({
    version: '1515376178709' //为了更新 js 缓存，可忽略
});

layui.use([ 'laypage', 'layer', 'table', 'carousel', 'upload', 'element'], function(){
    var tableOptions = {
        url: 'https://pet-chain.baidu.com/data/market/queryPetsOnSale', //请求地址
        method: 'POST', //方式
        id: 'content', //生成 Layui table 的标识 id，必须提供，用于后文刷新操作，笔者该处出过问题
        page: false, //是否分页
        where: { type: "all" }, //请求后端接口的条件，该处就是条件错误点，按照官方给出的代码示例，原先写成了 where: { key : { type: "all" } }，结果并不是我想的那样，如此写，key 将是后端的一个类作为参数，里面有 type 属性，如果误以为 key 是 Layui 提供的格式，那就大错特错了
        response: { //定义后端 json 格式，详细参见官方文档
            statusName: 'Code', //状态字段名称
            statusCode: '200', //状态字段成功值
            msgName: 'Message', //消息字段
            countName: 'Total', //总数字段
            dataName: 'Result' //数据字段
        }
    };
    var laypage = layui.laypage //分页
         layer = layui.layer //弹层
        ,table = layui.table //表格
        ,carousel = layui.carousel //轮播
        ,upload = layui.upload //上传
        ,element = layui.element; //元素操作

    //监听Tab切换
    element.on('tab(demo)', function(data){
        layer.msg('切换了：'+ this.innerHTML);
        console.log(data);
    });

    //执行一个 table 实例
    table.render({
        elem: '#content'
        ,height: 332
        ,url: 'https://pet-chain.baidu.com/data/market/queryPetsOnSale' //数据接口
        ,page: true //开启分页
        ,cols: [[ //表头
            {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
            ,{field: 'desc', title: '用户名', width:80}
            ,{field: 'amount', title: '价钱', width:80, sort: true}
            /*,{fixed: 'right', width: 165, align:'center', toolbar: '#barDemo'}*/
        ]]
    });

    //分页
    laypage.render({
        elem: 'pageDemo' //分页容器的id
        ,count: 100 //总页数
        ,skin: '#1E9FFF' //自定义选中色值
        //,skip: true //开启跳页
        ,jump: function(obj, first){
            if(!first){
                layer.msg('第'+ obj.curr +'页');
            }
        }
    });
});