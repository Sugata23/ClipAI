"use client"
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function SelectTopic() {
    const options=['Custom Prompt','Random AI Story','Scary Story','Historical Facts','Bed Time Story','Fictional Story','Fun Facts']
    const[selectedTopic, setSelectedTopic] = useState()
    return (
        <div>
            <h2 className='font-bold text-primary text-xl'>Content</h2>
            <p className='text-gray-500'>What is the topic of your video</p>
            <Select>
                <SelectTrigger className="w-full mt-2 p-6 text-lg">
                    <SelectValue placeholder="Content Type" />
                </SelectTrigger>
                <SelectContent>
                    {options.map((item,index)=>(
                        <SelectItem value={item}>{item}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

        </div>
    )
}

export default SelectTopic