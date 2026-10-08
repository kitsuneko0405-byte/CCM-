const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.Audio,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.Audio.Acts.Play
	];
};
self.C3_JsPropNameTable = [
	{十字上: 0},
	{十字右: 0},
	{S__6: 0},
	{十字左: 0},
	{十字下: 0},
	{十字決定: 0},
	{エンター: 0},
	{バック: 0},
	{Touch: 0},
	{Audio: 0},
	{中央下: 0},
	{上真ん中: 0},
	{上右: 0},
	{上左: 0},
	{中央内右: 0},
	{中央内左: 0}
];

self.InstanceType = {
	十字上: class extends self.ISpriteInstance {},
	十字右: class extends self.ISpriteInstance {},
	S__6: class extends self.ISpriteInstance {},
	十字左: class extends self.ISpriteInstance {},
	十字下: class extends self.ISpriteInstance {},
	十字決定: class extends self.ISpriteInstance {},
	エンター: class extends self.ISpriteInstance {},
	バック: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	中央下: class extends self.ISpriteInstance {},
	上真ん中: class extends self.ISpriteInstance {},
	上右: class extends self.ISpriteInstance {},
	上左: class extends self.ISpriteInstance {},
	中央内右: class extends self.ISpriteInstance {},
	中央内左: class extends self.ISpriteInstance {}
}