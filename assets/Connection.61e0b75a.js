import{d as a,o as s,c as l,a as n,u as t,s as o,b as u,t as d,e as b,F as i}from"./index.d7fa6ee1.js";const c=n("h2",{class:"bg-noir text-center font-darker-grotesque text-xl text-brun2"},"Connectez vous",-1),g={class:"bg-noir2 flex flex-col items-center justify-center gap-4"},p=n("br",null,null,-1),v=a({__name:"Connection",setup(x){return(m,e)=>(s(),l(i,null,[c,n("div",g,[n("button",{class:"border-2 mt-6 border-brun2 text-brun2 p-2 rounded-full lg:text-lg",onPointerdown:e[0]||(e[0]=r=>t(o).auth.signIn({provider:"google"}))}," Se connecter avec Google ",32),p,n("button",{class:"border-2 mb-6 border-brun2 text-brun2 p-2 rounded-full lg:text-lg",onPointerdown:e[1]||(e[1]=r=>t(o).auth.signIn({provider:"facebook"}))}," Se connecter avec Facebook ",32),t(u)?(s(),l("button",{key:0,class:"border-2 mb-6 bg-brun2 text-noir2 p-2 rounded-full lg:text-lg",onPointerdown:e[2]||(e[2]=r=>t(o).auth.signOut())}," Se d\xE9connecter ("+d(t(u).email)+") ",33)):b("",!0)])],64))}});export{v as default};
