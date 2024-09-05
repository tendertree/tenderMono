/*
 * using checkbox and css, it make dropdown menu
 */
import "./checkbox.css"
export default function Checkbox(): JSX.Element {
    return (
        <>
            <input type="checkbox" id="mycheckbox"></input>
            <label htmlFor="mycheckbox" >myLabel</label>
        </>
    )
}
