import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import arjit from './arjit-singh.png'
import arjit1 from './arjit-singh0.mp3'
import arjit2 from './arjit-singh1.mp3'
import arjit3 from './arjit-singh2.mp3'
import kk from './KK.jpeg'
import sonu from './sonu-nigam.jpg'
import lang from './browse_icon.png'
import bengali from './Bengali.jpg'
import hindi from './Hindi.jpg'
import tamil from './Tamil.jpg'
import kk1 from './kk0.mp3'
import kk2 from './kk1.mp3'
import kk3 from './kk3.mp3'
import sonu0 from './sanu-nigam0.mp3'
import sonu1 from './sanu-nigam1.mp3'
import sonu2 from './sanu-nigam2.mp3'


export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon,
    lang
}

export const albumsData = [
    {   
        id:1,
        name: "Arjit Singh",
        image: arjit,
        file: "arjit",
        desc:"Indian playback singer and musical composer",
        bgColor:"#2a4365"
    },
    {    
        id:2,
        name: "kk",
        image: kk,
        file: "kk",
        desc:"Indian playback singer and musical composer",
        bgColor:"#22543d"
    },
    {   
        id:3,
        name: "Sonu Nigam",
        image: sonu,
        file: "sonu",
        desc:"Indian playback singer and musical composer",
        bgColor:"#742a2a"
    }
]

export const popularAlbumsData = [
    {   
        id:1,
        name: "Top 10 Hindi Songs",
        image: hindi,
        lang: "hindi",
        desc:"Indian most playing Songs",
        bgColor:"#2a4365"
    },
    {   
        id:2,
        name: "Top 10 Bengali Songs",
        image: bengali,
        lang: "bengali",
        desc:"Indian most playing Songs",
        bgColor:"#22543d"
    },
    {   
        id:3,
        name: "Top 10 Tamil Songs",
        image: tamil,
        lang: "tamil",
        desc:"Indian most playing Songs",
        bgColor:"#742a2a"
    }
]

export const songsData = [
    {
        id:0,
        name: "আর কবে ??",
        image: arjit,
        song: arjit1,
        lang: "bengali",
        file:"arjit",
        date:"30-09-2024",
        desc:"জমেছে এক পাহার অশোধন অব্যক্ত / স্টব্ধ হয়ে ছিল তারা, ব্যস্ত হাজার / তাই যে নাই খেয়াল পেছনেই দেয়াল",
        duration:"3:13"
    },
    {
        id:1,
        name: "দেখো আলোয় আলো আকাশ",
        image: arjit,
        song: arjit2,
        lang: "bengali",
        file: "arjit",
        date:"30-09-2024",
        desc:"অসতো মা সদ গময়, তম সো মা জ্যোতির্গময়ঃ / ওম মৃত্যর্মা অমৃতমঃ গময়ঃ শান্তি শান্তি ওম / শান্তি ওম, শান্তি ওম, হরি ওম তদসদ,",
        duration:"5:17"
    },
    {
        id:2,
        name: "যাবো না যাবো না ফিরে আর ঘরে",
        image: arjit,
        song: arjit3,
        lang: "bengali",
        file: "arjit",
        date:"30-09-2024",
        desc:"ইয়া গো দাঁড়িযাচা দাঁড়িয়াচা দারিয়াচা / দা রা রা মুঠা.. / কাভা পানিয়াভারি উথটান ডোঙ্গারলাটা / লাটা লাটা লাটা |",
        duration:"3:18"
    },
    {
        id:3,
        name: "इश्क़ ने, तेरे इश्क़ ने",
        image: kk,
        song: kk1,
        lang: "hindi",
        file: "kk",
        date:"30-09-2024",
        desc:"इश्क़ ने, तेरे इश्क़ ने / इश्क़ ने, तेरे इश्क़ ने / इश्क़ ने, तेरे इश्क़ ने / इश्क़ ने, तेरे इश्क़ ने",
        duration:"5:36"
    },
    {
        id:4,
        name: "कहो ना कहो,",
        image: kk,
        song: kk2,
        lang: "hindi",
        file: "kk",
        date:"30-09-2024",
        desc:"कहो ना कहो, ये आँखें बोलती है / ओ सनम ओ सनम, ओ मेरे सनम / मोहब्बत के सफर में ये सहारा है / वफा के साहिलों का ये किनारा है,",
        duration:"4:25"
    },
    {
        id:5,
        name: "तू ही मेरी शब है",
        image: kk,
        song: kk3,
        lang: "hindi",
        file: "kk",
        date:"30-09-2024",
        desc:"तू ही मेरी शब है सुबह है, तू ही दिन है मेरा / तू ही मेरा रब है जहां है, तू ही मेरी दुनिया",
        duration:"6:41"
    },
    {
        id:6,
        name: "All is well",
        image: sonu,
        song: sonu0,
        lang: "hindi",
        file: "sonu",
        date:"30-09-2024",
        desc:"जब life हो out of control, होंठो को करके गोल",
        duration:"6:41"
    },
    {
        id:7,
        name: "All is well",
        image: sonu,
        song: sonu1,
        lang: "hindi",
        file: "sonu",
        date:"30-09-2024",
        desc:"All is well",
        duration:"6:41"
    },
    {
        id:8,
        name: "Zoobi Doobi",
        image: sonu,
        song: sonu2,
        lang: "hindi",
        file: "sonu",
        date:"30-09-2024",
        desc:"गुनगुनाती हैं ये हवाएँ / गुनगुनाता है गगन / गा रहा है ये सारा आलम / ज़ूबी-डू, पा-रम-पम",
        duration:"6:41"
    }
]