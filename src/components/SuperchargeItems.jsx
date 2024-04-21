function SuperchargeItems({ image, title, content }) {
  return (
    <div className='flex flex-col items-center space-y-5'>
      <img src={image} alt='' className='mb-6' />
      <h5>{title}</h5>
      <p className='max-w-md text-grayishBlue'>{content}</p>
    </div>
  );
}

export default SuperchargeItems;
