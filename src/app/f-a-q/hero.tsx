'use client'
import Image from "next/image";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    { question: "How we serve food?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?" },
    { question: "How is our food quality?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?" },
    { question: "How do we give home delivery?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?" },
    { question: "How can we get in touch with you?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?" },
    { question: "What will be delivered? And When?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?" },
    { question: "Is this restaurant 24 hours open?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header Section */}
      <div className="relative w-full h-[350px] flex items-center justify-center">
        <Image
          src="/header.png"
          alt="FAQ Background"
          fill
          className="object-cover"
        />
        <div className="absolute z-10 text-center text-white">
          <h1 className="text-[48px] font-bold">FAQ Page</h1>
          <p className="text-[20px] mt-2 flex items-center justify-center gap-2">
            Home <MdArrowForwardIos/> <span className="text-[#FF9F0D]">Checkout</span>
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="sm:px-12 lg:px-24 mt-32 mb-32">
        <h2 className="text-[48px] text-[#333333] font-bold text-center mb-4">Questions Looks Here</h2>
        <p className="text-[#4F4F4F] text-center mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2] w-[648px] rounded-sm shadow-md p-4 cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-[24px] text-[#333333] hover:text-[#FF9F0D]">
                  {openQuestion === index ? "—" : "+"}
                </span>
              </div>
              {openQuestion === index && (
                <p className="text-sm text-[#4F4F4F] mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
