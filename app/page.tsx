"use client";
import Image from 'next/image'
import Link from 'next/link'
import ServiceCard from './components/serviceCard'
import { useState } from 'react'

export default function Home() {

  const [formDetails, setFormDetails] = useState({ name: '', email: '', number: '', location: '', message: '', 'g-recaptcha-response': '' })

  const onChange = (e: any) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    console.log(formDetails)
  }

  return (
    <>
      {/* home */}
      <section id='' className='section-container'>
        <section className="text-gray-600">
          <div className="container mx-auto flex px-2 py-2 md:py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mt-6 md:mt-0">
              <img className="object-cover object-center rounded" alt="hero" src="/home.svg" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Nobel Tech Solutions</h1>
              <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-700">Get Solutions To Your Technical Worries!</h1>
              <p className="mb-8 leading-relaxed">Facing difficulties in successfull digitalisation of you bussiness? Don't worry! We are here to provide Reliable and Industry grade solutions to all your Technical worries.</p>
              <div className="flex w-full md:justify-start justify-center items-end">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                  <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="btn-primary py-1 px-3">Subscribe</button>
              </div>
              <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Subscribe to our newsletter, and stay aware about new updates and services.</p>
              <div className="flex lg:flex-row md:flex-col">
                <a href={"/#service"} className="btn-secondary py-1 px-3">Our Servivces</a>
                <a href={"/#contact"} className="btn-primary py-1 px-3 lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0">Contact Us</a>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* services */}
      <section id='service' className='section-container'>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="title-font sm:text-4xl text-3xl font-medium mb-6 text-center">Services We Provide</h1>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <ServiceCard title='Ad campaign' description='Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual' />
              <ServiceCard title='Ad campaign' description='Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual' />
              <ServiceCard title='Ad campaign' description='Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual' />
              <ServiceCard title='Ad campaign' description='Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual' />
              <ServiceCard title='Ad campaign' description='Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual' />
              <ServiceCard title='Ad campaign' description='Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual' />
            </div>
          </div>
        </section>
      </section>

      {/* about */}
      <section id='about' className='section-container'>
        <section className="text-gray-600">
          <div className="container mx-auto flex p-4 flex-col items-center">
            <h1 className="title-font sm:text-4xl text-3xl font-medium mb-6 text-center">About us</h1>
            <div className="mx-auto sm:w-3/4 w-full h-full bg-gray-100 p-8 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fuga, laboriosam nostrum magnam, provident nulla aperiam fugit pariatur eaque sint tenetur voluptate blanditiis ad, ipsum earum corrupti? Voluptas dignissimos assumenda totam temporibus itaque ipsa id similique officia nostrum delectus nam incidunt ab eos molestias, saepe quod alias impedit, dolorum vero sapiente voluptates. Sunt, vero beatae numquam quasi iste voluptatum odit. A voluptate ipsa impedit exercitationem labore voluptatem explicabo et aut, reprehenderit velit omnis rem consequuntur temporibus reiciendis voluptas ipsam veniam placeat cum blanditiis nam modi? Et, in fugit. Vel quae voluptas repellat eius deserunt sapiente similique sunt veniam ipsum, nihil quidem totam, harum aliquam saepe sequi recusandae dicta temporibus laborum, exercitationem vitae. Repellendus ducimus in pariatur ex alias suscipit quo modi saepe? Accusantium provident voluptate enim corrupti officia aspernatur autem quibusdam eum iure nihil velit reprehenderit, fugiat suscipit dignissimos in ad aliquam a. Ipsa illo, libero repellat nobis aliquam quibusdam hic accusantium minus distinctio voluptas modi ducimus fuga explicabo inventore voluptates. Ratione commodi harum, dolores dolor dolore officiis fugit. Repudiandae nam magni saepe accusantium et molestias dignissimos obcaecati tempora eligendi cumque, in ullam vero omnis expedita minus pariatur quos commodi quisquam cum voluptatibus perspiciatis? Saepe accusamus minus veritatis cumque repellendus.</p>
            </div>
          </div>
        </section>
      </section>

      {/* testimonials */}
      <section id='testimonial' className='section-container'>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="title-font sm:text-4xl text-3xl font-medium mb-6 text-center">Testimonials</h1>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                  <a className="inline-flex items-center">
                    <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                      <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                  <a className="inline-flex items-center">
                    <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                      <span className="text-gray-500 text-sm">DESIGNER</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* contact */}
      <section id='contact' className='section-container'>
        <section className="text-gray-600 body-font relative">
          <form id="contactForm" onSubmit={onSubmit}>
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="title-font sm:text-4xl text-3xl font-medium mb-6 text-center">Contact Us</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Fields marked with * are required.</p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name *</label>
                      <input onChange={onChange} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email *</label>
                      <input onChange={onChange} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="number" className="leading-7 text-sm text-gray-600">Contact number *</label>
                      <input onChange={onChange} type="number" id="number" name="number" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="location" className="leading-7 text-sm text-gray-600">Location (city, country) *</label>
                      <input onChange={onChange} type="text" id="location" name="location" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message *</label>
                      <textarea onChange={onChange} id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button type='submit' className="btn-primary py-1 px-3 w-full">Submit Form</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </section>
    </>
  )
}
