/**
 * Created by xionghl on 2018/2/10.
 */
$(function(){
   var queryParam = {
       appId: 1,
       lastAmount: null,
       lastRareDegree: null,
       pageNo: 1,
       pageSize: 10,
       petIds: [],
       querySortType: "CREATETIME_ASC",
       requestId: 1518243274602,
       tpl: ""
   }

});

layui.config({
    version: '1515376178709' //为了更新 js 缓存，可忽略
});

layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element'], function(){
    var laydate = layui.laydate //日期
        ,laypage = layui.laypage //分页
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
        elem: '#test'
        ,height: 332
        ,url: '/demo/table/user/' //数据接口
        ,page: true //开启分页
        ,cols: [[ //表头
            {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
            ,{field: 'username', title: '用户名', width:80}
            ,{field: 'sex', title: '性别', width:80, sort: true}
            ,{field: 'city', title: '城市', width:80}
            ,{field: 'sign', title: '签名', width: 170}
            ,{field: 'experience', title: '积分', width: 80, sort: true}
            ,{field: 'score', title: '评分', width: 80, sort: true}
            ,{field: 'classify', title: '职业', width: 80}
            ,{field: 'wealth', title: '财富', width: 135, sort: true}
            ,{fixed: 'right', width: 165, align:'center', toolbar: '#barDemo'}
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