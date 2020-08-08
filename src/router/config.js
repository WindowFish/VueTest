export default{
            mode:"history",
            routes:[
                {path:"/",name:"Index",component:()=>import("@/components/index")},
                {path: '/cart/:id/:hobby', name:'Cart',component: ()=>import("@/components/cart")},
                {path:"*",name:"Error",component:()=>import("@/components/error")}
            ]         
 };