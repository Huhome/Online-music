import{o as t,c as e,w as a,n as s,a as l,b as i,d as o,r as d,F as r,e as n,f as u,i as c,g as h,h as f,I as y,j as p,S as m,k as w,t as g,l as k}from"./index.7ed895d6.js";import{_,m as x}from"./musichead.91a5aaa8.js";var v=_({data:()=>({musichList:[],isShow:!1}),onLoad(){this.getmusichList()},methods:{async getmusichList(){const t=await this.$axios({url:"/toplist/detail"});this.musichList=t.list.filter(((t,e)=>{if(!(e>=4))return t})),setTimeout((()=>{this.isShow=!0}),1e3)}},components:{musichead:x,skeleton:_({props:{loading:{type:Boolean,default:!0},imgTitle:{type:Boolean,default:!1},nameRow:{type:Number,default:1},flexType:{type:String,default:"flex-start"},showAvatar:{type:Boolean,default:!0},avatarSize:{type:String,default:"50rpx"},avatarShape:{type:String,default:"round"},showTitle:{type:Boolean,default:!1},titleWidth:{type:String,default:"40%"},row:{type:Number,default:3},animate:{type:Boolean,default:!0}},data:()=>({}),computed:{rowList(){let t=[];for(let e=0;e<this.row;e++)t.push({width:e===this.row-1&&0!==e?"60%":"100%"});return t}}},[["render",function(h,f,y,p,m,w){const g=c;return t(),e(g,{style:{width:"100%"}},{default:a((()=>[y.loading?(t(),e(g,{key:0,class:s(["skeleton",{animate:y.animate}]),style:l({justifyContent:y.flexType,width:"100%"})},{default:a((()=>[y.imgTitle?(t(),e(g,{key:0,class:"skeleton-imgTitle",style:{width:"95%","border-radius":"10rpx",height:"100rpx",display:"block"}})):i("",!0),y.showAvatar&&!y.imgTitle?(t(!0),o(r,{key:1},d(y.nameRow,((a,i)=>(t(),e(g,{class:s(["skeleton-avatar",[y.avatarShape]]),key:i,style:l({width:y.avatarSize,height:y.avatarSize})},null,8,["class","style"])))),128)):i("",!0),y.showTitle&&!y.imgTitle?(t(),e(g,{key:2,class:"skeleton-content"},{default:a((()=>[n(g,{class:"skeleton-title",style:l({width:y.titleWidth})},null,8,["style"]),(t(!0),o(r,null,d(w.rowList,((a,s)=>(t(),e(g,{class:"skeleton-row-item",key:s,style:l({width:a.width})},null,8,["style"])))),128))])),_:1})):i("",!0)])),_:1},8,["class","style"])):(t(),e(g,{key:1},{default:a((()=>[u(h.$slots,"default",{},void 0,!0)])),_:3}))])),_:3})}],["__scopeId","data-v-4e359567"]])}},[["render",function(s,l,i,u,_,x){const v=h("musichead"),S=f,T=y,L=p,b=k,B=c,j=h("skeleton"),z=m;return t(),e(B,{class:"index"},{default:a((()=>[n(v,{title:"网易云音乐",flag:!1}),n(B,{class:"container"},{default:a((()=>[n(z,{"scroll-y":"true"},{default:a((()=>[n(L,{url:"/pages/search/search",class:"index-seach"},{default:a((()=>[n(S,{class:"iconfont iconsearch"}),n(T,{type:"text",placeholder:"搜索歌曲"})])),_:1}),n(B,{class:"index-list"},{default:a((()=>[(t(!0),o(r,null,d(_.musichList,(s=>(t(),e(j,{loading:!_.isShow,avatarSize:"212rpx",row:2,showTitle:"",titleWidth:"80%",avatarShape:"square",key:s.id},{default:a((()=>[n(L,{url:"/pages/list/list?id="+s.id,class:"index-item white"},{default:a((()=>[n(B,{class:"img-box"},{default:a((()=>[n(b,{src:s.coverImgUrl,mode:"widthFix"},null,8,["src"]),n(S,null,{default:a((()=>[w(g(s.updateFrequency),1)])),_:2},1024)])),_:2},1024),n(B,{class:"text-cont"},{default:a((()=>[(t(!0),o(r,null,d(s.tracks,((s,l)=>(t(),e(B,{key:l,class:"white"},{default:a((()=>[w(g(l+1)+"."+g(s.first)+" - "+g(s.second),1)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["url"])])),_:2},1032,["loading"])))),128))])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-b1f5f75c"]]);export{v as default};
