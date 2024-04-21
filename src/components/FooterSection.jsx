import FooterMenu from './FooterMenus';
import logo from '/images/logo.svg';
import facebookIcon from '/images/icon-facebook.svg';
import twitterIcon from '/images/icon-twitter.svg';
import instagramIcon from '/images/icon-instagram.svg';

function Footer() {
  return (
    <section className='bg-gray-50' id='footer'>
      <div className='section-container'>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          <img src={logo} alt='' className='scale-50' />

          <div className='mb-10 flex flex-1 flex-col items-center justify-between space-y-6 text-grayishBlue md:mb-0 md:flex-row md:space-y-0'>
            <div className='flex flex-col space-y-4 md:ml-24 md:flex-row md:space-x-24 md:space-y-0'>
              <FooterMenu item1='FAQs' item2='Contact Us' />
              <FooterMenu item1='Privacy Policy' item2='Press Kit' />
              <FooterMenu item1='Install Guide' item2={null} />
            </div>

            <div className='flex w-32 justify-between py-1'>
              <a href='#'>
                <img
                  src={facebookIcon}
                  alt=''
                  className='ficon2 duration-200'
                />
              </a>
              <a href='#'>
                <img src={twitterIcon} alt='' className='ficon3 duration-200' />
              </a>
              <a href='#'>
                <img
                  src={instagramIcon}
                  alt=''
                  className='ficon4 duration-200'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
