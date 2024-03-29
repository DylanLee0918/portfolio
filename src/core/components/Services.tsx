import React, { FunctionComponent } from "react";
import styles from "../../style";
import { circuit, consultancy, programming } from "../../assets";

const Services: FunctionComponent = () => {
  return (
    <React.Fragment>
      <section
        id='services'
        className={`w-full sm:${styles.marginY} mt-24 flex flex-col justify-center sm:items-center`}
      >
        <h2 className='font-poppins font-semibold text-[36px] md:text-[44px] mb-4'>
          <span className='text-gradient'>Our Services</span>
        </h2>
        {/*  IT Hardware Procurement */}
        <div className={`w-full flex md:flex-row md:justify-between flex-col`}>
          <div
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 md:px-16 sm:px-10`}
          >
            <div className='mb-2'>
              <p className={`${styles.paragraph}`}>
                <span className='text-gradient font-poppins font-semibold text-[24px] sm:text-[32px]'>
                  IT Hardware Procurement
                </span>
              </p>
            </div>
            <div>
              <p className={`${styles.paragraph} mt-2 z-[5] font-normal`}>
                Our primary service revolves around sourcing, supplying, and
                configuring IT hardware components and equipment. We work
                closely with trusted vendors to provide high-quality,
                cost-effective solutions that meet your hardware needs.
              </p>
              <p className={`${styles.paragraph} mt-5 z-[5] font-normal`}>
                We maintain an extensive inventory of hardware products and
                components, ensuring quick turnaround times for procurement.
              </p>
            </div>
          </div>
          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-12 my-10 sm:px-10 relative`}
          >
            <img
              src={circuit}
              alt='circuit'
              className='w-[100%] h-[100%] relative z-[5]'
            />
          </div>
        </div>

        {/*  IT Consultancy */}
        <div className={`flex md:flex-row-reverse md:justify-between flex-col`}>
          <div
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 md:px-16 sm:px-10`}
          >
            <div className='mb-2'>
              <p className={`${styles.paragraph}`}>
                <span className='text-gradient font-poppins font-semibold text-[24px] sm:text-[32px]'>
                  IT Consultancy
                </span>
              </p>
            </div>
            <div>
              <p className={`${styles.paragraph} mt-2 z-[5] font-normal`}>
                In addition to hardware procurement, we offer expert IT
                consultancy services. Our experienced consultants are ready to
                guide you through technology-related decisions, offering
                strategic insights to optimize your IT infrastructure.
              </p>
              <p className={`${styles.paragraph} mt-5 z-[5] font-normal`}>
                We help businesses make informed choices on hardware and
                software solutions, infrastructure planning, and technology
                adoption.
              </p>
            </div>
          </div>
          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-12 sm:px-10 my-10 relative`}
          >
            <img
              src={consultancy}
              alt='circuit'
              className='w-[100%] h-[100%] relative z-[5]'
            />

            {/* gradient start */}
            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
            <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-20' />
            <div className='absolute z-[0] w-[50%] h-[50%] right-96 bottom-72 blue__gradient' />
            {/* gradient end */}
          </div>
        </div>

        {/*  Software Development */}
        <div className={`flex md:flex-row md:justify-between flex-col`}>
          <div
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 md:px-16 sm:px-10`}
          >
            <div className='mb-2'>
              <p className={`${styles.paragraph}`}>
                <span className='text-gradient font-poppins font-semibold text-[24px] sm:text-[32px]'>
                  Software Development
                </span>
              </p>
            </div>
            <div>
              <p className={`${styles.paragraph} mt-2 z-[5] font-normal`}>
                We recognize the importance of software in modern business
                operations. Our skilled development team can design and develop
                custom software solutions tailored to your specific needs.
              </p>
              <p className={`${styles.paragraph} mt-5 z-[5] font-normal`}>
                Whether it's mobile apps, web applications, or custom software
                systems, we bring your ideas to life, streamlining your business
                processes and enhancing your competitive edge.
              </p>
            </div>
          </div>
          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-12 sm:px-10 my-10 relative`}
          >
            <img
              src={programming}
              alt='circuit'
              className='w-[100%] h-[100%] relative z-[5]'
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Services;
