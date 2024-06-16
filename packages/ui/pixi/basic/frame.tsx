import * as PIXI from 'pixi.js';
export default function Frame(): JSX.Element {
    let frame = new PIXI.Graphics();
    frame.beginFill(0x666666);
    frame.lineStyle({ color: 0xffffff, width: 4, alignment: 0 });
    frame.drawRect(0, 0, 208, 208);
    frame.position.set(320 - 104, 180 - 104);
    return (
        <div>data</div>
    )
}
