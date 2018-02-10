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
    version: '1515376178709' //Ϊ�˸��� js ���棬�ɺ���
});

layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element'], function(){
    var laydate = layui.laydate //����
        ,laypage = layui.laypage //��ҳ
         layer = layui.layer //����
        ,table = layui.table //���
        ,carousel = layui.carousel //�ֲ�
        ,upload = layui.upload //�ϴ�
        ,element = layui.element; //Ԫ�ز���

    //����Tab�л�
    element.on('tab(demo)', function(data){
        layer.msg('�л��ˣ�'+ this.innerHTML);
        console.log(data);
    });

    //ִ��һ�� table ʵ��
    table.render({
        elem: '#test'
        ,height: 332
        ,url: '/demo/table/user/' //���ݽӿ�
        ,page: true //������ҳ
        ,cols: [[ //��ͷ
            {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
            ,{field: 'username', title: '�û���', width:80}
            ,{field: 'sex', title: '�Ա�', width:80, sort: true}
            ,{field: 'city', title: '����', width:80}
            ,{field: 'sign', title: 'ǩ��', width: 170}
            ,{field: 'experience', title: '����', width: 80, sort: true}
            ,{field: 'score', title: '����', width: 80, sort: true}
            ,{field: 'classify', title: 'ְҵ', width: 80}
            ,{field: 'wealth', title: '�Ƹ�', width: 135, sort: true}
            ,{fixed: 'right', width: 165, align:'center', toolbar: '#barDemo'}
        ]]
    });

    //��ҳ
    laypage.render({
        elem: 'pageDemo' //��ҳ������id
        ,count: 100 //��ҳ��
        ,skin: '#1E9FFF' //�Զ���ѡ��ɫֵ
        //,skip: true //������ҳ
        ,jump: function(obj, first){
            if(!first){
                layer.msg('��'+ obj.curr +'ҳ');
            }
        }
    });
});