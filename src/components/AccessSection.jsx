import imageDevices from '/images/image-devices.png';

function AccessSection() {
  return (
    <section id='access'>
      <div className='section-container my-20'>
        <h3>Access Clipboard Anywhere</h3>
        <p className='section-content mb-24'>
          Whether you&apos;re on the go, or at your computer, you can access all
          your Clipboard snippets in a few simple clicks.
        </p>

        <img src={imageDevices} alt='' className='mx-auto' />
      </div>
    </section>
  );
}

export default AccessSection;
