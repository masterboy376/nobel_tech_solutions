import Image from 'next/image'
import Link from 'next/link'

interface Props {
    title: string;
    description: string;
}

function ServiceCard({ title, description }: Props) {
    return (
        <>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{title}</h2>
                <p className="text-base leading-relaxed mt-2">{description}</p>
              </div>
        </>
    )
}

export default ServiceCard