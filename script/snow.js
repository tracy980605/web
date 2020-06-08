(function($){
  $.fn.snow = function(options){
  var $flake = $('<div id="snowbox" />').css({'position': 'absolute','z-index':'9999', 'top': '-50px'}).html('&#10052;'),
  documentHeight     = $(document).height(),
  documentWidth  = $(document).width(),
  defaults = {
     minSize   : 10,
     maxSize   : 20,
     newOn     : 1000,
     flakeColor : "#AFDAEF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
  },
  options = $.extend({}, defaults, options);
  var interval= setInterval( function(){
	var startPositionLeft = Math.random() * documentWidth - 100, // 飘落物下落时随机位置
	startOpacity = 0.5 + Math.random(), // 获取随机的透明度
	sizeFlake = options.minSize + Math.random() * options.maxSize,// 获取飘落物随机大小
	endPositionTop = documentHeight - 200, // 飘落物距离窗体上端距离
	endPositionLeft = startPositionLeft - 500 + Math.random() * 500,// 飘落物距离窗体左端距离
	durationFall = documentHeight * 10 + Math.random() * 5000;  // 获取飘落物下落的随机速度
	$flake.clone().appendTo('body').css({
		left: startPositionLeft,
		opacity: startOpacity,
		'font-size': sizeFlake,
		color: options.flakeColor   }).animate({
		top: endPositionTop,
		left: endPositionLeft,
		opacity: 0.2
	},durationFall,'linear',function(){
		$(this).remove()
	});
	}, options.newOn);
	};
	})(jQuery);$(function(){
		$.fn.snow({
		minSize: 5, /* 定义雪花最小尺寸 */
		maxSize: 50,/* 定义雪花最大尺寸 */
		newOn: 300  /* 定义密集程度，数字越小越密集 */
	});});