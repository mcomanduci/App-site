import SuperchargeItems from './SuperchargeItems';
import iconBlacklist from '../../public/images/icon-blacklist.svg';
import iconText from '../../public/images/icon-text.svg';
import iconPreview from '../../public/images/icon-preview.svg';

function SuperchargeSection() {
  return (
    <section id='supercharge'>
      <div className='section-container my-20'>
        <h3>Supercharge your workflow</h3>
        <p className='section-content mb-16'>
          We&apos;ve got the tools to boost your productivity.
        </p>
        <div className='flex flex-col items-center justify-between space-y-16 md:flex-row md:space-x-12 md:space-y-0'>
          <SuperchargeItems
            image={iconBlacklist}
            title='Create Blacklists'
            content='Easily search your snippets by content, category, web address, application, and more.'
          />
          <SuperchargeItems
            image={iconText}
            title='Plain Text Snippets'
            content='Remove unwanted formatting from copied text for a consistent look.'
          />
          <SuperchargeItems
            image={iconPreview}
            title='Sneak Preview'
            content='Quick preview of all snippets on your Clipboard for easy access.'
          />
        </div>
      </div>
    </section>
  );
}

export default SuperchargeSection;
