"use client"
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'

function SelectTopic({onUserSelect}) {
    const options=['Custom Prompt','Random AI Story','Scary Story','Historical Facts','Bed Time Story','Fictional Story','Fun Facts']
    const[selectedTopic, setSelectedTopic] = useState();
    return (
        <div>
            <h2 className='font-bold text-primary text-xl'>Content</h2>
            <p className='text-gray-500'>What is the topic of your video</p>
            <Select onValueChange={(value) => {
                setSelectedTopic(value)
                value != 'Custom Prompt' &&onUserSelect('topic',value)
                }}>
                <SelectTrigger className="w-full mt-2 p-6 text-lg">
                    <SelectValue placeholder="Content Type" />
                </SelectTrigger>
                <SelectContent>
                    {options.map((item,index)=>(
                        <SelectItem value={item}>{item}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {selectedTopic == 'Custom Prompt'&& 
                <Textarea 
                onChange={(e) => {
                    onUserSelect('topic',e.target.value)
                }}
                placeholder='Enter your custom prompt here' 
                className='mt-4'/>
            }
        </div>
    )
}

export default SelectTopic