/**
 * @module simple Contact page with google map and form 
 */
import React from 'react';
import {Button} from '../base/button'
export const ContactWithMap = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0" 
            title="map"  
						src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Goyang-si,+Gyeonggi-do&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
          ></iframe>
          <div className="bg-white-100 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">주소</h2>
              <p className="mt-1 text-gray-700">경기도 고양시 덕양구 중앙로 555</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">이메일</h2>
              <a className="text-gray-500 leading-relaxed">naroi@naver.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">전화번호</h2>
              <p className="leading-relaxed text-gray-700">010-8727-0868</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">연락하기</h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            메시지를 남겨주세요 
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">메시지</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <Button>
            전달하기
          </Button> 
          <p className="text-xs text-gray-500 mt-3">
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactWithMap;
