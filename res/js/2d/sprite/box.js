Laya.init(Laya.Browser.width, Laya.Browser.height);

Laya.stage.scaleMode = 'showall';
Laya.stage.alignH = 'center';
Laya.stage.alignV = 'middle';
Laya.stage.bgColor = "#232628";

var imgs = [
	baseUrl + 'monkey0.png',
	baseUrl + 'monkey1.png',
	baseUrl + 'monkey2.png',
	baseUrl + 'monkey3.png'
]

var x = Laya.Browser.width >> 1;
var y = Laya.Browser.height >> 1;
var r = 150;
var deg = Math.PI / 2;

Laya.loader.load(imgs, Laya.Handler.create(null, function(flag) {
	if (flag) {
		var box = new Laya.Sprite();
		box.graphics.drawCircle(0, 0, r, '#ff0000');

		for(var i = 0;i < imgs.length;i++) {
			var res = Laya.loader.getRes(imgs[i]);
			var img = new Laya.Sprite();
			img.graphics.drawTexture(res);
			img.pivot(res.sourceWidth >> 1, res.sourceHeight >> 1).pos(Math.cos(deg * i) * r, -Math.sin(deg * i) * r);
			box.addChild(img);
		}	

		box.pos(x, y).scale(2, 2).rotation = Math.atan(x / y) * 180 / Math.PI;
		Laya.timer.frameLoop(1, box, function() {
			this.rotation += 1;
		}, null, true);
		Laya.stage.addChild(box);
			
	}
}));