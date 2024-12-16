"use client";
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomLoading from './_components/CustomLoading';
import { v4 as uuidv4 } from 'uuid';

function CreateNew() {
    const [formdata, setFormdata] = useState([]);
    const [loading, setLoading] = useState(false);
    const [videoScript, setVideoScript] = useState();
    const [audioFileURL, setAudioFileURL] = useState();
    const [audioCaption, setAudioCaption] = useState();
    const onHandleInputChange = (fieldName, fieldValue) => {
        //console.log(fieldName, fieldValue);
        setFormdata(prev=>({
            ...prev,
            [fieldName]: fieldValue
        }))
    };
    const onClickCreateHandler = () => {
        //GetVideoScript();
        //GenerateAudioFile()
        GenerateAudioCaption();
    }
    //get video script from AI model
    const GetVideoScript =async () => {
        setLoading(true);
        const prompt='Write a script to generate '+formdata.duration+' video on topic :'+formdata.topic+' along with Al image prompt in '+formdata.imageStyle+' format for each scene and give me result in JSON format with imagePrompt and ContentText as field, No Plain text';
        console.log(prompt);
        const result=await axios.post('/api/get-video-script',{
            prompt:prompt
        }).then(res=>{
            //console.log(res.data.result);
            setVideoScript(res.data.result);
            GenerateAudioFile(res.data.result);
        })
        setLoading(false);
    }

    //generate audio from video script
    const GenerateAudioFile=async(videoScriptData)=>{
        setLoading(true);
        let script='';
        const id=uuidv4();
        videoScriptData.forEach(element => {
            script+=element.ContentText+' ';
        });
        //console.log(script);
        await axios.post('/api/generate-audio',{
            text:script,
            id:id
        }).then(res=>{
            //console.log(res.data.Result)
            setAudioFileURL(res.data.Result);
        });
        setLoading(false);
    }

    //generate audio caption
    const GenerateAudioCaption=async(FileURL)=>{
        setLoading(true);
        await axios.post('/api/generate-caption',{
            audioFileURL:FileURL
        }).there(resp=>{
            console.log(resp.data.result);
            setAudioCaption(resp?.data?.result);
        })
        setLoading(false);
    }

    return (
        <div className='md:px-20'>
            <h2 className='text-4xl font-bold text-primary text-center'>Create New</h2>
            <div className='mt-10 shadow-md p-10'>
                {/* select topic */}
                <SelectTopic onUserSelect={onHandleInputChange}/>
                {/* select style */}
                <SelectStyle onUserSelect={onHandleInputChange}/>
                {/* select duration */}
                <SelectDuration onUserSelect={onHandleInputChange}/>
                {/* create video */}
                <Button className='mt-10 w-full' onClick={onClickCreateHandler}>Create Short Video</Button>
            </div>
            <CustomLoading loading={loading}/>
        </div>
    )
}

export default CreateNew