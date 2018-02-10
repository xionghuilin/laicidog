/**
 * Created by xionghl on 2018/2/10.
 */
$(function(){

});

layui.config({
    version: '1515376178709' //Ϊ�˸��� js ���棬�ɺ���
});

layui.use([ 'laypage', 'layer', 'table', 'carousel', 'upload', 'element'], function(){
    var tableOptions = {
        url: 'https://pet-chain.baidu.com/data/market/queryPetsOnSale', //�����ַ
        method: 'POST', //��ʽ
        id: 'content', //���� Layui table �ı�ʶ id�������ṩ�����ں���ˢ�²��������߸ô���������
        page: false, //�Ƿ��ҳ
        where: { type: "all" }, //�����˽ӿڵ��������ô�������������㣬���չٷ������Ĵ���ʾ����ԭ��д���� where: { key : { type: "all" } }�������������������������д��key ���Ǻ�˵�һ������Ϊ������������ type ���ԣ��������Ϊ key �� Layui �ṩ�ĸ�ʽ���Ǿʹ���ش���
        response: { //������ json ��ʽ����ϸ�μ��ٷ��ĵ�
            statusName: 'Code', //״̬�ֶ�����
            statusCode: '200', //״̬�ֶγɹ�ֵ
            msgName: 'Message', //��Ϣ�ֶ�
            countName: 'Total', //�����ֶ�
            dataName: 'Result' //�����ֶ�
        }
    };
    var laypage = layui.laypage //��ҳ
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
        elem: '#content'
        ,height: 332
        ,url: 'https://pet-chain.baidu.com/data/market/queryPetsOnSale' //���ݽӿ�
        ,page: true //������ҳ
        ,cols: [[ //��ͷ
            {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
            ,{field: 'desc', title: '�û���', width:80}
            ,{field: 'amount', title: '��Ǯ', width:80, sort: true}
            /*,{fixed: 'right', width: 165, align:'center', toolbar: '#barDemo'}*/
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