
/**
 * @module Barebone compent, content is nothing but only tile and menu, it use for empty space
 */
export function Content() {
    return (
        <div className="flex item-center justify-between">
            this is header
        </div>
    )
}

export default function Barebone() {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <Content />
            </div>

        </div>
    )
}


