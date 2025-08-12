
export interface Wallpaper {
    uri: string;
    name: string;
}

interface wallpaperStatus extends Wallpaper {
    liked: boolean;
    recommend: boolean;
    library: boolean;
}

export function useWallpaper(): wallpaperStatus[] {
    return [{
        uri: "https://ideogram.ai/assets/progressive-image/balanced/response/3S3Eqw91R_ujAokpmOJaRg",
        "name":"Flower",
        liked: true,
        recommend: true,
        library: false,
    },{
        uri: "https://ideogram.ai/assets/progressive-image/balanced/response/08yTq1-LSgSRSSguPEdNRw",
        "name": "Jam",
        liked: true,
        recommend: true,
        library: false,
    },{
        uri: "https://ideogram.ai/assets/progressive-image/balanced/response/idbmZtfOReak7UVLLDDBoA",
        "name": "Perfume",
        liked: true,
        recommend: true,
        library: false,
    }, {
        uri: "https://ideogram.ai/assets/progressive-image/balanced/response/tknwo5YtQ8CoOKy0_0bRfA",
        "name": "Nature",
        liked: true,
        recommend: true,
        library: false,
    },{
        uri: "https://ideogram.ai/assets/progressive-image/balanced/response/I5SnON4VT_Sf89YCbvS5Kg",
        "name": "Alien guy",
        liked: true,
        recommend: true,
        library: false,
    }, {
        uri : "https://ideogram.ai/assets/progressive-image/balanced/response/0Gej-WqPSxy0iBy37GmdBg",
        "name": "Buddha",
        liked: true,
        recommend: true,
        library: false,
    }, {
        uri: "https://ideogram.ai/assets/progressive-image/balanced/response/yGvyBvKzR1eViISpnu8VUg",
        "name": "Illustration",
        liked: true,
        recommend: true,
        library: false,
    }, {
        uri: "https://ideogram.ai/assets/image/lossless/response/0CVWuyA8QJWORFQyJkvlMQ",
        "name": "Shoes",
        liked: true,
        recommend: true,
        library: false,
    }]
}

export function useRecommendWalpapers(): wallpaperStatus[] {

    const wallpaper = useWallpaper();

    return wallpaper.filter(w => w.recommend);
}
export function useLikedWalpapers(): wallpaperStatus[] {

    const wallpaper = useWallpaper();

    return wallpaper.filter(w => w.liked);
}
export function useLibraryWalpapers(): wallpaperStatus[] {

    const wallpaper = useWallpaper();

    return wallpaper.filter(w => w.library);
}