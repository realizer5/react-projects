import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://avatars.pfptown.com/559/cyberpunk-pfp-1666.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            React development refers to the process of building user interfaces using React, a popular JavaScript library maintained by Facebook. React allows developers to create dynamic, reusable UI components that can efficiently update and render in response to changes in application data. It uses a virtual DOM to optimize performance by minimizing the number of direct manipulations of the actual DOM, leading to faster and more responsive web applications.
                        </p>
                        <p className="mt-4 text-gray-600">
                            React’s component-based architecture makes it easier to manage complex user interfaces by breaking them down into smaller, manageable pieces. Additionally, with features like hooks and context, React offers a powerful, declarative way to manage state and side effects within components, making it a go-to choice for modern web development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

