Laya.init(750, 1334);

Laya.stage.scaleMode = 'showall';

// 加载图片方式1
var img1 = new Laya.Sprite();
img1.loadImage(baseUrl + 'xujie.jpg', 0, 0, 375, 375, Laya.Handler.create(null, function() {
	Laya.stage.addChild(img1);
})).pivot(375 / 2, 0).pos(375, 100);

// 加载图片方式2
Laya.loader.load(baseUrl + 'zhuiming.jpg', Laya.Handler.create(null, function(res) {
	var img2 = new Laya.Sprite();
	img2.graphics.drawTexture(res, 0, 0, 375, 375 * res.sourceHeight / res.sourceWidth);
	img2.pivot(375 / 2, img2.getBounds().height).pos(375, 1234);
	Laya.stage.addChild(img2)
}));


