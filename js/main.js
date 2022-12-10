"USE STRICT";

const $toTop = document.getElementById("to-top");

// ★スムーススクロール★
$toTop.addEventListener("click", (e) => { 
  e.preventDefault();
//   リンク先のハッシュを取得する//   リンク先のエレメントを取得
  const targetId = $toTop.hash;
  const targetElement = document.querySelector(targetId);
//   リンク先のページ上部からの距離、現在のページの上部からの距離
  const targetY = targetElement.getBoundingClientRect().top;
  const nowOffsetTop = window.pageYOffset;
//   上から上記の距離までスクロールする
  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });
});

// ★トップへ戻るボタンの表示非表示設定★
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>700){
        $toTop.classList.add('is-active');
    }else{
        $toTop.classList.remove('is-active');
    }
});

// ★ハンバーガーメニュー★
const $hamburger = document.querySelector('.hamburger');
const $header = document.querySelector('#header');


$hamburger.addEventListener('click',()=>{
  $header.classList.toggle('open');
});