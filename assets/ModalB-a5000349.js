import{d as k,v as c,x as B,a as V,o as f,g as M,w as l,q as m,j as p,m as x,k as o,l as a,i as s,E as n,n as N,_}from"./index-9a6550d9.js";import{H as $}from"./HighlightText-f8a6fa34.js";const R={class:"my-4"},E={class:"grid gap-4 max-w-200px"},A=k({__name:"ModalB",props:c({message:{type:String,default:""}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:c(["return","message"],["update:modelValue"]),setup(d){const r=B(d,"modelValue"),{openModal:g,closeModal:v}=V(),u=async i=>{try{await g(i)}catch(e){console.error(e),N.error(e.message)}};return(i,e)=>{const C=m("RouterLink"),w=m("RouterView"),y=m("ElDrawer");return f(),M(y,{modelValue:r.value,"onUpdate:modelValue":e[6]||(e[6]=t=>r.value=t),title:"Nested Modal B",class:"max-w-400px !w-full"},{footer:l(()=>[]),default:l(()=>[p("div",null,[d.message?(f(),M($,{key:0,message:d.message},null,8,["message"])):x("",!0)]),o(C,{to:{name:"ModalNestedBChild"},class:"text-blue-5 hover:text-red-5"},{default:l(()=>[a(" Go to Child ")]),_:1}),p("div",R,[o(w)]),p("div",E,[o(s(n),{class:"!ml-0",type:"danger",onClick:e[0]||(e[0]=t=>u("ModalNestedA"))},{default:l(()=>[a(" Open Parent ModalA ")]),_:1}),o(s(n),{class:"!ml-0",type:"danger",onClick:e[1]||(e[1]=t=>u("ModalNestedB"))},{default:l(()=>[a(" Open Self (Not allowed) ")]),_:1}),o(s(n),{class:"!ml-0",type:"danger",onClick:e[2]||(e[2]=t=>u("ModalNestedBChild"))},{default:l(()=>[a(" Go to Child by OpenModal (Not allowed) ")]),_:1}),o(s(n),{class:"!ml-0",type:"primary",onClick:e[3]||(e[3]=t=>s(v)("ModalNestedA"))},{default:l(()=>[a(" Close Parent ModalA ")]),_:1}),o(s(n),{class:"!ml-0",type:"warning",icon:"close",onClick:e[4]||(e[4]=t=>r.value=!1)},{default:l(()=>[a(" Close ")]),_:1}),o(s(n),{class:"!ml-0",type:"success",icon:"check",onClick:e[5]||(e[5]=t=>i.$emit("return","ModalB return value"))},{default:l(()=>[a(" Close (with Return Value) ")]),_:1})])]),_:1},8,["modelValue"])}}}),D=_(A,[["__file","ModalB.vue"]]);export{D as default};
