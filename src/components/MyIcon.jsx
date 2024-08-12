const MyIcon = () => {
  return (
    <a
      className="text-white font-Inter text-2xl font-bold cursor-pointer flex flex-row gap-2 items-center max-sm:text-xl "
      href="#top"
    >
      <img
        src={
          'https://png.pngtree.com/png-clipart/20240705/original/pngtree-web-programmer-avatar-png-image_15495271.png'
        }
        className="size-10 bg-white rounded-full p-1"
      />
      {'<EnriqueMH />'}
    </a>
  );
};

export default MyIcon;
