import { defineStore } from 'pinia'

export const useProductStore=defineStore("ProductStore", {
    state: () =>{
        return{
         
            products:[]
        };
    },
    actions:{
        async fill(){
            this.produ            
            cts=(await import("@/data/products.json")).default
            }
     
    }
   
});