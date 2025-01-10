import { useLoaderData } from "react-router-dom"

export default function Github() {
    const data = useLoaderData()
    return (
        <>
            <div className="lg:container p-4 mx-auto md:flex md:space-x-4 space-y-4">
                <img src={data?.avatar_url} alt="" className="h-80 rounded-md" />
                <div className="text-gray-700 font-semibold text-xl md:py-2 px-2 space-y-2">
                    <p>Github followers: {data?.followers}</p>
                    <p>Visit Github: <a href={data?.html_url} target="_blank"
                        className="text-blue-500 underline">click here</a></p>
                </div>
            </div>
        </>
    )
}

export const githubInfo = async () => {
    const data = await fetch("https://api.github.com/users/realizer5")
    return data.json()
}
