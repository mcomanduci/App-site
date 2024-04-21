import logo from '/images/logo.svg';

function HeroSection() {
  return (
    <section id='hero'>
      <div className='section-container mb-40 pt-16'>
        <img src={logo} alt='' className='mx-auto my-16' />
        <h3>A history of everything you copy</h3>
        <p className='mx-auto mb-10 max-w-3xl text-center text-2xl leading-9 text-grayishBlue'>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all devices.
        </p>
        <div className='button-container'>
          <a
            href='#'
            className='rounded-full bg-strongCyan p-4 px-8 shadow-lg duration-200 hover:opacity-80'
          >
            Download for iOS
          </a>
          <a
            href='#'
            className='rounded-full bg-lightBlue p-4 px-8 shadow-lg duration-200 hover:opacity-80'
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
