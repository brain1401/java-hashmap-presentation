import{_ as m,d as lt,g as _t,s as xt,b as vt,c as bt,q as wt,p as St,v as Lt,e as Et,o as At,j as H,M as Tt,aU as Mt,a2 as Nt}from"./mermaid-CQpNaxC_.js";function ct(t,n){let s;if(n===void 0)for(const a of t)a!=null&&(s<a||s===void 0&&a>=a)&&(s=a);else{let a=-1;for(let h of t)(h=n(h,++a,t))!=null&&(s<h||s===void 0&&h>=h)&&(s=h)}return s}function pt(t,n){let s;if(n===void 0)for(const a of t)a!=null&&(s>a||s===void 0&&a>=a)&&(s=a);else{let a=-1;for(let h of t)(h=n(h,++a,t))!=null&&(s>h||s===void 0&&h>=h)&&(s=h)}return s}function nt(t,n){let s=0;if(n===void 0)for(let a of t)(a=+a)&&(s+=a);else{let a=-1;for(let h of t)(h=+n(h,++a,t))&&(s+=h)}return s}function It(t){return t.target.depth}function Pt(t){return t.depth}function Ct(t,n){return n-1-t.height}function mt(t,n){return t.sourceLinks.length?t.depth:n-1}function Ot(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?pt(t.sourceLinks,It)-1:0}function X(t){return function(){return t}}function ut(t,n){return Q(t.source,n.source)||t.index-n.index}function ht(t,n){return Q(t.target,n.target)||t.index-n.index}function Q(t,n){return t.y0-n.y0}function it(t){return t.value}function Dt(t){return t.index}function jt(t){return t.nodes}function zt(t){return t.links}function ft(t,n){const s=t.get(n);if(!s)throw new Error("missing: "+n);return s}function yt({nodes:t}){for(const n of t){let s=n.y0,a=s;for(const h of n.sourceLinks)h.y0=s+h.width/2,s+=h.width;for(const h of n.targetLinks)h.y1=a+h.width/2,a+=h.width}}function $t(){let t=0,n=0,s=1,a=1,h=24,d=8,p,_=Dt,i=mt,o,l,x=jt,v=zt,y=6;function b(){const e={nodes:x.apply(null,arguments),links:v.apply(null,arguments)};return M(e),T(e),N(e),C(e),S(e),yt(e),e}b.update=function(e){return yt(e),e},b.nodeId=function(e){return arguments.length?(_=typeof e=="function"?e:X(e),b):_},b.nodeAlign=function(e){return arguments.length?(i=typeof e=="function"?e:X(e),b):i},b.nodeSort=function(e){return arguments.length?(o=e,b):o},b.nodeWidth=function(e){return arguments.length?(h=+e,b):h},b.nodePadding=function(e){return arguments.length?(d=p=+e,b):d},b.nodes=function(e){return arguments.length?(x=typeof e=="function"?e:X(e),b):x},b.links=function(e){return arguments.length?(v=typeof e=="function"?e:X(e),b):v},b.linkSort=function(e){return arguments.length?(l=e,b):l},b.size=function(e){return arguments.length?(t=n=0,s=+e[0],a=+e[1],b):[s-t,a-n]},b.extent=function(e){return arguments.length?(t=+e[0][0],s=+e[1][0],n=+e[0][1],a=+e[1][1],b):[[t,n],[s,a]]},b.iterations=function(e){return arguments.length?(y=+e,b):y};function M({nodes:e,links:f}){for(const[c,r]of e.entries())r.index=c,r.sourceLinks=[],r.targetLinks=[];const u=new Map(e.map((c,r)=>[_(c,r,e),c]));for(const[c,r]of f.entries()){r.index=c;let{source:k,target:w}=r;typeof k!="object"&&(k=r.source=ft(u,k)),typeof w!="object"&&(w=r.target=ft(u,w)),k.sourceLinks.push(r),w.targetLinks.push(r)}if(l!=null)for(const{sourceLinks:c,targetLinks:r}of e)c.sort(l),r.sort(l)}function T({nodes:e}){for(const f of e)f.value=f.fixedValue===void 0?Math.max(nt(f.sourceLinks,it),nt(f.targetLinks,it)):f.fixedValue}function N({nodes:e}){const f=e.length;let u=new Set(e),c=new Set,r=0;for(;u.size;){for(const k of u){k.depth=r;for(const{target:w}of k.sourceLinks)c.add(w)}if(++r>f)throw new Error("circular link");u=c,c=new Set}}function C({nodes:e}){const f=e.length;let u=new Set(e),c=new Set,r=0;for(;u.size;){for(const k of u){k.height=r;for(const{source:w}of k.targetLinks)c.add(w)}if(++r>f)throw new Error("circular link");u=c,c=new Set}}function j({nodes:e}){const f=ct(e,r=>r.depth)+1,u=(s-t-h)/(f-1),c=new Array(f);for(const r of e){const k=Math.max(0,Math.min(f-1,Math.floor(i.call(null,r,f))));r.layer=k,r.x0=t+k*u,r.x1=r.x0+h,c[k]?c[k].push(r):c[k]=[r]}if(o)for(const r of c)r.sort(o);return c}function R(e){const f=pt(e,u=>(a-n-(u.length-1)*p)/nt(u,it));for(const u of e){let c=n;for(const r of u){r.y0=c,r.y1=c+r.value*f,c=r.y1+p;for(const k of r.sourceLinks)k.width=k.value*f}c=(a-c+p)/(u.length+1);for(let r=0;r<u.length;++r){const k=u[r];k.y0+=c*(r+1),k.y1+=c*(r+1)}A(u)}}function S(e){const f=j(e);p=Math.min(d,(a-n)/(ct(f,u=>u.length)-1)),R(f);for(let u=0;u<y;++u){const c=Math.pow(.99,u),r=Math.max(1-c,(u+1)/y);B(f,c,r),P(f,c,r)}}function P(e,f,u){for(let c=1,r=e.length;c<r;++c){const k=e[c];for(const w of k){let L=0,V=0;for(const{source:Y,value:et}of w.targetLinks){let q=et*(w.layer-Y.layer);L+=z(Y,w)*q,V+=q}if(!(V>0))continue;let G=(L/V-w.y0)*f;w.y0+=G,w.y1+=G,E(w)}o===void 0&&k.sort(Q),O(k,u)}}function B(e,f,u){for(let c=e.length,r=c-2;r>=0;--r){const k=e[r];for(const w of k){let L=0,V=0;for(const{target:Y,value:et}of w.sourceLinks){let q=et*(Y.layer-w.layer);L+=I(w,Y)*q,V+=q}if(!(V>0))continue;let G=(L/V-w.y0)*f;w.y0+=G,w.y1+=G,E(w)}o===void 0&&k.sort(Q),O(k,u)}}function O(e,f){const u=e.length>>1,c=e[u];g(e,c.y0-p,u-1,f),D(e,c.y1+p,u+1,f),g(e,a,e.length-1,f),D(e,n,0,f)}function D(e,f,u,c){for(;u<e.length;++u){const r=e[u],k=(f-r.y0)*c;k>1e-6&&(r.y0+=k,r.y1+=k),f=r.y1+p}}function g(e,f,u,c){for(;u>=0;--u){const r=e[u],k=(r.y1-f)*c;k>1e-6&&(r.y0-=k,r.y1-=k),f=r.y0-p}}function E({sourceLinks:e,targetLinks:f}){if(l===void 0){for(const{source:{sourceLinks:u}}of f)u.sort(ht);for(const{target:{targetLinks:u}}of e)u.sort(ut)}}function A(e){if(l===void 0)for(const{sourceLinks:f,targetLinks:u}of e)f.sort(ht),u.sort(ut)}function z(e,f){let u=e.y0-(e.sourceLinks.length-1)*p/2;for(const{target:c,width:r}of e.sourceLinks){if(c===f)break;u+=r+p}for(const{source:c,width:r}of f.targetLinks){if(c===e)break;u-=r}return u}function I(e,f){let u=f.y0-(f.targetLinks.length-1)*p/2;for(const{source:c,width:r}of f.targetLinks){if(c===e)break;u+=r+p}for(const{target:c,width:r}of e.sourceLinks){if(c===f)break;u-=r}return u}return b}var st=Math.PI,rt=2*st,F=1e-6,Bt=rt-F;function ot(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function kt(){return new ot}ot.prototype=kt.prototype={constructor:ot,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,s,a){this._+="Q"+ +t+","+ +n+","+(this._x1=+s)+","+(this._y1=+a)},bezierCurveTo:function(t,n,s,a,h,d){this._+="C"+ +t+","+ +n+","+ +s+","+ +a+","+(this._x1=+h)+","+(this._y1=+d)},arcTo:function(t,n,s,a,h){t=+t,n=+n,s=+s,a=+a,h=+h;var d=this._x1,p=this._y1,_=s-t,i=a-n,o=d-t,l=p-n,x=o*o+l*l;if(h<0)throw new Error("negative radius: "+h);if(this._x1===null)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(x>F)if(!(Math.abs(l*_-i*o)>F)||!h)this._+="L"+(this._x1=t)+","+(this._y1=n);else{var v=s-d,y=a-p,b=_*_+i*i,M=v*v+y*y,T=Math.sqrt(b),N=Math.sqrt(x),C=h*Math.tan((st-Math.acos((b+x-M)/(2*T*N)))/2),j=C/N,R=C/T;Math.abs(j-1)>F&&(this._+="L"+(t+j*o)+","+(n+j*l)),this._+="A"+h+","+h+",0,0,"+ +(l*v>o*y)+","+(this._x1=t+R*_)+","+(this._y1=n+R*i)}},arc:function(t,n,s,a,h,d){t=+t,n=+n,s=+s,d=!!d;var p=s*Math.cos(a),_=s*Math.sin(a),i=t+p,o=n+_,l=1^d,x=d?a-h:h-a;if(s<0)throw new Error("negative radius: "+s);this._x1===null?this._+="M"+i+","+o:(Math.abs(this._x1-i)>F||Math.abs(this._y1-o)>F)&&(this._+="L"+i+","+o),s&&(x<0&&(x=x%rt+rt),x>Bt?this._+="A"+s+","+s+",0,1,"+l+","+(t-p)+","+(n-_)+"A"+s+","+s+",0,1,"+l+","+(this._x1=i)+","+(this._y1=o):x>F&&(this._+="A"+s+","+s+",0,"+ +(x>=st)+","+l+","+(this._x1=t+s*Math.cos(h))+","+(this._y1=n+s*Math.sin(h))))},rect:function(t,n,s,a){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +s+"v"+ +a+"h"+-s+"Z"},toString:function(){return this._}};function dt(t){return function(){return t}}function Rt(t){return t[0]}function Vt(t){return t[1]}var Ft=Array.prototype.slice;function Wt(t){return t.source}function Ut(t){return t.target}function Gt(t){var n=Wt,s=Ut,a=Rt,h=Vt,d=null;function p(){var _,i=Ft.call(arguments),o=n.apply(this,i),l=s.apply(this,i);if(d||(d=_=kt()),t(d,+a.apply(this,(i[0]=o,i)),+h.apply(this,i),+a.apply(this,(i[0]=l,i)),+h.apply(this,i)),_)return d=null,_+""||null}return p.source=function(_){return arguments.length?(n=_,p):n},p.target=function(_){return arguments.length?(s=_,p):s},p.x=function(_){return arguments.length?(a=typeof _=="function"?_:dt(+_),p):a},p.y=function(_){return arguments.length?(h=typeof _=="function"?_:dt(+_),p):h},p.context=function(_){return arguments.length?(d=_??null,p):d},p}function Yt(t,n,s,a,h){t.moveTo(n,s),t.bezierCurveTo(n=(n+a)/2,s,n,h,a,h)}function qt(){return Gt(Yt)}function Ht(t){return[t.source.x1,t.y0]}function Xt(t){return[t.target.x0,t.y1]}function Qt(){return qt().source(Ht).target(Xt)}var at=function(){var t=m(function(_,i,o,l){for(o=o||{},l=_.length;l--;o[_[l]]=i);return o},"o"),n=[1,9],s=[1,10],a=[1,5,10,12],h={trace:m(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:m(function(i,o,l,x,v,y,b){var M=y.length-1;switch(v){case 7:const T=x.findOrCreateNode(y[M-4].trim().replaceAll('""','"')),N=x.findOrCreateNode(y[M-2].trim().replaceAll('""','"')),C=parseFloat(y[M].trim());x.addLink(T,N,C);break;case 8:case 9:case 11:this.$=y[M];break;case 10:this.$=y[M-1];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:n,20:s},{1:[2,6],7:11,10:[1,12]},t(s,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(a,[2,8]),t(a,[2,9]),{19:[1,16]},t(a,[2,11]),{1:[2,1]},{1:[2,5]},t(s,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:n,20:s},{15:18,16:7,17:8,18:n,20:s},{18:[1,19]},t(s,[2,3]),{12:[1,20]},t(a,[2,10]),{15:21,16:7,17:8,18:n,20:s},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:m(function(i,o){if(o.recoverable)this.trace(i);else{var l=new Error(i);throw l.hash=o,l}},"parseError"),parse:m(function(i){var o=this,l=[0],x=[],v=[null],y=[],b=this.table,M="",T=0,N=0,C=2,j=1,R=y.slice.call(arguments,1),S=Object.create(this.lexer),P={yy:{}};for(var B in this.yy)Object.prototype.hasOwnProperty.call(this.yy,B)&&(P.yy[B]=this.yy[B]);S.setInput(i,P.yy),P.yy.lexer=S,P.yy.parser=this,typeof S.yylloc>"u"&&(S.yylloc={});var O=S.yylloc;y.push(O);var D=S.options&&S.options.ranges;typeof P.yy.parseError=="function"?this.parseError=P.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function g(L){l.length=l.length-2*L,v.length=v.length-L,y.length=y.length-L}m(g,"popStack");function E(){var L;return L=x.pop()||S.lex()||j,typeof L!="number"&&(L instanceof Array&&(x=L,L=x.pop()),L=o.symbols_[L]||L),L}m(E,"lex");for(var A,z,I,e,f={},u,c,r,k;;){if(z=l[l.length-1],this.defaultActions[z]?I=this.defaultActions[z]:((A===null||typeof A>"u")&&(A=E()),I=b[z]&&b[z][A]),typeof I>"u"||!I.length||!I[0]){var w="";k=[];for(u in b[z])this.terminals_[u]&&u>C&&k.push("'"+this.terminals_[u]+"'");S.showPosition?w="Parse error on line "+(T+1)+`:
`+S.showPosition()+`
Expecting `+k.join(", ")+", got '"+(this.terminals_[A]||A)+"'":w="Parse error on line "+(T+1)+": Unexpected "+(A==j?"end of input":"'"+(this.terminals_[A]||A)+"'"),this.parseError(w,{text:S.match,token:this.terminals_[A]||A,line:S.yylineno,loc:O,expected:k})}if(I[0]instanceof Array&&I.length>1)throw new Error("Parse Error: multiple actions possible at state: "+z+", token: "+A);switch(I[0]){case 1:l.push(A),v.push(S.yytext),y.push(S.yylloc),l.push(I[1]),A=null,N=S.yyleng,M=S.yytext,T=S.yylineno,O=S.yylloc;break;case 2:if(c=this.productions_[I[1]][1],f.$=v[v.length-c],f._$={first_line:y[y.length-(c||1)].first_line,last_line:y[y.length-1].last_line,first_column:y[y.length-(c||1)].first_column,last_column:y[y.length-1].last_column},D&&(f._$.range=[y[y.length-(c||1)].range[0],y[y.length-1].range[1]]),e=this.performAction.apply(f,[M,N,T,P.yy,I[1],v,y].concat(R)),typeof e<"u")return e;c&&(l=l.slice(0,-1*c*2),v=v.slice(0,-1*c),y=y.slice(0,-1*c)),l.push(this.productions_[I[1]][0]),v.push(f.$),y.push(f._$),r=b[l[l.length-2]][l[l.length-1]],l.push(r);break;case 3:return!0}}return!0},"parse")},d=function(){var _={EOF:1,parseError:m(function(o,l){if(this.yy.parser)this.yy.parser.parseError(o,l);else throw new Error(o)},"parseError"),setInput:m(function(i,o){return this.yy=o||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:m(function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var o=i.match(/(?:\r\n?|\n).*/g);return o?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},"input"),unput:m(function(i){var o=i.length,l=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var x=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var v=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===x.length?this.yylloc.first_column:0)+x[x.length-l.length].length-l[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[v[0],v[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},"unput"),more:m(function(){return this._more=!0,this},"more"),reject:m(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:m(function(i){this.unput(this.match.slice(i))},"less"),pastInput:m(function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:m(function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:m(function(){var i=this.pastInput(),o=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+o+"^"},"showPosition"),test_match:m(function(i,o){var l,x,v;if(this.options.backtrack_lexer&&(v={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(v.yylloc.range=this.yylloc.range.slice(0))),x=i[0].match(/(?:\r\n?|\n).*/g),x&&(this.yylineno+=x.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:x?x[x.length-1].length-x[x.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],l=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var y in v)this[y]=v[y];return!1}return!1},"test_match"),next:m(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,o,l,x;this._more||(this.yytext="",this.match="");for(var v=this._currentRules(),y=0;y<v.length;y++)if(l=this._input.match(this.rules[v[y]]),l&&(!o||l[0].length>o[0].length)){if(o=l,x=y,this.options.backtrack_lexer){if(i=this.test_match(l,v[y]),i!==!1)return i;if(this._backtrack){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(i=this.test_match(o,v[x]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:m(function(){var o=this.next();return o||this.lex()},"lex"),begin:m(function(o){this.conditionStack.push(o)},"begin"),popState:m(function(){var o=this.conditionStack.length-1;return o>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:m(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:m(function(o){return o=this.conditionStack.length-1-Math.abs(o||0),o>=0?this.conditionStack[o]:"INITIAL"},"topState"),pushState:m(function(o){this.begin(o)},"pushState"),stateStackSize:m(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:m(function(o,l,x,v){switch(x){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},"anonymous"),rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};return _}();h.lexer=d;function p(){this.yy={}}return m(p,"Parser"),p.prototype=h,h.Parser=p,new p}();at.parser=at;var K=at,J=[],tt=[],Z=new Map,Kt=m(()=>{J=[],tt=[],Z=new Map,Lt()},"clear"),W,Zt=(W=class{constructor(n,s,a=0){this.source=n,this.target=s,this.value=a}},m(W,"SankeyLink"),W),Jt=m((t,n,s)=>{J.push(new Zt(t,n,s))},"addLink"),U,te=(U=class{constructor(n){this.ID=n}},m(U,"SankeyNode"),U),ee=m(t=>{t=Et.sanitizeText(t,lt());let n=Z.get(t);return n===void 0&&(n=new te(t),Z.set(t,n),tt.push(n)),n},"findOrCreateNode"),ne=m(()=>tt,"getNodes"),ie=m(()=>J,"getLinks"),se=m(()=>({nodes:tt.map(t=>({id:t.ID})),links:J.map(t=>({source:t.source.ID,target:t.target.ID,value:t.value}))}),"getGraph"),re={nodesMap:Z,getConfig:m(()=>lt().sankey,"getConfig"),getNodes:ne,getLinks:ie,getGraph:se,addLink:Jt,findOrCreateNode:ee,getAccTitle:_t,setAccTitle:xt,getAccDescription:vt,setAccDescription:bt,getDiagramTitle:wt,setDiagramTitle:St,clear:Kt},$,gt=($=class{static next(n){return new $(n+ ++$.count)}constructor(n){this.id=n,this.href=`#${n}`}toString(){return"url("+this.href+")"}},m($,"Uid"),$.count=0,$),oe={left:Pt,right:Ct,center:Ot,justify:mt},ae=m(function(t,n,s,a){const{securityLevel:h,sankey:d}=lt(),p=At.sankey;let _;h==="sandbox"&&(_=H("#i"+n));const i=h==="sandbox"?H(_.nodes()[0].contentDocument.body):H("body"),o=h==="sandbox"?i.select(`[id="${n}"]`):H(`[id="${n}"]`),l=(d==null?void 0:d.width)??p.width,x=(d==null?void 0:d.height)??p.width,v=(d==null?void 0:d.useMaxWidth)??p.useMaxWidth,y=(d==null?void 0:d.nodeAlignment)??p.nodeAlignment,b=(d==null?void 0:d.prefix)??p.prefix,M=(d==null?void 0:d.suffix)??p.suffix,T=(d==null?void 0:d.showValues)??p.showValues,N=a.db.getGraph(),C=oe[y];$t().nodeId(g=>g.id).nodeWidth(10).nodePadding(10+(T?15:0)).nodeAlign(C).extent([[0,0],[l,x]])(N);const S=Tt(Mt);o.append("g").attr("class","nodes").selectAll(".node").data(N.nodes).join("g").attr("class","node").attr("id",g=>(g.uid=gt.next("node-")).id).attr("transform",function(g){return"translate("+g.x0+","+g.y0+")"}).attr("x",g=>g.x0).attr("y",g=>g.y0).append("rect").attr("height",g=>g.y1-g.y0).attr("width",g=>g.x1-g.x0).attr("fill",g=>S(g.id));const P=m(({id:g,value:E})=>T?`${g}
${b}${Math.round(E*100)/100}${M}`:g,"getText");o.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(N.nodes).join("text").attr("x",g=>g.x0<l/2?g.x1+6:g.x0-6).attr("y",g=>(g.y1+g.y0)/2).attr("dy",`${T?"0":"0.35"}em`).attr("text-anchor",g=>g.x0<l/2?"start":"end").text(P);const B=o.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(N.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),O=(d==null?void 0:d.linkColor)??"gradient";if(O==="gradient"){const g=B.append("linearGradient").attr("id",E=>(E.uid=gt.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",E=>E.source.x1).attr("x2",E=>E.target.x0);g.append("stop").attr("offset","0%").attr("stop-color",E=>S(E.source.id)),g.append("stop").attr("offset","100%").attr("stop-color",E=>S(E.target.id))}let D;switch(O){case"gradient":D=m(g=>g.uid,"coloring");break;case"source":D=m(g=>S(g.source.id),"coloring");break;case"target":D=m(g=>S(g.target.id),"coloring");break;default:D=O}B.append("path").attr("d",Qt()).attr("stroke",D).attr("stroke-width",g=>Math.max(1,g.width)),Nt(void 0,o,0,v)},"draw"),le={draw:ae},ce=m(t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,`
`).trim(),"prepareTextForParsing"),ue=K.parse.bind(K);K.parse=t=>ue(ce(t));var fe={parser:K,db:re,renderer:le};export{fe as diagram};