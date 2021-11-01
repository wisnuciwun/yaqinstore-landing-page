<template>
  <div id="app" class="main-page">
      <div class="header">
    <h1 class="brand-name"><img class="logo" src="../assets/logo.png">Yaqien<span style="color: #70babf">Store</span></h1>
        <a href="https://wa.me/+6285156267260" target="_blank"><button style="color: white; font-size: 12pt" class="blue pointer fade-text whatsapp">Chat <img class="logo-store whitening" src="../assets/wa.png" /></button></a>
      </div>

    <div class="bg center">
        <body oncontextmenu="return false;">
            <VueImageSlider :images="images" :intervalVal="5000" />
        </body>
    </div>
    <br/>
    <div style="text-align: center; font-size: 10pt;  justify-content: center; display: flex">
        <p style="width: 70%; font-size: 16pt">
        Terima kasih sudah berkunjung di website official <b>YaqienStore</b>. Kami menyediakan berbagai macam tas yang kece dan trendy. Bahan baku produk sudah pasti yang terbaik. Brand lokal, harga rasional, kualitas internasional. Jangan sampe salah toko yah, selamat belanja !
        </p>
    </div>
    <p class="title" ><b>Ini nih item yang laris manis !</b></p>
    
    <div style="display: flex; overflow-X: auto; justify-content: space-between">
        <a v-for="item in items" v-bind:key="item" :href="item.link" class="pointer" target="_blank" >
            <span>
            <img v-on:click="goTo(item.link)" :src="item.img" class="mini-image" /><p>#{{item.name}}</p>
            </span>
        </a>
    </div>


    <p class="title" ><b>Mau lihat semua produk ? Tinggal pilih marketplace-nya disini</b></p>
    <a href="https://www.tokopedia.com/yaqienstore" target="_blank"><button class="pointer fade-text tokopedia"><img class="logo-store" src="../assets/tk.png" /> Tokopedia</button></a>
    <a href="https://shopee.co.id/yaqienst" target="_blank" ><button class="pointer fade-text shopee" ><img class="logo-store" src="../assets/sh.png" /> Shopee</button></a>
    <a href="https://web.facebook.com/YaqienStore" target="_blank"><button class="pointer fade-text facebook"><img class="logo-store" src="../assets/fb.png" /> Facebook Marketplace</button></a>
    <br/>
    <br/>
    <p style="display: flex; justify-content: center"> YS Team | yaqienstore@gmail.com | {{date()}}</p>
    <br/>
    <br/>
  </div>
</template>

<script>
import VueImageSlider from "vue-image-slider";

export default {
  name: "home",
  components: {
    VueImageSlider,
  },
  data() {
    return {
    yearNow: '',
    items: [
        {name: "Tas slempang Weixer", link: "https://tinyurl.com/yaqinnnstore-tasslempang", img: "https://i.ibb.co/ThcZF4W/ads-1-weixier.jpg"},
        {name: "Goodie Bag", link: "https://tinyurl.com/yaqinnnstore-tasslempang", img: "https://i.ibb.co/ThcZF4W/ads-1-weixier.jpg"},
        {name: "Tas slempang Weixer", link: "https://tinyurl.com/yaqinnnstore-tasslempang", img: "https://i.ibb.co/ThcZF4W/ads-1-weixier.jpg"},
        {name: "Goodie Bag", link: "https://tinyurl.com/yaqinnnstore-tasslempang", img: "https://i.ibb.co/ThcZF4W/ads-1-weixier.jpg"},
        {name: "Tas slempang Weixer", link: "https://tinyurl.com/yaqinnnstore-tasslempang", img: "https://i.ibb.co/ThcZF4W/ads-1-weixier.jpg"},
    ],
    images: [
      "https://i.ibb.co/ThcZF4W/ads-1-weixier.jpg",
      "https://i.ibb.co/WswKKJt/ads-4-weixier.jpg",
    ],
    };
  },
  methods: {
      goTo(val){
          window.location.href(val)
      },
      date(){
        const today = new Date()
        const year = today.getFullYear()
        this.yearNow = year
        return this.yearNow
      }
  }
};
</script>

