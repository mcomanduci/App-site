function FooterMenu({ item1, item2 }) {
  console.log(item2)
  return (
    <div className='flex flex-col space-y-4 text-center md:text-left'>
      <div>
        <a href='#' className='hover:text-strongCyan'>
          {item1}
        </a>
      </div>
      {item2 && (
        <div>
          <a href='#' className='hover:text-strongCyan'>
            {item2}
          </a>
        </div>
      )}
    </div>
  );
}

export default FooterMenu;
