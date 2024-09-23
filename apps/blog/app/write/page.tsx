import React from 'react'
import { EditorClient } from "@feature/editor/src/EditorClient"
import { Button } from '@ui/base/shadcn/button'
import MaxWidthWrapper from '@ui/base/layout/wrapper/MaxWidthWrapper'
export default function page() {
    return (
        <div className='mt-5'>
            <MaxWidthWrapper>
				<EditorClient/>
            </MaxWidthWrapper>
        </div>
    )
}
