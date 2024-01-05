'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".well-known/apple-app-site-association": "64662545defd303ae86c30c8e2d2ec6e",
".well-known/assetlinks.json": "166054f4fa5b511821d622d2ecc94766",
"ads.txt": "abdd028474fdd4d3666e0ca3ac82ca49",
"app-ads.txt": "abdd028474fdd4d3666e0ca3ac82ca49",
"assets/AssetManifest.bin": "5f71f2c96db409f4f7cee348441c6de0",
"assets/AssetManifest.json": "d4647fa11f6a93cb23cd1fc9558be3e6",
"assets/assets/ca/lets-encrypt-r3.pem": "be77e5992c00fcd753d1b9c11d3768f2",
"assets/assets/fonts/comfortaa/Comfortaa-Bold.ttf": "281df342e6f73c20ebc6526f130e00b3",
"assets/assets/fonts/comfortaa/Comfortaa-Light.ttf": "d30cea8a3c38eee6a405049e1d8c7c2f",
"assets/assets/fonts/comfortaa/Comfortaa-Medium.ttf": "1a7bfac2b8d70a2726a281786c3894cd",
"assets/assets/fonts/comfortaa/Comfortaa-Regular.ttf": "53f695dbfc6f703f86ed88bddde527b6",
"assets/assets/fonts/comfortaa/Comfortaa-SemiBold.ttf": "50c5468a51006a4b81d223cc28aa1790",
"assets/assets/fonts/quicksand/Quicksand-Bold.ttf": "e8dcee4bbf2288a2d264c76fa547f37a",
"assets/assets/fonts/quicksand/Quicksand-Light.ttf": "e60d43df6abf50de0980883f4596e268",
"assets/assets/fonts/quicksand/Quicksand-Medium.ttf": "fd7f304a26dd790aef9f1ae84403eab3",
"assets/assets/fonts/quicksand/Quicksand-Regular.ttf": "7194c41ffab51721bd84ca104553c4e1",
"assets/assets/fonts/quicksand/Quicksand-SemiBold.ttf": "025d26a905aa7e016827cdc2b429552f",
"assets/assets/fonts/roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/roboto/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/roboto/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/sono/Sono-SemiBold.ttf": "927ad903dadf509e800bb39a6e3b15d0",
"assets/assets/images/angry_emoji.png": "24c34ee2d8f3adee65d0d82a5de7fb35",
"assets/assets/images/apple_icon.png": "dcf7fb39ef12fdefa345e10c46638223",
"assets/assets/images/browser-settings-guide.jpg": "df4020a63d022b9155ed8286e2510026",
"assets/assets/images/building.PNG": "a99e6a7278e9cd9ebedd81c760e529b6",
"assets/assets/images/chat_background.jpg": "9a99cac8466e9ad824cca7a67ae0df8f",
"assets/assets/images/chat_background2.jpg": "ecbb3e7c85f5e852215ab227779080ab",
"assets/assets/images/dark_background.jpg": "317699b47219e216f5968fb3e5668b16",
"assets/assets/images/datnen.png": "0b1581c6522e518527f7c704e9cd8923",
"assets/assets/images/default_photo.jpg": "955268ab39a5f2a290f904c7518a81f9",
"assets/assets/images/default_photo_1.jpg": "b1f79e38b3a166b6f54bec8376fc4131",
"assets/assets/images/footer-art.png": "61f321b95a765218f93de9916f4daf90",
"assets/assets/images/gmap_icon_dia_hinh.png": "db5c44bb71c3e3e0a861a36f4b892d88",
"assets/assets/images/gmap_icon_mac_dinh.png": "836265daa20705dc25d889fc397e898c",
"assets/assets/images/gmap_icon_ve_tinh.png": "a8f66773cc0cbe87dd2fdb9b54a66d73",
"assets/assets/images/google_play_icon.png": "cb6fafbbe25d5c0297183f8b7346d54b",
"assets/assets/images/icon_phone/duan_phone/datnen.png": "bcc8d6cc4b25d8d739f542687e0dfdbf",
"assets/assets/images/icon_phone/duan_phone/datnen_80.png": "512a51f2456663e7ef074b049f88cab2",
"assets/assets/images/icon_phone/duan_phone/khucongnghiep.png": "9df27ae36020db662143109c89cfb447",
"assets/assets/images/icon_phone/duan_phone/khucongnghiep_80.png": "4735df1df2b081029747b49dd5353dfe",
"assets/assets/images/icon_phone/duan_phone/khucongnghiep_HL.png": "1e0f6955529a44d1080600293f695aa6",
"assets/assets/images/icon_phone/duan_phone/khucongnghiep_HL_80.png": "04ad40a18d722b0e7dd76fbe2ecd758a",
"assets/assets/images/icon_phone/duan_phone/khudancu.png": "6ebb95a5266c2cbc9cf95bc074eba8b8",
"assets/assets/images/icon_phone/duan_phone/KHUDANCUVABIETHU_HL.png": "27cbcb7dcbedea94f11ee735e1ed166a",
"assets/assets/images/icon_phone/duan_phone/KHUDANCUVABIETHU_HL_80.png": "5dcc7d89d1474e96592996a53b44a822",
"assets/assets/images/icon_phone/duan_phone/khudancu_80.png": "8d35d769f7de0990fe86f3bf92246ed6",
"assets/assets/images/icon_phone/duan_phone/KHUDULICH_HL.png": "58871ec26594f9858563dc15fd995b69",
"assets/assets/images/icon_phone/duan_phone/KHUDULICH_HL_80.png": "a00b977ccdb447faa127a44026957244",
"assets/assets/images/icon_phone/duan_phone/khunghiduong.png": "a456a28b515a391753cd6d98bde0a041",
"assets/assets/images/icon_phone/duan_phone/khunghiduong_80.png": "80ae309ddf08b51336c827393b97bbab",
"assets/assets/images/icon_phone/duan_phone/nendat_HL.png": "4bd9c703cfa931de2135c57873a1cb92",
"assets/assets/images/icon_phone/duan_phone/nendat_HL_80.png": "05f981416ca77bbb582e4dd04e11dc90",
"assets/assets/images/icon_phone/duan_phone/toanha.png": "5c56b5d5f8df87c48749232da8883a15",
"assets/assets/images/icon_phone/duan_phone/toanha_80.png": "34c58f96b445337199d104899c27d35c",
"assets/assets/images/icon_phone/duan_phone/TOANHA_HL.png": "9cef6a0cdba5884a80438b8e61ad1137",
"assets/assets/images/icon_phone/duan_phone/TOANHA_HL_80.png": "6cfa5353877762c9f3ab1cec141c1e73",
"assets/assets/images/icon_phone/duan_phone/vanphong.png": "1feeacdb1ab9b16e34e0925e37d81ad3",
"assets/assets/images/icon_phone/duan_phone/vanphong_80.png": "4b62414a1441f30f6f16b3eadf3b6f33",
"assets/assets/images/icon_phone/duan_phone/vanphong_HL.png": "b186fb1d2cf53d28f8ebb329c85e0a39",
"assets/assets/images/icon_phone/duan_phone/vanphong_HL_80.png": "bf1b77a10988edd6b9474ae49bc926ae",
"assets/assets/images/icon_phone/tramxang_phone/car.png": "aca009593204cd1026d69c78af0d5e1a",
"assets/assets/images/icon_phone/tramxang_phone/car120.png": "51b13d82182e05b29148e2af53374323",
"assets/assets/images/icon_phone/tramxang_phone/car60.png": "bdb002b295a778e8d2ccda02a1e3e041",
"assets/assets/images/icon_phone/tramxang_phone/car60_HL.png": "04947ddbd37ea066464d0452315eabe4",
"assets/assets/images/icon_phone/tramxang_phone/car_HL.png": "ec5101eb6589ce6471c7b2f7517e36d8",
"assets/assets/images/icon_phone/tramxang_phone/car_HL120.png": "dedd4bc82d45746ae32959bce38bdfb8",
"assets/assets/images/icon_phone/tramxang_phone/dien_HL.png": "8e61079e239f6616058f40f4fe430d90",
"assets/assets/images/icon_phone/tramxang_phone/tramdien.png": "c77a6e25870f19cdfeb3073487da6cef",
"assets/assets/images/icon_phone/tramxang_phone/tramxang.png": "b58cdb31306267999429c9feade092c3",
"assets/assets/images/icon_phone/tramxang_phone/tramxang120.png": "1d9103515c6e04cefcca00d1d6fd0c41",
"assets/assets/images/icon_phone/tramxang_phone/tramxang60.png": "4a535233644c487df3e3fa1db517c151",
"assets/assets/images/icon_phone/tramxang_phone/tramxang60_HL.png": "e9bcf31b4f65c4947fa430d32ccdc9d2",
"assets/assets/images/icon_phone/tramxang_phone/tramxang_HL.png": "36fed040fe9efef169713a66fc71c3dd",
"assets/assets/images/icon_phone/tramxang_phone/tramxang_HL120.png": "9d1d6818d15b117ca215a6ad65b147fd",
"assets/assets/images/icon_phone/tramxang_phone/xemay.png": "a804d8fe6d1340f2c13bb6d7632111c3",
"assets/assets/images/icon_phone/tramxang_phone/xemay120.png": "8d876a9b89ffc6f856d8b8d8207cb74a",
"assets/assets/images/icon_phone/tramxang_phone/xemay60.png": "3124ad8c5f9f483d250d4b85bd23211a",
"assets/assets/images/icon_phone/tramxang_phone/xemay60_HL.png": "c4608bae6dcc20ee2c8946a1a33e7262",
"assets/assets/images/icon_phone/tramxang_phone/xemay_HL.png": "82512fd2bc8ff2f232642782413b3ca7",
"assets/assets/images/icon_phone/tramxang_phone/xemay_HL120.png": "8f90869b1fb838a99456b79b663d5a9d",
"assets/assets/images/icon_phone/truong_phone/c1.png": "17ae60501c14348a20794a7d9e931ff5",
"assets/assets/images/icon_phone/truong_phone/c1_80.png": "d53b843d18d824f15ea7bb39f0fc9bcd",
"assets/assets/images/icon_phone/truong_phone/c1_HL_50.png": "b39dc1eacba747827067379d46b6ae72",
"assets/assets/images/icon_phone/truong_phone/c1_HL_80.png": "90b76a2ec0fcadf367812a89a26db5c1",
"assets/assets/images/icon_phone/truong_phone/c2.png": "573e32713ff98d76e72faabca95ed270",
"assets/assets/images/icon_phone/truong_phone/c2_80.png": "3da8084ccbc4ad14ad3ff57a2f809d5d",
"assets/assets/images/icon_phone/truong_phone/c2_HL_50.png": "70251fdf380ddf2f1066ade62483276a",
"assets/assets/images/icon_phone/truong_phone/c2_HL_80.png": "dd3c7e27bab452ec89dda8f808a2e2e4",
"assets/assets/images/icon_phone/truong_phone/c3.png": "348cfeede881cc3faf0398c8f3f3775d",
"assets/assets/images/icon_phone/truong_phone/c3_80.png": "2cbf9f5c67471df85c17983cd706bf41",
"assets/assets/images/icon_phone/truong_phone/c3_HL_50.png": "4a9fdd75251362f37d978aefb90e853d",
"assets/assets/images/icon_phone/truong_phone/c3_HL_80.png": "e99063955437e24c12a52908068547b4",
"assets/assets/images/icon_phone/truong_phone/Chuyenbiet_50.png": "1bcf623c0c659bc475d31e1c7facad0e",
"assets/assets/images/icon_phone/truong_phone/Chuyenbiet_80.png": "d33701e1bce7c3310c1bec633a651609",
"assets/assets/images/icon_phone/truong_phone/Chuyenbiet_HL_50.png": "aa7e9d8e20abb1a06e2154f12e05b1af",
"assets/assets/images/icon_phone/truong_phone/Chuyenbiet_HL_80.png": "19299a7d8addca81a33b1049b7123ffa",
"assets/assets/images/icon_phone/truong_phone/DHCD_50.png": "ad3a17d3e7f152aba8143fab119f21c5",
"assets/assets/images/icon_phone/truong_phone/DHCD_80.png": "3e7e97036d7c56442747ce0f1a468f3d",
"assets/assets/images/icon_phone/truong_phone/DHCD_HL_50.png": "33d31603574b1166b866107e46a5c391",
"assets/assets/images/icon_phone/truong_phone/DHCD_HL_80.png": "b894de29a7e900e257dfe2bbbd0ebcc3",
"assets/assets/images/icon_phone/truong_phone/International_50.png": "46871bfb11b841248d973045b84dd14f",
"assets/assets/images/icon_phone/truong_phone/International_80.png": "3c405968bdc1fc3d0540772686c6baeb",
"assets/assets/images/icon_phone/truong_phone/International_HL_50.png": "8e01d450a2f7ca27ce34e124fb6fbe29",
"assets/assets/images/icon_phone/truong_phone/International_HL_80.png": "cf1c860b04563f0de90d3ed503011253",
"assets/assets/images/icon_phone/truong_phone/khac.png": "deed1c8fb7cc053c594c0b91fc48ca5f",
"assets/assets/images/icon_phone/truong_phone/khac_80.png": "dd65308d4c863736e5893cb3e81e32ae",
"assets/assets/images/icon_phone/truong_phone/khac_HL_50.png": "264a134632e374759824414d8d91d608",
"assets/assets/images/icon_phone/truong_phone/khac_HL_80.png": "1b5390c477891fb65f53ec45570152e1",
"assets/assets/images/icon_phone/truong_phone/MG.png": "b95dba33ef5085717c280ae4f8c5d5f7",
"assets/assets/images/icon_phone/truong_phone/MG_80.png": "a764fabf04821299edcd9e336492a0e8",
"assets/assets/images/icon_phone/truong_phone/MG_HL_50.png": "ef7acf7c1b65af061f59d860dbe7b5ad",
"assets/assets/images/icon_phone/truong_phone/MG_HL_80.png": "1591037feb783ee8180269c5a56b5147",
"assets/assets/images/icon_web/duan_web/datnen.png": "4a43bd566a9f4ed2bcd240308f08b74b",
"assets/assets/images/icon_web/duan_web/khucongnghiep.png": "3c0064cad202a978bde7fa1733d90f68",
"assets/assets/images/icon_web/duan_web/khucongnghiep_HL.png": "3ba8f1492f8ff528ca0d4a96750a5393",
"assets/assets/images/icon_web/duan_web/khudancu.png": "2a992d2a6b4ff4e68bb41f583f92c4d6",
"assets/assets/images/icon_web/duan_web/KHUDANCUVABIETHU.xcf": "3bf2594c86a30d6223df79fd437389dd",
"assets/assets/images/icon_web/duan_web/KHUDANCUVABIETHU_HL.png": "a757c4db8056589e15812c3a83c5254b",
"assets/assets/images/icon_web/duan_web/KHUDULICH.xcf": "3af9e5bb9b9907dd8e22719fb0f4bc7f",
"assets/assets/images/icon_web/duan_web/KHUDULICH_HL.png": "6ea2c9f55e79747cde072dab6e71db37",
"assets/assets/images/icon_web/duan_web/khunghiduong.png": "081ef6b4bb0654be938a2a4e4bbaaa0a",
"assets/assets/images/icon_web/duan_web/nendat.xcf": "eb966a5fd492a06ad81e24fb8df62f50",
"assets/assets/images/icon_web/duan_web/nendat_HL.png": "3f37bbf9f2e06b8df6327436faf1682a",
"assets/assets/images/icon_web/duan_web/NHAMAY.xcf": "89cc581e0b6025654a9cae099cecea59",
"assets/assets/images/icon_web/duan_web/toanha.png": "e858439876472ed8a0efd3b9dafef379",
"assets/assets/images/icon_web/duan_web/TOANHA.xcf": "e617807b0ee6dada623613eaac9580ca",
"assets/assets/images/icon_web/duan_web/TOANHA_HL.png": "0e855d6a80ac5ab0d062caabfed35388",
"assets/assets/images/icon_web/duan_web/vanphong.png": "d3141c396d7226d014671a035da73f52",
"assets/assets/images/icon_web/duan_web/vanphong_HL.png": "3b69ca9fd081cea1c87c064ea2298dec",
"assets/assets/images/icon_web/tramxang_web/car30.png": "d6a8b85a9106a981614b43294824664e",
"assets/assets/images/icon_web/tramxang_web/car_HL30.png": "4fe3f9ab63591b5cc59ef5853aed9c21",
"assets/assets/images/icon_web/tramxang_web/electric-car_HL.png": "d506c840d81381d8de05e181ad79aa3e",
"assets/assets/images/icon_web/tramxang_web/tramdien.png": "63ee457a88128e421721c537c5437e5c",
"assets/assets/images/icon_web/tramxang_web/tramxang.png": "7b15cf949ee0c30024ab88359043c667",
"assets/assets/images/icon_web/tramxang_web/tramxang_HL.png": "b07646a9fb1213df22144647424c4a81",
"assets/assets/images/icon_web/tramxang_web/xemay30.png": "8e2f5756f610528cc973447de3689d62",
"assets/assets/images/icon_web/tramxang_web/xemay_HL30.png": "b5bc194dbe278f57b80266b85206633f",
"assets/assets/images/icon_web/truong_web/c1.png": "d0a0897565826e79fc41e6e2c3e281fb",
"assets/assets/images/icon_web/truong_web/c1_HL.png": "38d5f3faf37128b7b17fa4864a1634e9",
"assets/assets/images/icon_web/truong_web/c2.png": "843421d448319cc654eeb1d3935d13d4",
"assets/assets/images/icon_web/truong_web/c2_HL.png": "e2f46415f97c681ae5d8b00f19d2c737",
"assets/assets/images/icon_web/truong_web/c3.png": "e6a29797b41c529b9df6e0bfe5a4c1aa",
"assets/assets/images/icon_web/truong_web/c3_HL.png": "e6ad161df17143f030a27b3e0e66d396",
"assets/assets/images/icon_web/truong_web/Chuyenbiet.png": "11061e42b33ef99f65fadcf3ac9931b2",
"assets/assets/images/icon_web/truong_web/Chuyenbiet_HL.png": "19fb3ae275af4a4f24fb167368f4f9ff",
"assets/assets/images/icon_web/truong_web/DHCD.png": "9c11aece2dafe3744d990c4c1f8c51cc",
"assets/assets/images/icon_web/truong_web/DHCD_HL.png": "9a0f11ba922e476a95a185a2440bc4ff",
"assets/assets/images/icon_web/truong_web/International.png": "c1d21d8dcd5ae1a27fd9a0d8753ac3be",
"assets/assets/images/icon_web/truong_web/International_HL.png": "3ea48cc4f2fe0a8b61ba16a63eae1057",
"assets/assets/images/icon_web/truong_web/khac.png": "36c2d5c089c8fcd7b0706b8eaf9893a8",
"assets/assets/images/icon_web/truong_web/khac_HL.png": "aa131c80d3774f07d576396806d43ed9",
"assets/assets/images/icon_web/truong_web/MG.png": "36f2b4ff7173a1c5c48b1e45d7bc6e71",
"assets/assets/images/icon_web/truong_web/MG_HL.png": "b35b2e65d63e68f13a7d336a25a71748",
"assets/assets/images/icon_web/truong_web/school.xcf": "92e381a1ed4ae0323d5febb9e8777c33",
"assets/assets/images/khucongnghiep.png": "ad2c2ad265d6f484d0da38d6078ceaff",
"assets/assets/images/khudancu.png": "f94a6c19bbb1f220111f1376b8d794a0",
"assets/assets/images/khunghiduong.png": "93d7251026b2b1e305853b3490940662",
"assets/assets/images/level-0.jpg": "9aedd78cb46eb1f065747b0ccaea687e",
"assets/assets/images/level-1.jpg": "fcba71e13df683add34aae609b9ca646",
"assets/assets/images/level-2.jpg": "aa448fbfb6c52cd4a874b41a9011e754",
"assets/assets/images/level-3.jpg": "5abcd26f800f1d3bac78728fe1fbe2dc",
"assets/assets/images/level-4.jpg": "07374666f2c617d3886580866368eb0f",
"assets/assets/images/level-5.jpg": "d64488de87fd37c17b0964222b005d0a",
"assets/assets/images/logo.png": "e1a79eecfc193917510f3cb96e17a8d1",
"assets/assets/images/logo_256.png": "80f1367eed474a4f7ae9377420ef2190",
"assets/assets/images/love_emoji.png": "1282e10a465f7c27ee5cbf503d2e2bda",
"assets/assets/images/map_button_bg.webp": "fee142de644f1395dc24ca115a40f5ed",
"assets/assets/images/nature_background.webp": "cefab7b228a53351137ed733ef8974b6",
"assets/assets/images/navigation70.png": "e85ef7b595e534748d9522903741a9cc",
"assets/assets/images/neutral_emoji.png": "e05720d8f6fd95a0a599a0556e0fc0cf",
"assets/assets/images/night_bg.webp": "8db0001630c1720472cf2f7d1f8b1e9a",
"assets/assets/images/phone_location.png": "441bcd4edb1cb3d7b3f3b27906f11c7d",
"assets/assets/images/sad_emoji.png": "f1b5ea37b156ddba31727c106eb19ead",
"assets/assets/images/school.png": "67b65f7a9c69575ba299e3634a296ce5",
"assets/assets/images/shopping_bag.png": "7aca503d2028930991a2a4d8f8ada53a",
"assets/assets/images/smile_emoji.png": "804450961ce1e6a343d9c162d7691680",
"assets/assets/images/spline.png": "ff232f0cf3ebd732ca4383c381450714",
"assets/assets/images/user.png": "1300018473cc0038187aaa0e2604fa27",
"assets/assets/images/user_profile.png": "ccae05aa58bab3892cbd32dfba67ce71",
"assets/assets/images/user_profile_background.jpg": "64f244306195a5857219bf4be8e4498a",
"assets/assets/images/vanphong.PNG": "4d91a813e30d9029ee9c8cf637dedf0c",
"assets/assets/logo.png": "e1a79eecfc193917510f3cb96e17a8d1",
"assets/assets/rives/shapes.riv": "8839d67714d5e9c52b3e0dbb2b1e89c1",
"assets/assets/sounds/message_incoming.mp3": "2683968b9c5b6614bd55b5d7461f5203",
"assets/assets/sounds/notification_sound_effect.mp3": "387e7a9e5dfaf22381e02607a2e0ef8f",
"assets/assets/stickers/great_job_stickers/1.png": "e202d5a289a0ffc39bae5f2ea89addf6",
"assets/assets/stickers/great_job_stickers/2.png": "d83a6b26d3966c858bfb13374b9c7f1e",
"assets/assets/stickers/great_job_stickers/3.png": "45f260e7244555de211b5787bc4ac16d",
"assets/assets/stickers/great_job_stickers/4.png": "04cc9708c8190b5551479244d10ad87c",
"assets/assets/stickers/great_job_stickers/5.png": "3a65182570099751a1992f7f1a991f23",
"assets/assets/stickers/great_job_stickers/6.png": "8f6a04d55108542c7a25baafaff11c23",
"assets/assets/stickers/great_job_stickers/7.png": "c6c2947c40961e46cfd2904303dddf10",
"assets/assets/stickers/great_job_stickers/8.png": "404bd75427e0dd563a51160f552e3059",
"assets/assets/stickers/great_job_stickers/9.png": "67b46a12af1ca3a4199a903278f7b745",
"assets/assets/stickers/meomeo_stickers/1.png": "4c3fbd72b9ee325f77e17e9abb80064e",
"assets/assets/stickers/meomeo_stickers/10.png": "230a5c3ea9c88d9aea4dcc88143e742c",
"assets/assets/stickers/meomeo_stickers/11.png": "b501f35051c6de1a14cc24fed07fa6cc",
"assets/assets/stickers/meomeo_stickers/12.png": "49ada392ca06550beda132c1fccc328a",
"assets/assets/stickers/meomeo_stickers/13.png": "0a8b7bf1265378a536cf02e186b47053",
"assets/assets/stickers/meomeo_stickers/14.png": "d5c6980e66f4be89d9a53a25ba72b006",
"assets/assets/stickers/meomeo_stickers/15.png": "53c71f8853e0a010a2e9168bb343e11a",
"assets/assets/stickers/meomeo_stickers/16.png": "a3491210665dc97efdc2996909453589",
"assets/assets/stickers/meomeo_stickers/17.png": "71c230dbae60e8f67f093ca745b7a19f",
"assets/assets/stickers/meomeo_stickers/18.png": "5e0545e84358dbfb119ab8530ca12023",
"assets/assets/stickers/meomeo_stickers/19.png": "bd4098b6f2e259dbfd804854c94528e4",
"assets/assets/stickers/meomeo_stickers/2.png": "a594a4f8701780dcabc511f4b71d50f3",
"assets/assets/stickers/meomeo_stickers/20.png": "6f9d6350f9fe3d9a199cf2ffaff431ef",
"assets/assets/stickers/meomeo_stickers/21.png": "2491c12d46f78241de0d60639f6ed9de",
"assets/assets/stickers/meomeo_stickers/22.png": "3f9f0524a8183e1cbe83bdb7a12da9fa",
"assets/assets/stickers/meomeo_stickers/23.png": "7aa02c2fa1e590cdc2b20cb437470bc0",
"assets/assets/stickers/meomeo_stickers/24.png": "68f5ba67eef201c1718ed81b1c836817",
"assets/assets/stickers/meomeo_stickers/25.png": "7cb634ce9d767694ace115ec1834b5c0",
"assets/assets/stickers/meomeo_stickers/26.png": "09db4f699b17b41080ca056d453b513d",
"assets/assets/stickers/meomeo_stickers/27.png": "200db16582a5c5fd52620fce05904f2a",
"assets/assets/stickers/meomeo_stickers/28.png": "e56617d938c6716eecb9de3a8a0ff0ff",
"assets/assets/stickers/meomeo_stickers/29.png": "0fb712e5d816f556437999bb04a9ad70",
"assets/assets/stickers/meomeo_stickers/3.png": "c87f5be78e379449a622d7cceb305e96",
"assets/assets/stickers/meomeo_stickers/30.png": "d86ba01766f5f89eaf290e3a90f7f368",
"assets/assets/stickers/meomeo_stickers/4.png": "5a3f4f8728173e996b8d40a521a31294",
"assets/assets/stickers/meomeo_stickers/5.png": "e9fe71ae1c449ed55949221aabd48705",
"assets/assets/stickers/meomeo_stickers/6.png": "d86ba01766f5f89eaf290e3a90f7f368",
"assets/assets/stickers/meomeo_stickers/7.png": "41259c53efe9ea2aa20276bea45aad9b",
"assets/assets/stickers/meomeo_stickers/8.png": "e53f251357566d9cfa8b1f001e9d1947",
"assets/assets/stickers/meomeo_stickers/9.png": "00b83c21764172f0ffdfd84d169cdf02",
"assets/assets/svg/area_location_outline_rounded.svg": "db970d6c123d492944875e93c3014f63",
"assets/assets/svg/bell.svg": "86b0c41160d2a55303c78a40aa215ad8",
"assets/assets/svg/bubble_chat.svg": "a7aee039691270baf70b32d7832f87a5",
"assets/assets/svg/chat_off.svg": "a509a570599f2a832ff56b5a07a72c45",
"assets/assets/svg/chat_on.svg": "b38bd3269638336d595b4edda2079f83",
"assets/assets/svg/eye.svg": "35e18855d3d12c312e855bfa0eef65a1",
"assets/assets/svg/footer-art.svg": "2a0e0fe9e09032c1a77d896728ae6326",
"assets/assets/svg/heart_off.svg": "7746f5e4d82a2cf71a3d1f30fdef6ace",
"assets/assets/svg/heart_on.svg": "0f0a056e8d5201f34189fc50f0566f97",
"assets/assets/svg/home_off.svg": "6f087f95ffc4946f72d8d4e7513ca13e",
"assets/assets/svg/home_on.svg": "7704c62a310722e5326b7ff0cf808e4a",
"assets/assets/svg/images_square_duotone.svg": "439095b4d66f2ca91dc2e1e0eda7e75f",
"assets/assets/svg/location_off.svg": "cc49f5a20d0ebbf937d7b47e6362c732",
"assets/assets/svg/location_on.svg": "bc21efd8bdd1a47a98e0980b0bd68126",
"assets/assets/svg/notes_off.svg": "7d02e0a7f90eb4ddd1be2acb05444e62",
"assets/assets/svg/notes_on.svg": "9b1649714f0d9fc841d3d4717bd0eb48",
"assets/assets/svg/user_off.svg": "7de5e5f7d3fbd734c8d9328cc6806365",
"assets/assets/svg/user_on.svg": "47be60baa8a7281a95b735338d2d4b18",
"assets/assets/web/advertising_script.html": "5c88708d0d5dafb209d4ac242ea05b44",
"assets/FontManifest.json": "341df5cb9f7bac23a09d14092ad93e19",
"assets/fonts/MaterialIcons-Regular.otf": "7c17f792b7a1bccbebefe242a9048efb",
"assets/NOTICES": "4ab6bc18a8842325956f469baadeb9e7",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "349173461a2aafd57e4c6fbdb7865018",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/flutter_phosphor_icons/fonts/Phosphor.ttf": "ae434202ddb6730654adbf02f8f3bc5d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "f7cdfa99dee29664d54fb758c8e1c13c",
"firebase-messaging-sw.js": "320ca09b20f5e3ae30a59a007a9d1a75",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "33b3e7ddc013669fd82b72de7e6e3251",
"icons/Icon-512.png": "9b758853373717a2f801e9d8240ae314",
"icons/Icon-maskable-192.png": "33b3e7ddc013669fd82b72de7e6e3251",
"icons/Icon-maskable-512.png": "9b758853373717a2f801e9d8240ae314",
"index.html": "749f53be509f14648de90a32c5559b25",
"/": "5068290e0f48e016bb2108fdb50e6f94",
"main.dart.js": "fe578a3b5d2144dba0b82fc6842263bb",
"manifest.json": "c1f901802a5d43678ff8e33e82e7067d",
"noloop-100.gif": "e87ae21dc722b0b888e7967b4817bd4d",
"policy/images/769908827.jpeg": "16adf019d965ad9cee90bcb675d959b3",
"policy/images/img_2_11_f.png": "6c497c41f624b116c0b6382c1575eda0",
"policy/images/img_2_12_b_1.png": "137dd79a98928db46811a5ff12bb5529",
"policy/images/img_2_12_b_2.png": "cfcf257747674732a48e4f893beba5c9",
"policy/images/img_2_12_b_3.png": "5b5c4746acd68933b019f1e21ff0f353",
"policy/images/img_2_12_b_4_1.png": "c58bba203b79ea57dbf4ae9b46d8681d",
"policy/images/img_2_12_b_4_2.png": "f5e5b9fa500fca8b9f95924a29f05f0c",
"policy/images/img_6_1_2.png": "67f7a8e3b21e826fbdca1116f576826a",
"policy/images/img_6_1_4.png": "629d00e6f510ed7bf8f263ccb29366f2",
"policy/images/img_6_1_5.png": "d1dc6ca53ebfccdd2bb39fb53822443c",
"policy/images/img_6_2_1.png": "5c790d4973c3949e952b59494bdcbaf1",
"policy/images/img_6_2_2.png": "91079349f60a98e6a51e323307cdf456",
"policy/images/img_6_2_3.png": "aa7b94619d912d1eb88b82a4a4e5bf58",
"policy/images/img_6_2_4.png": "14ae2b5199a29d8ee32b6f82836fb468",
"policy/images/img_6_2_5.png": "e8e132022d372ad64f5cf59e612f77ca",
"policy/images/img_6_2_6.png": "083b73c6745362f6375d6ad68357b9bb",
"policy/images/img_6_2_7.png": "7d35b745e1bbd524028a332b87320c49",
"policy/images/img_6_2_8.png": "1447dcdd8aedfd825c79b5e6a3a1920f",
"policy/images/img_6_3_1.png": "7cc896707fb99110e579e312920085fa",
"policy/images/img_6_3_2.png": "242db77492a6cc579d1c811ec201d0c4",
"policy/images/img_6_3_3.png": "ec11766cb93b042d5b9ea1ad1814c39d",
"policy/images/img_6_3_4.png": "34a5853c852682a3fba1a9f3e50f97c4",
"policy/images/img_6_4_1.png": "c2c1308be76cab5937b8ced5102356fc",
"policy/images/img_6_4_10.png": "087853225df31267a33633a2e3c82ced",
"policy/images/img_6_4_11.png": "a21cd1dd64a7eb6373dd0f5c749e1304",
"policy/images/img_6_4_12.png": "d036c2b463447abdf70f9878dcb002a7",
"policy/images/img_6_4_13.png": "492ca53dc051a21fdb6de49f326c1b3e",
"policy/images/img_6_4_14.png": "0879e87727b85e3d818a07d893ac2b90",
"policy/images/img_6_4_15.png": "e6c8042f5c527bf53faa7b808a6b7a41",
"policy/images/img_6_4_2.png": "42487d7d196138bdd70ed48f4f86f21b",
"policy/images/img_6_4_3.png": "868e427c46e5bdfeab533b378a9c6a4e",
"policy/images/img_6_4_4.png": "2cc1e540d8166ce0d59062b5e0b491cf",
"policy/images/img_6_4_5.png": "b7011a99e96ebef771fbfd052f706858",
"policy/images/img_6_4_6.png": "e380e82011e8503a62931997dc74e6b0",
"policy/images/img_6_4_7.png": "40bd1af8111dc54e7685d8d69358358c",
"policy/images/img_6_4_8.png": "7c995b9161df2fb01fb908b55384a42c",
"policy/images/img_6_4_9.png": "7539845c365125fa134e360660a147fd",
"policy/images/img_6_5_1.png": "ade130a414df5bf214cf826f3b39c667",
"policy/images/img_6_5_2.png": "43439631c8749996fb17b9a4df81668f",
"policy/images/img_6_6_1.png": "4f15c9d226db863a50d1b47c29d0e3e3",
"policy/images/img_6_6_2.png": "7ad5673348b7dcddde783e3692a68389",
"policy/images/img_6_6_3.png": "975e50d4a2f4bbee19f86861cf929f5f",
"policy/images/img_6_6_4.png": "4e367babdd51db6321dfc8bd1b47509b",
"policy/index.html": "5068290e0f48e016bb2108fdb50e6f94",
"policy/index.js": "2cd5f8bded15fd256f6ca241d8ba4fd9",
"policy/section/ads.html": "af79b7b8b84b924b1927b7c683e4e658",
"policy/section/guildeline.html": "582ed2c48768bfce49984301799cde38",
"policy/section/introduce.html": "f0e0aefeb4b0e0990a8bba23fef31e00",
"policy/section/price_post_user.html": "34360d5f8a19c27bb00e17595b456b60",
"policy/section/question.html": "7cdf07ba1968d14a7b81bf79e88634df",
"policy/section/rule_operation.html": "cd576fde5209aec48587714136185478",
"policy/section/rule_post.html": "38fa9fbdfb82d19345256e49f06aa0f7",
"policy/section/security.html": "0dff24ec0651ff287d3629fb62212f05",
"policy/section/support.html": "5ced78556524fcb1097dea29f536defb",
"policy/style.css": "030d0821c927a25a12c789289c1f5044",
"Robots.txt": "3587a3ca8e565f49eb97721ae07a8e16",
"version.json": "792a3c4b72e612900dd2117d5f072841"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
