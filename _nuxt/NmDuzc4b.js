import{aX as F,d as ie,b2 as G,aM as ae,b3 as ne,b4 as se,be as te,bf as re,z as M,r as le,o as oe,i as t,E as g,w as ue,e as ge,aE as _,D as a,Q as b,c as N,n as o,G as $,bg as ce,f as c,ay as de,aY as pe,b6 as ve}from"./C63FsGW4.js";const be={slots:{root:"relative inline-flex items-center",base:["w-full rounded-[calc(var(--ui-radius)*1.5)] border-0 placeholder:text-[var(--ui-text-dimmed)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-75","transition-colors"],leading:"absolute inset-y-0 start-0 flex items-center",leadingIcon:"shrink-0 text-[var(--ui-text-dimmed)]",leadingAvatar:"shrink-0",leadingAvatarSize:"",trailing:"absolute inset-y-0 end-0 flex items-center",trailingIcon:"shrink-0 text-[var(--ui-text-dimmed)]"},variants:{buttonGroup:{horizontal:{root:"group",base:"group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"},vertical:{root:"group",base:"group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"}},size:{xs:{base:"px-2 py-1 text-xs gap-1",leading:"ps-2",trailing:"pe-2",leadingIcon:"size-4",leadingAvatarSize:"3xs",trailingIcon:"size-4"},sm:{base:"px-2.5 py-1.5 text-xs gap-1.5",leading:"ps-2.5",trailing:"pe-2.5",leadingIcon:"size-4",leadingAvatarSize:"3xs",trailingIcon:"size-4"},md:{base:"px-2.5 py-1.5 text-sm gap-1.5",leading:"ps-2.5",trailing:"pe-2.5",leadingIcon:"size-5",leadingAvatarSize:"2xs",trailingIcon:"size-5"},lg:{base:"px-3 py-2 text-sm gap-2",leading:"ps-3",trailing:"pe-3",leadingIcon:"size-5",leadingAvatarSize:"2xs",trailingIcon:"size-5"},xl:{base:"px-3 py-2 text-base gap-2",leading:"ps-3",trailing:"pe-3",leadingIcon:"size-6",leadingAvatarSize:"xs",trailingIcon:"size-6"}},variant:{outline:"text-[var(--ui-text-highlighted)] bg-[var(--ui-bg)] ring ring-inset ring-[var(--ui-border-accented)]",soft:"text-[var(--ui-text-highlighted)] bg-[var(--ui-bg-elevated)]/50 hover:bg-[var(--ui-bg-elevated)] focus:bg-[var(--ui-bg-elevated)] disabled:bg-[var(--ui-bg-elevated)]/50",subtle:"text-[var(--ui-text-highlighted)] bg-[var(--ui-bg-elevated)] ring ring-inset ring-[var(--ui-border-accented)]",ghost:"text-[var(--ui-text-highlighted)] bg-transparent hover:bg-[var(--ui-bg-elevated)] focus:bg-[var(--ui-bg-elevated)] disabled:bg-transparent dark:disabled:bg-transparent",none:"text-[var(--ui-text-highlighted)] bg-transparent"},color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},leading:{true:""},trailing:{true:""},loading:{true:""},highlight:{true:""},type:{file:"file:me-1.5 file:font-medium file:text-[var(--ui-text-muted)] file:outline-none"}},compoundVariants:[{color:"primary",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-primary)]"},{color:"secondary",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-secondary)]"},{color:"success",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-success)]"},{color:"info",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-info)]"},{color:"warning",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-warning)]"},{color:"error",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-error)]"},{color:"primary",highlight:!0,class:"ring ring-inset ring-[var(--ui-primary)]"},{color:"secondary",highlight:!0,class:"ring ring-inset ring-[var(--ui-secondary)]"},{color:"success",highlight:!0,class:"ring ring-inset ring-[var(--ui-success)]"},{color:"info",highlight:!0,class:"ring ring-inset ring-[var(--ui-info)]"},{color:"warning",highlight:!0,class:"ring ring-inset ring-[var(--ui-warning)]"},{color:"error",highlight:!0,class:"ring ring-inset ring-[var(--ui-error)]"},{color:"neutral",variant:["outline","subtle"],class:"focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-border-inverted)]"},{color:"neutral",highlight:!0,class:"ring ring-inset ring-[var(--ui-border-inverted)]"},{leading:!0,size:"xs",class:"ps-7"},{leading:!0,size:"sm",class:"ps-8"},{leading:!0,size:"md",class:"ps-9"},{leading:!0,size:"lg",class:"ps-10"},{leading:!0,size:"xl",class:"ps-11"},{trailing:!0,size:"xs",class:"pe-7"},{trailing:!0,size:"sm",class:"pe-8"},{trailing:!0,size:"md",class:"pe-9"},{trailing:!0,size:"lg",class:"pe-10"},{trailing:!0,size:"xl",class:"pe-11"},{loading:!0,leading:!0,class:{leadingIcon:"animate-spin"}},{loading:!0,leading:!1,trailing:!0,class:{trailingIcon:"animate-spin"}}],defaultVariants:{size:"md",color:"primary",variant:"outline"}},me=["id","type","value","name","placeholder","disabled","required","autocomplete"],fe=pe;var q;const he=F({extend:F(be),...((q=fe.ui)==null?void 0:q.input)||{}}),ye=ie({inheritAttrs:!1,__name:"Input",props:G({as:{},id:{},name:{},type:{default:"text"},placeholder:{},color:{},variant:{},size:{},required:{type:Boolean},autocomplete:{default:"off"},autofocus:{type:Boolean},autofocusDelay:{default:0},disabled:{type:Boolean},highlight:{type:Boolean},class:{},ui:{},icon:{},avatar:{},leading:{type:Boolean},leadingIcon:{},trailing:{type:Boolean},trailingIcon:{},loading:{type:Boolean},loadingIcon:{}},{modelValue:{},modelModifiers:{}}),emits:G(["update:modelValue","blur","change"],["update:modelValue"]),setup(m,{expose:D,emit:E}){const i=m,f=E,u=ae(),[h,r]=ne(m,"modelValue"),{emitFormBlur:T,emitFormInput:P,emitFormChange:R,size:U,color:j,id:L,name:O,highlight:Q,disabled:X,emitFormFocus:y,ariaAttrs:Y}=se(i,{deferInputValidation:!0}),{orientation:H,size:J}=te(i),{isLeading:d,isTrailing:z,leadingIconName:x,trailingIconName:I}=re(i),p=M(()=>J.value||U.value),n=M(()=>he({type:i.type,color:j.value,variant:i.variant,size:p==null?void 0:p.value,loading:i.loading,highlight:Q.value,leading:d.value||!!i.avatar||!!u.leading,trailing:z.value||!!u.trailing,buttonGroup:H.value})),v=le(null);function K(){var e;i.autofocus&&((e=v.value)==null||e.focus())}function A(e){r.trim&&(e=e.trim()),(r.number||i.type==="number")&&(e=ve(e)),h.value=e,P()}function W(e){r.lazy||A(e.target.value)}function Z(e){const l=e.target.value;r.lazy&&A(l),r.trim&&(e.target.value=l.trim()),R(),f("change",e)}function ee(e){T(),f("blur",e)}return D({inputRef:v}),oe(()=>{setTimeout(()=>{K()},i.autofocusDelay)}),(e,l)=>{var B;return t(),g(a(de),{as:e.as,class:o(n.value.root({class:[i.class,(B=i.ui)==null?void 0:B.root]}))},{default:ue(()=>{var k,S,V;return[ge("input",_({id:a(L),ref_key:"inputRef",ref:v,type:e.type,value:a(h),name:a(O),placeholder:e.placeholder,class:n.value.base({class:(k=i.ui)==null?void 0:k.base}),disabled:a(X),required:e.required,autocomplete:e.autocomplete},{...e.$attrs,...a(Y)},{onInput:W,onBlur:ee,onChange:Z,onFocus:l[0]||(l[0]=(...s)=>a(y)&&a(y)(...s))}),null,16,me),b(e.$slots,"default"),a(d)||e.avatar||u.leading?(t(),N("span",{key:0,class:o(n.value.leading({class:(S=i.ui)==null?void 0:S.leading}))},[b(e.$slots,"leading",{},()=>{var s,w,C;return[a(d)&&a(x)?(t(),g($,{key:0,name:a(x),class:o(n.value.leadingIcon({class:(s=i.ui)==null?void 0:s.leadingIcon}))},null,8,["name","class"])):e.avatar?(t(),g(ce,_({key:1,size:((w=i.ui)==null?void 0:w.leadingAvatarSize)||n.value.leadingAvatarSize()},e.avatar,{class:n.value.leadingAvatar({class:(C=i.ui)==null?void 0:C.leadingAvatar})}),null,16,["size","class"])):c("",!0)]})],2)):c("",!0),a(z)||u.trailing?(t(),N("span",{key:1,class:o(n.value.trailing({class:(V=i.ui)==null?void 0:V.trailing}))},[b(e.$slots,"trailing",{},()=>{var s;return[a(I)?(t(),g($,{key:0,name:a(I),class:o(n.value.trailingIcon({class:(s=i.ui)==null?void 0:s.trailingIcon}))},null,8,["name","class"])):c("",!0)]})],2)):c("",!0)]}),_:3},8,["as","class"])}}}),xe=Object.assign(ye,{__name:"UInput"});export{xe as _};
