import React from 'react'

export default function Checkbox(q, w, e, r, t, y, u, i, o, p) {
        return(
        <ul className="ks-cboxtags"  style={{marginLeft: "auto", marginRight:"auto"}}>
        <li>
          <input  name="fridge"  id="fridge" type="checkbox" value="q" disabled/>
          <label htmlFor="fridge">Fridge</label>
        </li>
        <li>
          <input  name="conditioner" checked = {w}  type="checkbox" id="conditioner" value="w" disabled/>
          <label htmlFor="conditioner">Conditioner</label>
        </li>
        <li>
          <input  name="view" checked = {e} type="checkbox" id="view" value="e" disabled/>
          <label htmlFor="view">View</label>
        </li>
        <li>
          <input  name="bar" checked = {r} type="checkbox" id="bar" value="r" disabled/>
          <label htmlFor="bar">Bar</label>
        </li>
        <li>
          <input  name="safe" checked = {t} type="checkbox" id="safe" value="t" disabled/>
          <label htmlFor="safe">Safe</label>
        </li>
        <li>
          <input  name="kitchen" checked = {y} type="checkbox" id="kitchen" value="y" disabled/>
          <label htmlFor="kitchen">Kitchen</label>
        </li>
        <li>
          <input name="plazma" checked = {u} type="checkbox" id="plazma" value="u" disabled/>
          <label htmlFor="plazma">Plazma</label>
        </li>
        <li>
          <input name="threeTimes" checked = {i} type="checkbox" id="threeTimes" value="i" disabled/>
          <label htmlFor="threeTimes">Three Times Serv.</label>
        </li>
        <li>
          <input name="delievery" checked = {o} type="checkbox" id="delievery" value="o" disabled/>
          <label htmlFor="delievery">Delievery</label>
        </li>
        <li>
          <input name="remoteControl" checked = {p} type="checkbox" id="remoteControl" value="p" disabled/>
          <label htmlFor="remoteControl">Remote Control Curtains</label>
        </li>
        </ul>
        )
}
