Laya.init(Laya.Browser.width, Laya.Browser.height);

Laya.stage.scaleMode = 'showall';
Laya.stage.alignH = 'center';
Laya.stage.alignV = 'middle';
Laya.stage.bgColor = "#232628";

// 加载图片方式1ls
var img1 = new Laya.Sprite();
img1.loadImage(baseUrl + 'xujie.jpg', 0, 0, 376, 376, Laya.Handler.create(null, function() {
	Laya.stage.addChild(img1);
})).pivot(138, 0).pos(Laya.Browser.width >> 1, 100);

// 加载图片方式2
Laya.loader.load(baseUrl + 'zhuiming.jpg', Laya.Handler.create(null, function(res) {
	var img2 = new Laya.Sprite();
	img2.graphics.drawTexture(res, 0, 0, 375, 375 * res.sourceHeight / res.sourceWidth);
	img2.pivot(138, img2.getBounds().height).pos(Laya.Browser.width >> 1, Laya.Browser.height - 100);
	Laya.stage.addChild(img2)
}));


