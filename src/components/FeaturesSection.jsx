import FeatureItems from './FeatureItems';
import imageComputer from '../../public/images/image-computer.png';

function FeaturesSection() {
  return (
    <section id='features'>
      <div className='section-container my-20'>
        <div className='relative flex flex-col md:flex-row md:space-x-32'>
          <div className='md:w-1/2'>
            <img
              src={imageComputer}
              alt=''
              className='right-[50%] top-0 md:absolute'
            />
          </div>

          <div className='mb-24 mt-16 flex flex-col space-y-12 text-xl md:mb-60 md:w-1/2 md:pl-16 md:text-left'>
            <FeatureItems
              title='Quick Search'
              description='Easily search your snippets by content, category, web address,
                application, and more.'
            />
            <FeatureItems
              title='iCloud Sync'
              description='Instantly saves and syncs snippets acrross all your devices.'
            />
            <FeatureItems
              title='Completely History'
              description='Retrieve any snippets from the first moment you started using the app.'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
