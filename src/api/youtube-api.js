import axios from "axios"
import { API_KEY, CHANNEL_ID } from "../config"

export class YoutubeAPI{

    static async fetchVideos(){
        const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`

        try{
            const response = await axios.get(url)
            console.log(response)
            return response.data.items
        } catch(error){
            console.log(error);
            throw error;
        }
    }
}