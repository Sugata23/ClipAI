import React from 'react'
import SelectTopic from './_components/SelectTopic'

function CreateNew() {
    return (
        <div className='md:px-20'>
            <h2 className='text-4xl font-bold text-primary text-center'>Create New</h2>
            <div>
                {/* select topic */}
                <SelectTopic />
                {/* select style */}

                {/* select duration */}

                {/* create video */}
            </div>
        </div>
    )
}

export default CreateNew