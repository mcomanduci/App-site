import googleLogo from '/images/logo-google.png';
import imbLogo from '/images/logo-ibm.png';
import microsoftLogo from '/images/logo-microsoft.png';
import hpLogo from '/images/logo-hp.png';
import vectorGraphicsLogo from '/images/logo-vector-graphics.png';

function ReferencesSection() {
  return (
    <section id='references'>
      <div className='mx-auto my-44 flex max-w-6xl flex-col items-center justify-between space-y-16 px-10 md:flex-row md:space-y-0'>
        <img src={googleLogo} alt='' />
        <img src={imbLogo} alt='' />
        <img src={microsoftLogo} alt='' />
        <img src={hpLogo} alt='' />
        <img src={vectorGraphicsLogo} alt='' />
      </div>
    </section>
  );
}

export default ReferencesSection;
