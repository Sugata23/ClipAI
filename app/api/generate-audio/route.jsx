import { storage } from '@/configs/FirebaseConfig';
import textToSpeech from '@google-cloud/text-to-speech';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { NextResponse } from 'next/server';

const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient({
    apiKey: process.env.GOOGLE_API_KEY
});

export async function post(req) {
    const { text, id } = await req.json();
    const storageRef=ref(storage, 'ai-vid-files/'+id+'.mp3');
    const request = {
        input: { text: text },
        voice: { languageCode: 'en-US', ssmlGender: 'MALE' },
        audioConfig: { audioEncoding: 'MP3' },
    };

    // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request);

    const audioBuffer=Buffer.from(response.audioContent, 'binary');
    await uploadBytes(storageRef, audioBuffer,{contentType: 'audio/mp3'});
    const downloadURL=await getDownloadURL(storageRef);
    return NextResponse.json({Result: downloadURL});
}