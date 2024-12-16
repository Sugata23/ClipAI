import { AssemblyAI } from 'assemblyai';
import {NextResponse} from "next/server";

export async function POST(req){
    try {
        const {audioFileURL} = await req.json()
        const client = new AssemblyAI({
            apiKey: process.env.ASSEMBLYAI_API_KEY,
        });

        const FILE_URL = audioFileURL;

        const data = {
            audio: FILE_URL
        }

        const transcript = await client.transcripts.transcribe(data);
        console.log(transcript.words);
        return NextResponse.json({transcript:transcript.words});
    }catch (e){
        return NextResponse.json({error:e.message});
    }

}