(function(e){function t(t){for(var c,i,o=t[0],r=t[1],a=t[2],s=0,f=[];s<o.length;s++)i=o[s],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&f.push(l[i][0]),l[i]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],c=!0,o=1;o<n.length;o++){var r=n[o];0!==l[r]&&(c=!1)}c&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},l={app:0},u=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var d=r;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2365:function(e,t,n){},"351c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function l(e,t,n,l,u,i){var o=Object(c["i"])("ProductList"),r=Object(c["i"])("AddProduct");return Object(c["g"])(),Object(c["e"])(c["a"],null,[u.inList?(Object(c["g"])(),Object(c["c"])(o,{key:0,onOnAdd:t[0]||(t[0]=function(e){return i.goToAdd()})})):Object(c["d"])("",!0),u.inList?Object(c["d"])("",!0):(Object(c["g"])(),Object(c["c"])(r,{key:1,onOnSave:t[1]||(t[1]=function(e){return i.goToList()})}))],64)}var u={class:"content"},i={class:"header"},o=Object(c["f"])("h2",null,"Product List",-1),r={class:"buttons"},a=Object(c["f"])("div",{class:"separator"},null,-1),d={class:"product"},s=["onChange"],f={key:0},b={key:1},p={key:2};function j(e,t,n,l,j,O){return Object(c["g"])(),Object(c["e"])("div",u,[Object(c["f"])("div",i,[o,Object(c["f"])("div",r,[Object(c["f"])("button",{onClick:t[0]||(t[0]=function(){return O.add&&O.add.apply(O,arguments)})},"ADD"),Object(c["f"])("button",{onClick:t[1]||(t[1]=function(){return O.deleteAll&&O.deleteAll.apply(O,arguments)})},"MASS DELETE")])]),a,(Object(c["g"])(!0),Object(c["e"])(c["a"],null,Object(c["h"])(j.products.body,(function(e){return Object(c["g"])(),Object(c["e"])("div",{class:"list",key:e.sku},[Object(c["f"])("div",d,[Object(c["f"])("input",{type:"checkbox",onChange:function(t){return O.addToDelete(e.ID)}},null,40,s),Object(c["f"])("p",null,Object(c["j"])(e.SKU),1),Object(c["f"])("p",null,Object(c["j"])(e.Name),1),Object(c["f"])("p",null,Object(c["j"])(e.Price)+" $",1),Object(c["f"])("p",null,["DVD"==e.Type?(Object(c["g"])(),Object(c["e"])("span",f," Size: ")):"Book"==e.Type?(Object(c["g"])(),Object(c["e"])("span",b," Weigth: ")):(Object(c["g"])(),Object(c["e"])("span",p," Dimension: ")),Object(c["f"])("span",null,Object(c["j"])(e.Value),1)])])])})),128))])}n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("159b");var O=n("8206"),h=n.n(O),v={data:function(){return{products:"",forDeleteItems:new Set}},mounted:function(){var e=this;h.a.get("https://pr0ductlist.000webhostapp.com/BackEnd/api/get_products.php").then((function(t){e.products=t.data}))},methods:{add:function(){this.$emit("onAdd")},addToDelete:function(e){this.forDeleteItems.has(e)?this.forDeleteItems.delete(e):this.forDeleteItems.add(e)},deleteAll:function(){this.forDeleteItems.forEach((function(e){h.a.post("https://pr0ductlist.000webhostapp.com/BackEnd/api/delete_products.php",{id:e})}))}}};n("eb87");v.render=j;var m=v,y=(n("b0c0"),{class:"content"}),g={class:"header"},k=Object(c["f"])("h2",null,"Product Add",-1),D={class:"buttons"},w=Object(c["f"])("div",{class:"separator"},null,-1),P={class:"form"},S={class:"field"},A=Object(c["f"])("label",null," SKU ",-1),V={class:"field"},T=Object(c["f"])("label",null," Name ",-1),L={class:"field"},U=Object(c["f"])("label",null," Price ($) ",-1),x={class:"field"},_=Object(c["f"])("label",null,"Type ",-1),C=Object(c["f"])("option",null," Type Switcher ",-1),B=Object(c["f"])("option",{value:"DVD"}," DVD ",-1),E=Object(c["f"])("option",{value:"Book"}," Book ",-1),F=Object(c["f"])("option",{value:"Furniture"}," Furniture ",-1),I=[C,B,E,F],M={key:0,class:"form"},$={class:"field"},q=Object(c["f"])("label",null," Size: ",-1),z={class:"field"},J=Object(c["f"])("label",null," Weigth: ",-1),K={class:"field"},N=Object(c["f"])("label",null," length: ",-1),W={class:"field"},X=Object(c["f"])("label",null," width: ",-1),G={class:"field"},H=Object(c["f"])("label",null," height: ",-1);function Q(e,t,n,l,u,i){return Object(c["g"])(),Object(c["e"])("div",y,[Object(c["f"])("div",g,[k,Object(c["f"])("div",D,[Object(c["f"])("button",{onClick:t[0]||(t[0]=function(){return i.save&&i.save.apply(i,arguments)})},"Save"),Object(c["f"])("button",{onClick:t[1]||(t[1]=function(){return i.cancelAdd&&i.cancelAdd.apply(i,arguments)})},"Cancel")])]),w,Object(c["f"])("div",P,[Object(c["f"])("div",S,[A,Object(c["n"])(Object(c["f"])("input",{required:"",type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.sku=t})},null,512),[[c["l"],e.sku]])]),Object(c["f"])("div",V,[T,Object(c["n"])(Object(c["f"])("input",{required:"",type:"text","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.name=t})},null,512),[[c["l"],e.name]])]),Object(c["f"])("div",L,[U,Object(c["n"])(Object(c["f"])("input",{required:"",type:"number","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.price=t})},null,512),[[c["l"],e.price]])]),Object(c["f"])("div",x,[_,Object(c["n"])(Object(c["f"])("select",{"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.type=t}),onChange:t[6]||(t[6]=function(e){return i.displayForm()})},I,544),[[c["k"],e.type]])]),u.selected?(Object(c["g"])(),Object(c["e"])("div",M,[Object(c["n"])(Object(c["f"])("div",null,[Object(c["f"])("div",$,[q,Object(c["n"])(Object(c["f"])("input",{type:"number","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.value=t})},null,512),[[c["l"],e.value]])])],512),[[c["m"],"DVD"==e.type]]),Object(c["n"])(Object(c["f"])("div",null,[Object(c["f"])("div",z,[J,Object(c["n"])(Object(c["f"])("input",{type:"number","onUpdate:modelValue":t[8]||(t[8]=function(t){return e.value=t})},null,512),[[c["l"],e.value]])])],512),[[c["m"],"Book"==e.type]]),Object(c["n"])(Object(c["f"])("div",null,[Object(c["f"])("div",K,[N,Object(c["n"])(Object(c["f"])("input",{type:"number","onUpdate:modelValue":t[9]||(t[9]=function(t){return e.length=t})},null,512),[[c["l"],e.length]])]),Object(c["f"])("div",W,[X,Object(c["n"])(Object(c["f"])("input",{type:"number","onUpdate:modelValue":t[10]||(t[10]=function(t){return e.width=t})},null,512),[[c["l"],e.width]])]),Object(c["f"])("div",G,[H,Object(c["n"])(Object(c["f"])("input",{type:"number","onUpdate:modelValue":t[11]||(t[11]=function(t){return e.heigth=t})},null,512),[[c["l"],e.heigth]])])],512),[[c["m"],"Furniture"==e.type]])])):Object(c["d"])("",!0)])])}n("99af");var R={data:function(){return{products:"",selected:!1}},mounted:function(){},methods:{save:function(){this.$emit("onSave"),this.addProduct()},cancelAdd:function(){this.$emit("onSave")},getValue:function(){return"Furniture"==this.type&&(this.value="".concat(this.heigth,"X").concat(this.width,"X").concat(this.length)),this.value},displayForm:function(){this.selected=!1,this.selected=!0},addProduct:function(){h.a.post("https://pr0ductlist.000webhostapp.com/BackEnd/api/create_products.php",{sku:this.sku,name:this.name,price:this.price,type:this.type,value:this.getValue()})}}};n("6e4c");R.render=Q;var Y=R,Z={data:function(){return{inList:!0}},name:"App",components:{ProductList:m,AddProduct:Y},methods:{goToAdd:function(){this.inList=!1},goToList:function(){this.inList=!0}}};n("62f3");Z.render=l;var ee=Z;Object(c["b"])(ee).mount("#app")},"62f3":function(e,t,n){"use strict";n("ee8f")},"6e4c":function(e,t,n){"use strict";n("351c")},eb87:function(e,t,n){"use strict";n("2365")},ee8f:function(e,t,n){}});
//# sourceMappingURL=app.769a672b.js.map