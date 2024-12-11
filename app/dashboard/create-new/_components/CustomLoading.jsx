import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from 'next/image'

function CustomLoading({loading}) {
    return (
        <AlertDialog open={loading}>
            <AlertDialogContent>
                <div className=' flex flex-col items-center justify-center my-10'>
                    <Image src={'/progress.gif'} alt={'progress'} width={100} height={100}/>
                    <h2 className='mt-2 text-lg'>Generating your video...Do not refresh</h2>
                </div>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default CustomLoading