const Logo = ({ size = 40, className = '' }) => {
  return (
    <img
      src="/Logo.png"
      alt="WOW WASH Logo"
      className={className}
      width={size}
      height={size}
      style={{
        objectFit: 'contain',
        display: 'block',
      }}
    />
  );
};

export default Logo;




