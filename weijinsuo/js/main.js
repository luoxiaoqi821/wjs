// 改变浏览器窗口获取不同图片
$(function () {
  function resize() {
    // 获取浏览器宽度
    var windowWidth = $(window).width();

    var isSmallScreen = windowWidth < 768;
    console.log(isSmallScreen);

    // 根据isSmallScreen的值来切换图片
    var ida = $('.carousel-inner > .item');
    console.log(ida);
    ida.each(function (i, item) {
      // 把DOM对象转换为jq对象
      $item = $(item);
      var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
      console.log(imgSrc)
      $item.html('<img src="' + imgSrc + '"/>');
    })


    var $ulContainer = $('.nav-tabs');
    var width = 0;
    //获取子元素 循环
    $ulContainer.children().each(function (index, element) {
      // 元素的宽度
      //element.clientWidth 每一个元素的宽度
      //  console.log( element.clientWidth)
      //整个长度
      width += element.clientWidth;
    })
    //  解决在pc端出现滚动条
    if (width > $(window).width()) {//宽度大于屏幕宽度
      $ulContainer.css('width', width).parent().css('overflow-x', 'scroll');
    }else{
      $ulContainer.css('width', width).parent().css('overflow', 'hidden');
    }


    $(window).on('resize', resize).trigger('resize');


    // 触发tooltips
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })


    // 选项卡滚动条实现
    // 1.拿到标签页的标签容器宽度
    // 2.获取所有子元素的和  li.widht+li.width.....
    // 3.遍历元素
    // 4.把宽度赋值给容器

   
  }
  //新闻版块单击改变标题
    //获取点击a标签
  $('#newsTab .nav-pills a').on('click',function(){
  //获取当前要操作的元素
  $this =$(this);
  //自定义属性获取对应的title值
  var title =$(this).data('title');
  //把title赋值给标题
  $('.newsTitle').text(title);
  })
    
  
})