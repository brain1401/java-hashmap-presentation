import{_ as e,l as s,G as n,k as i,H as p}from"./index-gR89gXUD.js";import{p as g}from"./gitGraph-YCYPL57B-aTdgEJwy.js";import"./_baseUniq-DkljHV4n.js";import"./_basePickBy-Dl8G1UGA.js";import"./clone-BX8fKKUn.js";var v={parse:e(async r=>{const a=await g("info",r);s.debug(a)},"parse")},d={version:p},m=e(()=>d.version,"getVersion"),c={getVersion:m},l=e((r,a,o)=>{s.debug(`rendering info diagram
`+r);const t=n(a);i(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${o}`)},"draw"),f={draw:l},S={parser:v,db:c,renderer:f};export{S as diagram};
