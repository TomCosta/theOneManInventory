var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) {
    admobid = { // for Android
        banner: 'ca-app-pub-8142829781299976/6101515649',
        interstitial: 'ca-app-pub-8142829781299976/7578248843'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: '',
        interstitial: ''
    };
} else {
    admobid = { // for Windows Phone
        banner: '',
        interstitial: ''
    };
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

function initApp() {
    if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

    AdMob.createBanner( {
        adId: admobid.banner,
        isTesting: false,
        overlap: false,
        offsetTopBar: false,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        autoShow: true,
        bgColor: 'black'
    } );

    AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        isTesting: false,
        autoShow: false
    });
}
