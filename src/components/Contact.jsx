import React from 'react'

const Contact = () => {
  return (
    <div class="flex justify-center my-5 h-full sm:h-[70vh] items-center" id='contact'>
        <div class="max-w-[1200px] mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div class="p-6  mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">
                        <h1 class="text-4xl sm:text-5xl text-white">
                            Contact <span>Me</span>
                        </h1>
                        <p class="text-normal text-lg text-gray-400 mt-2">
                            Let's connect on LinkedIn <br /> or send me an email.
                        </p>

                        <div class="flex items-center mt-2 text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2"></path>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                <p>Muhammad Habib Yusuf</p>
                            </div>
                        </div>
                    </div>

                    <form action='https://getform.io/f/wbrkrgqa' method='post' class="p-6 flex flex-col justify-center max-w-[700px]">
                        <div class="flex flex-col text-gray-200">
                            <label for="name" class="text-lg">Name</label>
                            <input type="text" name="name" id="name" placeholder="Full Name" class="py-2 px-3 rounded-lg bg-gray-800 mt-1 border-gray-700 text-white" required/>
                        </div>

                        <div class="flex flex-col text-gray-200 mt-2">
                            <label for="email" class="text-lg">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" class="py-2 px-3 rounded-lg bg-gray-800 mt-1 border-gray-700 text-white" required/>
                        </div>

                        <div class="flex flex-col text-gray-200 mt-2">
                            <label for="message" class="text-lg">Message</label>
                            <textarea name="message" id="message" placeholder="Your Message" class="py-2 px-3 rounded-lg bg-gray-800 mt-1 border-gray-700 text-white" required></textarea>
                        </div>

                        <button type="submit" class="bg-primary-color text-white py-3 rounded-lg mt-3">Send</button>
                    </form>

            </div>
        </div>
    </div>
  )
}

export default Contact