import{_ as e,l as s,H as n,k as i,I as p}from"./chunk-mHw0NUlw.js";import{p as g}from"./chunk-D12W4hiF.js";import"./chunk-D6Bt7bqj.js";import"./chunk-AmoyJ0Lw.js";import"./chunk-CCS7V121.js";var v={parse:e(async r=>{const a=await g("info",r);s.debug(a)},"parse")},d={version:p},m=e(()=>d.version,"getVersion"),c={getVersion:m},l=e((r,a,o)=>{s.debug(`rendering info diagram
`+r);const t=n(a);i(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${o}`)},"draw"),f={draw:l},S={parser:v,db:c,renderer:f};export{S as diagram};