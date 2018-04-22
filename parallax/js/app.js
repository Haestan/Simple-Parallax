// (function(){
//     let scrollY = function(){
//         let supportPageOffset = window.pageXOffset !== undefined;
//         let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
//         return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
//     };
// /*
//     LORSQUE l'on scroll
//     SI le menu sort de l'écran
//     ALORS il deviendra fixe
// */
//     let menu = document.querySelector('.menu');
//     let top = menu.getBoundingClientRect().top + scrollY();
//
//     const onScroll = function(){
//         let hasClassList = menu.classList.contains('fixed');
//         if(scrollY() > top && !hasClassList){
//             menu.classList.add('fixed')
//         }else if(scrollY() < top && hasClassList){
//             menu.classList.remove('fixed')
//         }
//     };
//     window.addEventListener('scroll', onScroll)
//
//     /* LORSQUE l'on scroll
//     SI le content sort de l'écran
//     ALORS il devient fixe
//      */
//
//     // let content = document.querySelector('.content')
//     // let contentTop = content.getBoundingClientRect().top + scrollY();
//     //
//     // const contentScroll = function(){
//     //     let contentClassList = content.classList.contains('fixed');
//     //     if(scrollY() > contentTop && !contentClassList){
//     //         content.classList.add('fixed')
//     //     }else if (scroll() < contentTop && contentClassList){
//     //         content.classList.remove('fixed')
//     //     }
//     // }
//     // window.addEventListener('scroll', contentScroll)
// })();