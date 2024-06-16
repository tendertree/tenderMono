export default function main(): JSX.Element {
    return (
        <div>
            <script>
                let app = new PIXI.Application({width: 640, height: 360 });
                const container = new PIXI.Container();
                const texture = PIXI.Texture.from(주소)
                app.stage.addChild(sprite);
  app.ticker.add((delta) => {   
	const bunny = new PIXI.Sprite(texture);
	sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;});
                container.addChild(bunny);

            </script>
            document.body.appendChild(app.view);


        </div>
    )
}
