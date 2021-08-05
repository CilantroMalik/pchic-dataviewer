(this["webpackJsonppchic-dataviewer"]=this["webpackJsonppchic-dataviewer"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i.n(n),a=i(5),c=i.n(a),r=(i(14),i(15),i(7),i(4)),o=i(2),l=i(3),f=Object(l.b)({name:"assets",initialState:{cellType1:"aCD4",cellType2:"naCD4",assetType:"Contact Plots",gene:"IL7R"},reducers:{setCellType1:function(e,t){e.cellType1=t.payload},setCellType2:function(e,t){e.cellType2=t.payload},setAssetType:function(e,t){e.assetType=t.payload},setGene:function(e,t){e.gene=t.payload}}}),p=f.actions,d=p.setCellType1,g=p.setCellType2,u=p.setAssetType,m=p.setGene,h=f.reducer,b=Object(l.b)({name:"info",initialState:{visible:!1},reducers:{setVisible:function(e,t){e.visible=t.payload}}}),j=b.actions.setVisible,y=b.reducer,x=i(1),C=function(){var e=Object(o.c)((function(e){return e.assets})),t=(Object(o.c)((function(e){return e.info.visible})),Object(n.useState)([])),i=Object(r.a)(t,2),s=i[0],a=i[1],c=Object(n.useState)("IL7R"),f=Object(r.a)(c,2),p=f[0],h=f[1],b=Object(n.useState)(!1),y=Object(r.a)(b,2),C=y[0],T=y[1],O=Object(n.useState)(!1),w=Object(r.a)(O,2),v=w[0],S=w[1],k=Object(o.b)(),D=["aCD4","EP","Ery","FoeT","Mac0","Mac1","Mac2","MK","Mon","naCD4","nB","nCD4","nCD8","Neu","tB","tCD8"].map((function(t){return Object(x.jsx)("button",{disabled:!C,className:e.cellType1===t||e.cellType2===t?"button":"muted-button",onClick:function(){return function(e){if(!s.includes(e)){var t=s;t.push(e),a(t)}2===s.length&&(T(!1),k(d(s[0])),k(g(s[1])))}(t)},style:{margin:"3px",padding:"8px"},children:t},Object(l.c)())})),P=["Contact Plots","Coefficients (all) & Significance","Coefficients (max per fragment) & Significance","ECDFs"].map((function(t){return Object(x.jsx)("button",{className:e.assetType===t?"button":"muted-button",onClick:function(){return function(e){k(u(e))}(t)},style:{margin:"3px",padding:"8px"},children:t},Object(l.c)())}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"flex-row",style:{width:"100%",marginTop:"0.5rem",marginLeft:"0.5rem"},children:[Object(x.jsx)("button",{style:{margin:"3px"},onClick:function(){T(!0),a([])},className:"accent-button",children:C?"Select two...":"Reselect Cell Types"}),D]}),Object(x.jsxs)("div",{className:"flex-row",style:{width:"100%",marginTop:"0.5rem",marginLeft:"0.5rem"},children:[P,Object(x.jsx)("button",{className:"round-button",onClick:function(){k(j(!0))},style:{borderColor:"mediumpurple",backgroundColor:"mediumpurple",margin:"3px",padding:"12px",marginLeft:"6px"},children:"Figure Info"})]}),Object(x.jsxs)("div",{className:"flex-row",style:{width:"100%",marginTop:"0.5rem",marginLeft:"0.5rem"},children:[Object(x.jsx)("button",{className:"all"===e.gene?"button":"muted-button",onClick:function(){S(!0),k(m("all"))},disabled:"Contact Plots"===e.assetType||"Coefficients (all) & Significance"===e.assetType,style:"Contact Plots"===e.assetType||"Coefficients (all) & Significance"===e.assetType?{backgroundColor:"lightcoral",borderColor:"lightcoral",marginRight:"10px",marginTop:"0.2rem",opacity:"0.5"}:{marginRight:"10px",marginTop:"0.2rem"},children:"All Genes"}),Object(x.jsx)("input",{style:{color:"antiquewhite",flexBasis:"50%",marginLeft:"0.2rem",marginTop:"0.2rem",opacity:v?"0.5":"1"},placeholder:p,type:"text",onChange:function(e){S(!1),h(e.target.value)}}),Object(x.jsx)("button",{style:{marginLeft:"10px",marginTop:"0.2rem",opacity:v?"0.5":"1"},onClick:function(){k(m(p))},children:"Choose Gene"})]})]})},T=function(){var e=Object(o.c)((function(e){return e.assets})),t="",i="";return"Contact Plots"===e.assetType?(t="contactPlots",i=e.gene+".png"):"Coefficients (all) & Significance"===e.assetType?(t="genes",i=e.gene+"-significanceCoefs.png"):"Coefficients (max per fragment) & Significance"===e.assetType?(t="genesMax",i=e.gene+"-significanceMaxCoefs.png"):"ECDFs"===e.assetType&&(t="ECDFs",i=e.gene+"_maxCoefs_ecdf.png"),"all"===e.gene&&("Coefficients (max per fragment) & Significance"===e.assetType?i="_allGenes-significanceMaxCoefs.png":"ECDFs"===e.assetType&&(i="master_maxCoefs_ecdf.png")),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{class:"flex-row",style:{width:"100%",marginTop:"0.5rem",marginLeft:"0.5rem"},children:[Object(x.jsx)("h2",{style:{color:"antiquewhite",marginTop:"19%",marginRight:"10px"},children:e.cellType1}),Object(x.jsx)("img",{style:{width:"38%",margin:"10px",borderRadius:"10px"},src:"./pchic-dataviewer/images/"+e.cellType1+"/"+t+"/"+i,alt:""}),Object(x.jsx)("img",{style:{width:"38%",margin:"10px",borderRadius:"10px"},src:"./pchic-dataviewer/images/"+e.cellType2+"/"+t+"/"+i,alt:""}),Object(x.jsx)("h2",{style:{color:"antiquewhite",marginTop:"19%",marginLeft:"10px"},children:e.cellType2})]})})};var O=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.assets.assetType})),i=Object(o.c)((function(e){return e.info.visible})),n="";return n="Contact Plots"===t?"These plots depict the raw counts of PC-HiC observed interactions vs genomic distance from the bait locus. The p-values corresponding to the determined significance of each interaction are also plotted in red on a negative log scale.":"Coefficients (all) & Significance"===t?"These plots show the relationship between regression coefficients and Hi-C identified features of interest. Coefficients corresponding to each tile in the regression model were tagged with 'significance' based on the PC-HiC restriction fragment in which they were contained; if the fragment was part of a significant interaction, the coefficient was labeled 'significant', and vice versa. The histogram of coefficient values was then split based on this factor.":"Coefficients (max per fragment) & Significance"===t?"These plots show the relationship between regression coefficients and Hi-C identified features of interest. The values of the maximum coefficient from the tiles contained in each PC-HiC restriction fragment pertaining to the selected gene (or all genes, if chosen) were plotted in these graphs. If a restriction fragment participated in a significant interaction, its max coefficient is labeled 'significant'; the distributions are separated out based on this.":"These plots graph the empirical cumulative distribution function of the coefficients pertaining to tiles within the locus of the selected gene, or all genes combined if selected. Separated by significance in a similar manner to the histogram plots, with different ECDFs plotted in green and red for significant and insignificant respectively.",Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"App",style:i?{transition:"filter 0.3s ease-out",filter:"blur(10px) opacity(50%) brightness(50%)"}:{transition:"filter 0.3s ease-in"},children:[Object(x.jsx)(C,{}),Object(x.jsx)(T,{})]}),i&&Object(x.jsxs)("div",{style:{borderRadius:"15px",position:"absolute",top:"25vh",left:"25vw",width:"50%",backgroundColor:"gray",textAlign:"center"},children:[Object(x.jsx)("h3",{style:{color:"antiquewhite"},children:t}),Object(x.jsx)("p",{style:{margin:"3%"},children:n}),Object(x.jsx)("button",{onClick:function(){return e(j(!1))},style:{marginBottom:"3%"},children:"Close"})]})]})},w=Object(l.a)({reducer:{assets:h,info:y}});c.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(o.a,{store:w,children:Object(x.jsx)(O,{})})}),document.getElementById("root"))},7:function(e,t,i){}},[[21,1,2]]]);
//# sourceMappingURL=main.a43a26cd.chunk.js.map